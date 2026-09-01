import { useEffect } from "react";
import { getMeta, buildJsonLd, fullTitle, canonicalFor, absoluteUrl } from "@/data/meta";

const DEFAULT_IMAGE = "/Images/LandingPageImage.webp";
const JSON_LD_ID = "site-jsonld";

function upsertMeta(key: string, value: string, attribute: "name" | "property" = "name") {
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", value);
}

function upsertLink(rel: string, href: string) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }

  tag.setAttribute("href", href);
}

/**
 * Keeps the document head in sync during client-side navigation. The same
 * metadata is baked into the prerendered HTML at build time (scripts/prerender.mjs),
 * so crawlers that never run JavaScript see all of this too.
 */
export function Seo({ path }: { path: string }) {
  useEffect(() => {
    const meta = getMeta(path);
    const title = fullTitle(meta.title);
    const canonical = canonicalFor(meta.path);
    const image = absoluteUrl(meta.image ?? DEFAULT_IMAGE);

    document.title = title;
    upsertMeta("description", meta.description);
    upsertMeta("robots", meta.noIndex ? "noindex,nofollow" : "index,follow");
    upsertMeta("og:title", title, "property");
    upsertMeta("og:description", meta.description, "property");
    upsertMeta("og:type", "website", "property");
    upsertMeta("og:url", canonical, "property");
    upsertMeta("og:image", image, "property");
    upsertMeta("og:site_name", "The Cowork", "property");
    upsertMeta("og:locale", "en_PK", "property");
    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", title);
    upsertMeta("twitter:description", meta.description);
    upsertMeta("twitter:image", image);
    upsertLink("canonical", canonical);

    let ld = document.getElementById(JSON_LD_ID) as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement("script");
      ld.id = JSON_LD_ID;
      ld.type = "application/ld+json";
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify(buildJsonLd(meta));
  }, [path]);

  return null;
}
