import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Section } from "@/components/Section";
import { REVIEWS, REVIEW_SUMMARY, Review } from "@/data/reviews";

export function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <div className={`flex gap-1 ${className}`} role="img" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i <= Math.round(rating) ? "text-primary fill-primary" : "text-white/15"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

/** Google's wordmark, drawn rather than hotlinked so it costs no extra request. */
export function GoogleMark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-bold tracking-tight select-none ${className}`} aria-hidden="true">
      <span style={{ color: "#4285F4" }}>G</span>
      <span style={{ color: "#EA4335" }}>o</span>
      <span style={{ color: "#FBBC05" }}>o</span>
      <span style={{ color: "#4285F4" }}>g</span>
      <span style={{ color: "#34A853" }}>l</span>
      <span style={{ color: "#EA4335" }}>e</span>
    </span>
  );
}

const LONG = 220;

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > LONG;

  return (
    <article className="glass-card rounded-3xl p-8 md:p-9 h-full flex flex-col hover:border-primary/30 transition-all duration-500 group">
      <div className="flex items-start justify-between gap-4 mb-6">
        <Stars rating={review.rating} />
        <Quote
          className="w-7 h-7 text-primary/20 shrink-0 group-hover:text-primary/40 transition-colors duration-500"
          aria-hidden="true"
        />
      </div>

      {/* Full text stays in the DOM; long reviews are visually clamped, never removed. */}
      <p
        className={`text-white/60 font-light leading-relaxed flex-1 text-[15px] ${
          isLong && !expanded ? "line-clamp-6" : ""
        }`}
      >
        {review.text}
      </p>

      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="self-start mt-3 text-primary/80 hover:text-primary text-xs font-bold uppercase tracking-[0.15em] transition-colors"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}

      <footer className="flex items-center gap-4 mt-8 pt-6 border-t border-white/[0.07]">
        <div
          className="w-11 h-11 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold shrink-0"
          aria-hidden="true"
        >
          {review.name.trim().charAt(0).toUpperCase()}
        </div>
        <div className="min-w-0">
          <div className="text-white font-semibold text-sm truncate">{review.name}</div>
          <div className="text-white/30 text-[11px] flex items-center gap-1.5">
            <GoogleMark className="text-[11px]" />
            <span>review{review.when ? ` · ${review.when}` : ""}</span>
          </div>
        </div>
      </footer>
    </article>
  );
}

export function ReviewsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [paused, setPaused] = useState(false);

  const advance = useCallback(() => {
    if (!api) return;
    if (api.canScrollNext()) api.scrollNext();
    else api.scrollTo(0);
  }, [api]);

  useEffect(() => {
    if (!api || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(advance, 5500);
    return () => window.clearInterval(id);
  }, [api, paused, advance]);

  // Nothing is rendered until real reviews exist in src/data/reviews.ts.
  if (REVIEWS.length === 0) return null;

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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <Carousel setApi={setApi} opts={{ align: "start", loop: REVIEWS.length > 3 }} className="w-full">
          <CarouselContent className="-ml-6 py-2">
            {REVIEWS.map((review, i) => (
              <CarouselItem
                key={`${review.name}-${i}`}
                className="pl-6 md:basis-1/2 lg:basis-1/3"
              >
                <ReviewCard review={review} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex -left-5 bg-white/5 border-white/10 text-white hover:bg-primary hover:text-black hover:border-primary" />
          <CarouselNext className="hidden md:flex -right-5 bg-white/5 border-white/10 text-white hover:bg-primary hover:text-black hover:border-primary" />
        </Carousel>
      </motion.div>

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
