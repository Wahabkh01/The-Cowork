/**
 * Google reviews shown on the homepage.
 *
 * IMPORTANT — these must be REAL reviews, copied verbatim from the Google
 * Business Profile. Never invent a review, a name or a rating: fabricated
 * social proof is deceptive, and on a business whose main advantage is a
 * genuine 5.0 rating it is also the most damaging thing to be caught doing.
 *
 * To add one: open the profile, pick a review, copy the reviewer's name and
 * their text exactly, and append an entry below.
 *
 * Deliberately NOT marked up with Review / aggregateRating schema. Google's
 * structured data guidelines prohibit marking up review data collected on a
 * third-party platform, and a manual action would cost far more than the
 * rich-result stars are worth. Displaying them on the page is fine; claiming
 * them as first-party structured data is not.
 */

export type Review = {
  /** Reviewer's display name, exactly as it appears on Google. */
  name: string;
  /** Review body, verbatim. */
  text: string;
  /** 1–5. */
  rating: number;
  /** Free text as Google shows it, e.g. "2 months ago". Optional. */
  when?: string;
};

export const REVIEWS: Review[] = [
  // Paste real reviews here, e.g.:
  // {
  //   name: "Ayesha Khan",
  //   rating: 5,
  //   when: "3 months ago",
  //   text: "…the reviewer's exact words…",
  // },
];

/** Headline numbers from the Google Business Profile. Update when they move. */
export const REVIEW_SUMMARY = {
  rating: 5.0,
  count: 87,
  /** Link to the profile's review list. */
  url: "https://www.google.com/maps/search/?api=1&query=31.4735297,74.2900199",
};
