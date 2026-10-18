/**
 * Every indexable route. Consumed by the router, the prerender script and the
 * sitemap generator so a page can never exist in one and be missing from another.
 */
export type RouteDef = {
  path: string;
  priority: number;
  changefreq: "daily" | "weekly" | "monthly";
  /** Page component file, used to date the sitemap's <lastmod> from git history. */
  source: string;
};

export const ROUTES: RouteDef[] = [
  { path: "/", priority: 1.0, changefreq: "weekly" , source: "src/pages/Home.tsx" },
  { path: "/spaces", priority: 0.9, changefreq: "weekly" , source: "src/pages/Spaces.tsx" },
  { path: "/pricing", priority: 0.9, changefreq: "weekly" , source: "src/pages/Pricing.tsx" },
  { path: "/night-shift-coworking-lahore", priority: 0.9, changefreq: "weekly" , source: "src/pages/NightShift.tsx" },
  { path: "/hot-desk-lahore", priority: 0.8, changefreq: "monthly" , source: "src/pages/HotDesk.tsx" },
  { path: "/team-office-lahore", priority: 0.8, changefreq: "monthly" , source: "src/pages/TeamOffice.tsx" },
  { path: "/private-office-lahore", priority: 0.8, changefreq: "monthly" , source: "src/pages/PrivateOffice.tsx" },
  { path: "/meeting-rooms-lahore", priority: 0.8, changefreq: "monthly" , source: "src/pages/MeetingRooms.tsx" },
  { path: "/coworking-space-wapda-town", priority: 0.8, changefreq: "monthly" , source: "src/pages/WapdaTown.tsx" },
  { path: "/coworking-space-pcsir", priority: 0.8, changefreq: "monthly" , source: "src/pages/Pcsir.tsx" },
  { path: "/amenities", priority: 0.8, changefreq: "monthly" , source: "src/pages/Amenities.tsx" },
  { path: "/community", priority: 0.7, changefreq: "monthly" , source: "src/pages/Community.tsx" },
  { path: "/about", priority: 0.7, changefreq: "monthly" , source: "src/pages/About.tsx" },
  { path: "/faq", priority: 0.7, changefreq: "monthly" , source: "src/pages/Faq.tsx" },
  { path: "/contact", priority: 0.8, changefreq: "monthly" , source: "src/pages/Contact.tsx" },
];

export const ROUTE_PATHS = ROUTES.map((r) => r.path);
