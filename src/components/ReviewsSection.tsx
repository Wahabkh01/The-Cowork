import { useCallback, useState } from "react";
import { Section } from "@/components/Section";
import { TrustindexReviews } from "@/components/TrustindexReviews";
import { ReviewsCarousel, GoogleMark, Stars } from "@/components/ReviewsCarousel";
import { REVIEWS, REVIEW_SUMMARY } from "@/data/reviews";

const WIDGET_ID = import.meta.env.VITE_TRUSTINDEX_WIDGET_ID as string | undefined;

/**
 * Google reviews on the homepage.
 *
 * Trustindex drives it when VITE_TRUSTINDEX_WIDGET_ID is set. If the script is
 * blocked (ad-blockers hit review widgets often) or no widget is configured, it
 * falls back to the prerendered carousel built from src/data/reviews.ts — so the
 * section is either real reviews or nothing at all, never an empty frame.
 */
export function ReviewsSection() {
  const [widgetFailed, setWidgetFailed] = useState(false);
  const handleFail = useCallback(() => setWidgetFailed(true), []);

  const useWidget = Boolean(WIDGET_ID) && !widgetFailed;
  const useFallback = !useWidget && REVIEWS.length > 0;

  if (!useWidget && !useFallback) return null;

  // The static carousel brings its own <Section> and heading.
  if (useFallback) return <ReviewsCarousel />;

  return (
    <Section dark>
      <div className="text-center mb-16">
        <h2 className="text-white mb-4">
          Rated <span className="text-gradient-gold">{REVIEW_SUMMARY.rating.toFixed(1)}</span> on Google
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto opacity-50 mb-8" />
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
          <Stars rating={REVIEW_SUMMARY.rating} />
          <span className="text-white/50 font-light">
            {REVIEW_SUMMARY.count} reviews on <GoogleMark />
          </span>
        </div>
      </div>

      <TrustindexReviews widgetId={WIDGET_ID!} onFail={handleFail} />

      <div className="text-center mt-14">
        <a
          href={REVIEW_SUMMARY.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 glass-button text-white font-semibold rounded-full hover:scale-105 transition-all duration-500"
        >
          Read all reviews on <GoogleMark />
        </a>
      </div>
    </Section>
  );
}
