import { SITE_URL, BUSINESS_NAME, LEGAL_NAME, NAP, SOCIAL_LINKS, HOURS, PLANS } from "./site";
import { GENERAL_FAQS, PRICING_FAQS, NIGHT_SHIFT_FAQS, MEETING_ROOM_FAQS, Faq } from "./faqs";

const abs = (p: string) => new URL(p, SITE_URL).toString();

const ALL_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const ORG_ID = `${SITE_URL}/#organization`;
const BUSINESS_ID = `${SITE_URL}/#localbusiness`;

export const organizationSchema = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: BUSINESS_NAME,
  legalName: LEGAL_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: abs("/Images/Logo.png"),
  },
  image: abs("/Images/LandingPageImage.webp"),
  email: NAP.email,
  telephone: NAP.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: NAP.streetAddress,
    addressLocality: NAP.addressLocality,
    addressRegion: NAP.addressRegion,
    postalCode: NAP.postalCode,
    addressCountry: NAP.addressCountry,
  },
  sameAs: SOCIAL_LINKS.map(([, url]) => url),
};

export const localBusinessSchema = {
  "@type": "LocalBusiness",
  "@id": BUSINESS_ID,
  additionalType: "https://en.wikipedia.org/wiki/Coworking",
  name: BUSINESS_NAME,
  legalName: LEGAL_NAME,
  description:
    "Coworking space in Lahore beside Johar Town offering hot desks, dedicated desks and private offices with 24/7 access, a dedicated night shift, fibre internet and full power backup.",
  url: SITE_URL,
  telephone: NAP.phone,
  email: NAP.email,
  image: [abs("/Images/LandingPageImage.webp"), abs("/Images/HotDesk1.webp"), abs("/Images/PrivateOffice1.webp")],
  logo: abs("/Images/Logo.png"),
  priceRange: "PKR 15,000 – PKR 60,000 per month",
  currenciesAccepted: "PKR",
  address: {
    "@type": "PostalAddress",
    streetAddress: NAP.streetAddress,
    addressLocality: NAP.addressLocality,
    addressRegion: NAP.addressRegion,
    postalCode: NAP.postalCode,
    addressCountry: NAP.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: NAP.latitude,
    longitude: NAP.longitude,
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${NAP.latitude},${NAP.longitude}`,
  // The building is open around the clock; reception is a separate, narrower window.
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ALL_DAYS,
      opens: "00:00",
      closes: "23:59",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "reservations",
      telephone: NAP.phone,
      email: NAP.email,
      availableLanguage: ["English", "Urdu"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ALL_DAYS,
        opens: HOURS.receptionOpens,
        closes: HOURS.receptionCloses,
      },
    },
  ],
  areaServed: [
    { "@type": "Place", name: "Johar Town, Lahore" },
    { "@type": "Place", name: "Wapda Town, Lahore" },
    { "@type": "Place", name: "PCSIR Staff Colony, Lahore" },
    { "@type": "Place", name: "College Road, Lahore" },
    { "@type": "Place", name: "Lahore" },
  ],
  amenityFeature: [
    "High-speed fibre internet",
    "24/7 power backup",
    "Night shift access",
    "Meeting rooms",
    "Complimentary tea and filtered water",
    "Biometric access and CCTV",
    "On-site parking",
    "Printing and mail handling",
  ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
  makesOffer: PLANS.map((plan) => ({
    "@type": "Offer",
    name: `${plan.name} — coworking membership in Lahore`,
    description: plan.desc,
    url: abs(`/${plan.slug}`),
    price: plan.price,
    priceCurrency: "PKR",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: plan.price,
      priceCurrency: "PKR",
      unitCode: "MON",
      referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
    },
  })),
  parentOrganization: { "@id": ORG_ID },
  sameAs: SOCIAL_LINKS.map(([, url]) => url),
};

export const breadcrumbSchema = (trail: { name: string; path: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: trail.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: abs(item.path),
  })),
});

export const faqSchema = (faqs: Faq[]) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

const planSchema = (slug: string) => {
  const plan = PLANS.find((p) => p.slug === slug)!;
  return {
    "@type": "Product",
    name: `${plan.name} — ${BUSINESS_NAME}, Lahore`,
    description: plan.desc,
    image: abs(plan.images[0]),
    brand: { "@type": "Brand", name: BUSINESS_NAME },
    category: "Coworking membership",
    offers: {
      "@type": "Offer",
      url: abs(`/${plan.slug}`),
      price: plan.price,
      priceCurrency: "PKR",
      availability: "https://schema.org/InStock",
      seller: { "@id": BUSINESS_ID },
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: plan.price,
        priceCurrency: "PKR",
        unitCode: "MON",
      },
    },
  };
};

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  image?: string;
  /** Breadcrumb trail, excluding the implicit Home entry. */
  trail?: { name: string; path: string }[];
  extraSchema?: Record<string, unknown>[];
  noIndex?: boolean;
};

const PAGES: Record<string, PageMeta> = {
  "/": {
    path: "/",
    title: "Coworking Space in Johar Town Lahore",
    description:
      "The Cowork is a coworking space beside Johar Town, Lahore. Hot desks from PKR 15,000, dedicated desks and private offices, with 24/7 access, a night shift for US hours, fibre internet and full power backup.",
    extraSchema: [localBusinessSchema, faqSchema(GENERAL_FAQS.slice(0, 6))],
  },
  "/spaces": {
    path: "/spaces",
    title: "Coworking Plans, Desks & Private Offices in Lahore",
    description:
      "Compare every workspace at The Cowork: hot desks at PKR 15,000, dedicated desks at PKR 25,000 and private offices from PKR 60,000 per month, all with 24/7 access in Lahore.",
    trail: [{ name: "Spaces & Plans", path: "/spaces" }],
  },
  "/pricing": {
    path: "/pricing",
    title: "Coworking Space Price in Lahore — Published Rate Card",
    description:
      "Our full rate card, published in the open: hot desk PKR 15,000, dedicated desk PKR 25,000, private office from PKR 60,000 per month. Internet, power backup, tea & refreshments and meeting room credits included.",
    trail: [{ name: "Pricing", path: "/pricing" }],
    extraSchema: [
      faqSchema(PRICING_FAQS),
      {
        "@type": "ItemList",
        name: "The Cowork rate card, Lahore",
        itemListElement: PLANS.map((plan, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: planSchema(plan.slug),
        })),
      },
    ],
  },
  "/night-shift-coworking-lahore": {
    path: "/night-shift-coworking-lahore",
    title: "Night Shift & 24/7 Coworking Space in Lahore",
    description:
      "A genuine night shift coworking space in Lahore, 06:00 PM to 03:00 AM, built for freelancers and teams on US and UK client hours. 24/7 access, uninterrupted power and fibre internet.",
    trail: [{ name: "Night Shift Coworking", path: "/night-shift-coworking-lahore" }],
    extraSchema: [faqSchema(NIGHT_SHIFT_FAQS), localBusinessSchema],
  },
  "/hot-desk-lahore": {
    path: "/hot-desk-lahore",
    title: "Hot Desk in Lahore — PKR 15,000 per Month",
    description:
      "A flexible hot desk in Lahore at PKR 15,000 per month: open workspace seating, fibre internet, complimentary tea and filtered water, meeting room credits, a business address and 24/7 access.",
    trail: [
      { name: "Spaces & Plans", path: "/spaces" },
      { name: "Hot Desk", path: "/hot-desk-lahore" },
    ],
    extraSchema: [planSchema("hot-desk-lahore")],
  },
  "/dedicated-desk-lahore": {
    path: "/dedicated-desk-lahore",
    title: "Dedicated Desk in Lahore — PKR 25,000 per Month",
    description:
      "Your own permanent desk in Lahore at PKR 25,000 per month, with lockable storage, 24/7 access, 5 hours of meeting room credits, mail handling and free printing.",
    trail: [
      { name: "Spaces & Plans", path: "/spaces" },
      { name: "Dedicated Desk", path: "/dedicated-desk-lahore" },
    ],
    extraSchema: [planSchema("dedicated-desk-lahore")],
  },
  "/private-office-lahore": {
    path: "/private-office-lahore",
    title: "Private Office for Rent in Lahore — from PKR 60,000",
    description:
      "Furnished, lockable private offices for rent in Lahore from PKR 60,000 per month. Teams of 2 to 50, sound-insulated walls, custom branding, inclusive meeting room access and daily cleaning.",
    trail: [
      { name: "Spaces & Plans", path: "/spaces" },
      { name: "Private Office", path: "/private-office-lahore" },
    ],
    extraSchema: [planSchema("private-office-lahore")],
  },
  "/meeting-rooms-lahore": {
    path: "/meeting-rooms-lahore",
    title: "Meeting Rooms in Lahore — Book by the Hour",
    description:
      "Book a meeting room in Lahore beside Johar Town: large screens, conference audio, whiteboards, fibre internet, power backup and tea service. Included with membership or bookable by the hour.",
    trail: [{ name: "Meeting Rooms", path: "/meeting-rooms-lahore" }],
    extraSchema: [faqSchema(MEETING_ROOM_FAQS)],
  },
  "/coworking-space-wapda-town": {
    path: "/coworking-space-wapda-town",
    title: "Coworking Space near Wapda Town, Lahore",
    description:
      "The closest serious coworking space to Wapda Town, Lahore. Desks from PKR 15,000 a month, private offices from PKR 60,000, 24/7 access and parking — minutes from Wapda Town via College Road.",
    trail: [{ name: "Wapda Town", path: "/coworking-space-wapda-town" }],
    extraSchema: [localBusinessSchema],
  },
  "/coworking-space-pcsir": {
    path: "/coworking-space-pcsir",
    title: "Coworking Space in PCSIR Society, College Road Lahore",
    description:
      "A coworking space inside PCSIR Staff Colony on College Road, Lahore. Hot desks, dedicated desks and private offices with 24/7 access, backup power and on-site parking.",
    trail: [{ name: "PCSIR & College Road", path: "/coworking-space-pcsir" }],
    extraSchema: [localBusinessSchema],
  },
  "/amenities": {
    path: "/amenities",
    title: "Amenities — Internet, Power Backup, Café & Meeting Rooms",
    description:
      "What is included at The Cowork, Lahore: high-speed fibre with a backup line, industrial power backup, biometric security, ergonomic furniture, printing, a stocked café and tech-equipped meeting rooms.",
    trail: [{ name: "Amenities", path: "/amenities" }],
  },
  "/community": {
    path: "/community",
    title: "Coworking Community & Events in Lahore",
    description:
      "Meet the founders, freelancers and teams working at The Cowork in Lahore. Workshops, networking mixers and wellness sessions run through the year for members.",
    trail: [{ name: "Community", path: "/community" }],
  },
  "/about": {
    path: "/about",
    title: "About The Cowork — Coworking in Lahore",
    description:
      "Why The Cowork exists, who works here, and how a coworking space beside Johar Town became the highest-rated workspace on its stretch of Lahore.",
    trail: [{ name: "About", path: "/about" }],
  },
  "/faq": {
    path: "/faq",
    title: "Coworking Space FAQs — Hours, Prices, Access & Parking",
    description:
      "Straight answers on The Cowork in Lahore: opening hours, the night shift, monthly prices, meeting rooms, power backup, internet speed, parking and how to book a tour.",
    trail: [{ name: "FAQs", path: "/faq" }],
    extraSchema: [faqSchema(GENERAL_FAQS.concat(PRICING_FAQS, NIGHT_SHIFT_FAQS))],
  },
  "/contact": {
    path: "/contact",
    title: "Contact & Book a Tour — Coworking Space in Lahore",
    description:
      "Visit The Cowork at 95 College Road, PCSIR Staff Colony, Lahore. Reception 9 AM to 8 PM, members in 24/7. Call +92 333 4835258 or send an inquiry on WhatsApp.",
    trail: [{ name: "Contact", path: "/contact" }],
    extraSchema: [localBusinessSchema],
  },
};

export const NOT_FOUND_META: PageMeta = {
  path: "/404",
  title: "Page Not Found",
  description: "The page you were looking for could not be found. Return to The Cowork homepage.",
  noIndex: true,
};

export function getMeta(path: string): PageMeta {
  const clean = path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
  return PAGES[clean] ?? NOT_FOUND_META;
}

/** Full JSON-LD graph for a page: Organization + breadcrumbs + anything page-specific. */
export function buildJsonLd(meta: PageMeta) {
  const graph: Record<string, unknown>[] = [organizationSchema];

  if (meta.trail?.length) {
    graph.push(
      breadcrumbSchema([{ name: "Home", path: "/" }, ...meta.trail]),
    );
  }
  if (meta.extraSchema) graph.push(...meta.extraSchema);

  return { "@context": "https://schema.org", "@graph": graph };
}

export const SITE_NAME = BUSINESS_NAME;
export const fullTitle = (title: string) => `${title} | ${BUSINESS_NAME}`;
export const canonicalFor = (path: string) => abs(path);
export const absoluteUrl = abs;
