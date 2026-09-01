import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

/**
 * Every route ships prerendered HTML (scripts/prerender.mjs) so crawlers and link
 * scrapers get real content without running JavaScript. The browser then mounts a
 * fresh React tree over it — deliberately createRoot rather than hydrateRoot, so
 * there is no hydration contract to satisfy between the static and live markup.
 */
createRoot(document.getElementById("root")!).render(<App />);
