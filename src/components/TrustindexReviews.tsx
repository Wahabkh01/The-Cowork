import { useEffect, useRef, useState } from "react";

const LOADER = "https://cdn.trustindex.io/loader.js";

/**
 * Trustindex Google-reviews widget — the same service workpod.pk uses.
 *
 * It syncs from the Google Business Profile automatically, so reviews never
 * need pasting by hand. The trade-off is that it renders client-side: the
 * reviews are NOT in the prerendered HTML, so they add no indexable content
 * and are invisible to non-JS crawlers and link scrapers.
 *
 * The widget's layout (slider, 3 per row) and colours are configured in the
 * Trustindex dashboard; src/index.css carries overrides that pull it onto our
 * dark/gold theme.
 *
 * Set VITE_TRUSTINDEX_WIDGET_ID to switch it on — see .env.example.
 */
export function TrustindexReviews({ widgetId, onFail }: { widgetId: string; onFail?: () => void }) {
  const holder = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const node = holder.current;
    if (!node) return;

    const script = document.createElement("script");
    script.src = `${LOADER}?${encodeURIComponent(widgetId)}`;
    script.defer = true;
    script.async = true;

    // Ad-blockers routinely block review widgets; fall back rather than leave a hole.
    script.onerror = () => {
      setFailed(true);
      onFail?.();
    };

    node.appendChild(script);

    // If the widget has not painted anything after a reasonable wait, treat it
    // as blocked — a silently empty section looks broken.
    const timer = window.setTimeout(() => {
      if (node.querySelector(".ti-widget") === null) {
        setFailed(true);
        onFail?.();
      }
    }, 6000);

    return () => {
      window.clearTimeout(timer);
      node.innerHTML = "";
    };
  }, [widgetId, onFail]);

  if (failed) return null;

  return <div ref={holder} className="trustindex-holder" />;
}
