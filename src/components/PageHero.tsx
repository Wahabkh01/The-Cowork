import { motion } from "framer-motion";
import { Section } from "@/components/Section";

/**
 * Interior page header, matching the visual language of the original site:
 * centered, generous, one keyword-bearing H1 with a gold accent and a single
 * supporting line. Long-form copy lives in <DetailPanel> further down the page.
 */
export function PageHero({
  h1,
  highlight,
  lead,
  eyebrow,
}: {
  h1: string;
  highlight?: string;
  lead: string;
  eyebrow?: string;
}) {
  return (
    <Section className="py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        {eyebrow && (
          <p className="text-primary text-[10px] font-bold uppercase tracking-[0.25em] mb-8">{eyebrow}</p>
        )}
        <h1 className="text-white mb-8 leading-tight">
          {h1} {highlight && <span className="text-gradient-gold">{highlight}</span>}
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">{lead}</p>
      </motion.div>
    </Section>
  );
}
