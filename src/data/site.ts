/**
 * Single source of truth for NAP (Name, Address, Phone), hours, rates and routes.
 * Everything user-facing and every schema.org block reads from here so the site,
 * the sitemap and the structured data can never drift apart again.
 */

import type { ImageName } from "./imageManifest";

export const SITE_URL = "https://thecowork.pk";

/** The legal / real-world business name. Must match Google, Facebook and every directory. */
export const BUSINESS_NAME = "The Cowork";
export const LEGAL_NAME = "The Cowork";

export const NAP = {
  name: BUSINESS_NAME,
  streetAddress: "95 College Road, PCSIR Staff Colony",
  addressLocality: "Lahore",
  addressRegion: "Punjab",
  postalCode: "54770",
  addressCountry: "PK",
  /** The one address string to publish everywhere, character for character. */
  full: "95 College Road, PCSIR Staff Colony, Lahore 54770, Pakistan",
  phone: "+92 333 4835258",
  phoneE164: "+923334835258",
  whatsapp: "923334835258",
  email: "thecoworkpk@gmail.com",
  latitude: 31.4735297,
  longitude: 74.2900199,
  mapsUrl: "https://maps.app.goo.gl/",
} as const;

/**
 * Only VERIFIED profile URLs belong here — they are emitted as schema.org `sameAs`,
 * and a sameAs pointing at a 404 is a negative trust signal. Add Instagram and
 * LinkedIn once their real URLs are confirmed (see SEO.md §3).
 */
export const SOCIAL: { facebook: string; instagram?: string; linkedin?: string } = {
  facebook: "https://www.facebook.com/ShareSpacepk",
};

/** Non-empty verified profile URLs, for `sameAs` and the footer. */
export const SOCIAL_LINKS = Object.entries(SOCIAL).filter(
  (entry): entry is [string, string] => Boolean(entry[1]),
);

/** Members hold 24/7 access; reception is staffed 9 AM - 8 PM. Both are published. */
export const HOURS = {
  accessLabel: "Open 24 hours, 7 days a week",
  accessShort: "24/7 member access",
  receptionLabel: "Reception & inquiries: 9:00 AM – 8:00 PM, daily",
  receptionShort: "Reception 9 AM – 8 PM",
  receptionOpens: "09:00",
  receptionCloses: "20:00",
} as const;

export const SHIFTS = [
  {
    id: "day",
    label: "Day Shift",
    time: "09:00 AM – 06:00 PM",
    blurb: "Standard business hours for local clients, agencies and teams working Pakistan time.",
  },
  {
    id: "night",
    label: "Night Shift",
    time: "06:00 PM – 03:00 AM",
    blurb: "Built for freelancers and teams on US and UK client hours. Full facility, full staff support.",
  },
  {
    id: "flexible",
    label: "24/7 Flexible",
    time: "Round the clock",
    blurb: "Come and go at any hour. Biometric access, backup power and security never switch off.",
  },
] as const;

export type Plan = {
  slug: string;
  name: string;
  price: number;
  priceLabel: string;
  period: string;
  short: string;
  desc: string;
  features: string[];
  /** Manifest keys resolved through <Img> to responsive variants. */
  images: ImageName[];
  featured?: boolean;
  bestFor: string;
};

/** The published rate card. These are the only prices quoted anywhere on the site. */
export const PLANS: Plan[] = [
  {
    slug: "hot-desk-lahore",
    name: "Hot Desk",
    price: 15000,
    priceLabel: "PKR 15,000",
    period: "per month",
    short: "Any free desk in the open workspace, any day you turn up.",
    desc: "A flexible seat in the open workspace for freelancers and remote workers who do not need the same desk twice.",
    bestFor: "Freelancers, remote employees, part-time users",
    features: [
      "Access to the open workspace",
      "High-speed fibre internet with backup line",
      "Complimentary coffee, tea and filtered water",
      "2 hours of meeting room credits each month",
      "Use of our address as your business address",
      "Full power backup — no load shedding downtime",
    ],
    images: ["HotDesk1", "HostDesk4", "HotDesk3"],
  },
  {
    slug: "dedicated-desk-lahore",
    name: "Dedicated Desk",
    price: 25000,
    priceLabel: "PKR 25,000",
    period: "per month",
    featured: true,
    short: "Your own permanent desk and locker in a shared premium office.",
    desc: "A reserved desk that stays yours — leave your monitor set up, your files locked away and your chair where you like it.",
    bestFor: "Full-time freelancers, two- and three-person teams",
    features: [
      "Reserved desk and ergonomic chair, permanently yours",
      "Lockable storage cabinet",
      "24/7 access, day shift or night shift",
      "5 hours of meeting room credits each month",
      "Mail handling and reception service",
      "100 free printed pages per month",
    ],
    images: ["DedicatedDesk1", "Worker1", "DedicatedDesk3"],
  },
  {
    slug: "private-office-lahore",
    name: "Private Office",
    price: 60000,
    priceLabel: "PKR 60,000",
    period: "per month",
    short: "A lockable, furnished private cabin for your whole team.",
    desc: "A fully furnished, sound-insulated private office for teams from 2 to 50 people, with your branding on the door.",
    bestFor: "Startups, agencies, established company branches",
    features: [
      "Fully furnished private room with lockable door",
      "Sound-insulated walls for calls and client meetings",
      "Custom branding on the door and inside the office",
      "Inclusive meeting room access",
      "Guest reception and visitor management",
      "Daily cleaning service",
    ],
    images: ["PrivateOffice1", "PrivateOffice2", "PrivateOffice3"],
  },
];

export const planBySlug = (slug: string) => PLANS.find((p) => p.slug === slug);
