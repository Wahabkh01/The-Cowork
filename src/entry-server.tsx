import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";
import { getMeta, buildJsonLd, fullTitle, canonicalFor, absoluteUrl } from "./data/meta";
import { ROUTES } from "./data/routes";
import { IMAGES } from "./data/imageManifest";

const DEFAULT_IMAGE = "/Images/LandingPageImage.webp";

const escapeAttr = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** JSON-LD is injected into a script tag, so `<` must not be able to close it early. */
const escapeJsonLd = (value: string) => value.replace(/</g, "\\u003c");

/** Renders the <head> for a route: title, meta, canonical and the full schema.org graph. */
export function renderHead(path: string): string {
  const meta = getMeta(path);
  const title = fullTitle(meta.title);
  const canonical = canonicalFor(meta.path);
  const image = absoluteUrl(meta.image ?? DEFAULT_IMAGE);
  const jsonLd = escapeJsonLd(JSON.stringify(buildJsonLd(meta)));

  const tags = [
    `<title>${escapeAttr(title)}</title>`,
    `<meta name="description" content="${escapeAttr(meta.description)}" />`,
    `<meta name="robots" content="${meta.noIndex ? "noindex,nofollow" : "index,follow"}" />`,
    `<link rel="canonical" href="${escapeAttr(canonical)}" />`,
    `<meta property="og:site_name" content="The Cowork" />`,
    `<meta property="og:locale" content="en_PK" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${escapeAttr(title)}" />`,
    `<meta property="og:description" content="${escapeAttr(meta.description)}" />`,
    `<meta property="og:url" content="${escapeAttr(canonical)}" />`,
    `<meta property="og:image" content="${escapeAttr(image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(meta.description)}" />`,
    `<meta name="twitter:image" content="${escapeAttr(image)}" />`,
    `<script type="application/ld+json" id="site-jsonld">${jsonLd}</script>`,
  ];

  // Only the homepage renders the hero, so only the homepage should pay to preload it.
  // The srcset is built from the manifest so it always matches what <Img> emits.
  if (meta.path === "/") {
    const srcset = IMAGES.LandingPageImage.widths
      .map((w) => `/Images/opt/LandingPageImage-${w}.webp ${w}w`)
      .join(", ");
    tags.push(
      `<link rel="preload" as="image" fetchpriority="high" imagesizes="100vw" imagesrcset="${escapeAttr(srcset)}" />`,
    );
  }

  return tags.join("\n    ");
}

export function renderPage(path: string): string {
  return renderToString(
    <Router ssrPath={path}>
      <App />
    </Router>,
  );
}

export { ROUTES };
