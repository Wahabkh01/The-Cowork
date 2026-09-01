/**
 * Every indexable route. Consumed by the router, the prerender script and the
 * sitemap generator so a page can never exist in one and be missing from another.
 */
export type RouteDef = {
  path: string;
  priority: number;
  changefreq: "daily" | "weekly" | "monthly";
};

export const ROUTES: RouteDef[] = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/spaces", priority: 0.9, changefreq: "weekly" },
  { path: "/pricing", priority: 0.9, changefreq: "weekly" },
  { path: "/night-shift-coworking-lahore", priority: 0.9, changefreq: "weekly" },
  { path: "/hot-desk-lahore", priority: 0.8, changefreq: "monthly" },
  { path: "/dedicated-desk-lahore", priority: 0.8, changefreq: "monthly" },
  { path: "/private-office-lahore", priority: 0.8, changefreq: "monthly" },
  { path: "/meeting-rooms-lahore", priority: 0.8, changefreq: "monthly" },
  { path: "/coworking-space-wapda-town", priority: 0.8, changefreq: "monthly" },
  { path: "/coworking-space-pcsir", priority: 0.8, changefreq: "monthly" },
  { path: "/amenities", priority: 0.8, changefreq: "monthly" },
  { path: "/community", priority: 0.7, changefreq: "monthly" },
  { path: "/about", priority: 0.7, changefreq: "monthly" },
  { path: "/faq", priority: 0.7, changefreq: "monthly" },
  { path: "/contact", priority: 0.8, changefreq: "monthly" },
];

export const ROUTE_PATHS = ROUTES.map((r) => r.path);
