#!/usr/bin/env node
/**
 * Turns the client bundle into real static HTML, one file per route.
 *
 * Without this, every URL on the site returns an empty <div id="root"> to any
 * crawler that does not execute JavaScript — which is most of them apart from
 * Googlebot, and Googlebot only gets to it on a deferred second pass.
 *
 * The client still boots with createRoot(), so React replaces the prerendered
 * markup on mount. That means there is no hydration contract to honour and the
 * animation-hiding inline styles below can be safely stripped.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const serverEntry = path.join(distDir, "server", "entry-server.js");

const { renderHead, renderPage, ROUTES } = await import(`file://${serverEntry}`);

const template = await fs.readFile(path.join(distDir, "index.html"), "utf8");

/**
 * framer-motion renders its `initial` state inline, which would put opacity:0
 * on prerendered copy. Strip it so the static HTML is visible text.
 */
function unhide(html) {
  return html
    .replace(/opacity:\s*0(;|")/g, (_m, tail) => (tail === '"' ? '"' : ";"))
    .replace(/transform:\s*translate[^;"]*(;|")/g, (_m, tail) => (tail === '"' ? '"' : ";"))
    .replace(/style="\s*"/g, "");
}

/** Swap the template's <head> contents for this route's, keeping asset links. */
function buildHtml(routePath, appHtml) {
  const head = renderHead(routePath);

  let html = template;

  // Drop the placeholder head tags the template carries; the route supplies its own.
  html = html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(/\s*<meta name="description"[^>]*>/i, "")
    .replace(/\s*<meta name="robots"[^>]*>/i, "")
    .replace(/\s*<link rel="canonical"[^>]*>/i, "")
    .replace(/\s*<meta property="og:[^>]*>/gi, "")
    .replace(/\s*<meta name="twitter:[^>]*>/gi, "");

  html = html.replace("</head>", `  ${head}\n  </head>`);
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${unhide(appHtml)}</div>`,
  );

  return html;
}

let count = 0;
for (const route of ROUTES) {
  const appHtml = renderPage(route.path);
  const html = buildHtml(route.path, appHtml);

  const outPath =
    route.path === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, route.path.replace(/^\//, ""), "index.html");

  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, html, "utf8");
  count += 1;
  console.log(`  prerendered ${route.path.padEnd(34)} ${(html.length / 1024).toFixed(1)} KB`);
}

// A real 404 body, so an unknown URL is not an empty shell either.
const notFoundHtml = buildHtml("/404", renderPage("/this-route-does-not-exist"));
await fs.writeFile(path.join(distDir, "404.html"), notFoundHtml, "utf8");

// Sitemap, generated from the same route list so it can never list a dead URL.
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (r) => `  <url>
    <loc>https://thecowork.pk${r.path === "/" ? "/" : r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`,
).join("\n")}
</urlset>
`;
await fs.writeFile(path.join(distDir, "sitemap.xml"), sitemap, "utf8");

// Clean up the server bundle — it must not ship to the CDN.
await fs.rm(path.join(distDir, "server"), { recursive: true, force: true });

console.log(`\n  ${count} routes prerendered, sitemap.xml regenerated (lastmod ${today}).`);
