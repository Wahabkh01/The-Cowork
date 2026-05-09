import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

const SITE_NAME = "The Cowork Hub";
const DEFAULT_IMAGE = "/Images/LandingPageImage.webp";

function upsertMeta(
  selector: string,
  key: string,
  value: string,
  attribute: "name" | "property" = "name",
) {
  let tag = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement("meta");
    document.head.appendChild(tag);
  }

  tag.setAttribute(attribute, key);
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

export function Seo({ title, description, path, image = DEFAULT_IMAGE, noIndex = false }: SeoProps) {
  useEffect(() => {
    const canonicalPath = path ?? window.location.pathname;
    const canonicalUrl = new URL(canonicalPath, window.location.origin).toString();
    const fullTitle = `${title} | ${SITE_NAME}`;

    document.title = fullTitle;
    upsertMeta('meta[name="description"]', "description", description);
    upsertMeta('meta[name="robots"]', "robots", noIndex ? "noindex,nofollow" : "index,follow");
    upsertMeta('meta[property="og:title"]', "og:title", fullTitle, "property");
    upsertMeta('meta[property="og:description"]', "og:description", description, "property");
    upsertMeta('meta[property="og:type"]', "og:type", "website", "property");
    upsertMeta('meta[property="og:url"]', "og:url", canonicalUrl, "property");
    upsertMeta('meta[property="og:image"]', "og:image", image, "property");
    upsertMeta('meta[name="twitter:card"]', "twitter:card", "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', "twitter:title", fullTitle);
    upsertMeta('meta[name="twitter:description"]', "twitter:description", description);
    upsertMeta('meta[name="twitter:image"]', "twitter:image", image);
    upsertLink("canonical", canonicalUrl);
  }, [description, image, noIndex, path, title]);

  return null;
}