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
  phone2: "+92 300 4449874",
  phone2E164: "+923004449874",
  whatsapp: "923087770222",
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
  /** Monthly rate per seat, in PKR. */
  price: number;
  /** Seats included; the monthly total is price × seats. Omitted for single-seat plans. */
  seats?: number;
  priceLabel: string;
  period: string;
  short: string;
  desc: string;
  features: string[];
  /** Manifest keys resolved through <Img> to responsive variants. */
  images: ImageName[];
  featured?: boolean;
  bestFor: string;
  meetingRooms: string;
};

/** What a plan costs per month in total, across all of its seats. */
export const monthlyTotal = (plan: Plan) => plan.price * (plan.seats ?? 1);

/** "PKR 90,000 a month for 6 seats", or null for single-seat plans. */
export const totalLabel = (plan: Plan) =>
  plan.seats ? `PKR ${monthlyTotal(plan).toLocaleString("en-US")} a month for ${plan.seats} seats` : null;

/** The published rate card. These are the only prices quoted anywhere on the site. */
export const PLANS: Plan[] = [
  {
    slug: "hot-desk-lahore",
    name: "Hot Desk",
    price: 15000,
    priceLabel: "PKR 15,000",
    period: "per seat / month",
    short: "Any free desk in the open workspace, any day you turn up.",
    desc: "A flexible seat in the open workspace for freelancers and remote workers who do not need the same desk twice.",
    bestFor: "Freelancers, remote employees, part-time users",
    features: [
      "Access to the open workspace",
      "High-speed fibre internet with backup line",
      "Complimentary tea and filtered water",
      "2 hours of meeting room credits each month",
      "Use of our address as your business address",
      "Full power backup — no load shedding downtime",
    ],
    images: ["HotDesk1", "HostDesk4", "HotDesk3"],
    meetingRooms: "2 hours / month",
  },
  {
    slug: "team-office-lahore",
    name: "6-Person Office",
    price: 15000,
    seats: 6,
    priceLabel: "PKR 15,000",
    period: "per seat / month",
    featured: true,
    short: "A lockable, furnished private office for a team of six — PKR 90,000 a month.",
    desc: "A fully furnished, sound-insulated private office for six people at PKR 15,000 per seat, PKR 90,000 a month in total.",
    bestFor: "Small teams, agencies and startups of up to six",
    features: [
      "Private furnished office for 6, with lockable door",
      "Sound-insulated walls for calls and client meetings",
      "24/7 access, day shift or night shift",
      "Inclusive meeting room access",
      "Mail handling and reception service",
      "Daily cleaning service",
    ],
    images: ["DedicatedOffice1", "DedicatedDesk1", "DedicatedDesk3"],
    meetingRooms: "Inclusive",
  },
  {
    slug: "private-office-lahore",
    name: "15-Person Office",
    price: 15000,
    seats: 15,
    priceLabel: "PKR 15,000",
    period: "per seat / month",
    short: "A larger furnished private office for a team of fifteen — PKR 225,000 a month.",
    desc: "A fully furnished, sound-insulated private office for fifteen people at PKR 15,000 per seat, PKR 225,000 a month in total, with your branding on the door.",
    bestFor: "Growing agencies, product teams, company branches",
    features: [
      "Private furnished office for 15, with lockable door",
      "Sound-insulated walls for calls and client meetings",
      "Custom branding on the door and inside the office",
      "Inclusive meeting room access",
      "Guest reception and visitor management",
      "Daily cleaning service",
    ],
    images: ["PrivateOffice1", "PrivateOffice2", "PrivateOffice3"],
    meetingRooms: "Inclusive",
  },
];

export const planBySlug = (slug: string) => PLANS.find((p) => p.slug === slug);
