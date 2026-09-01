import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CtaBand } from "@/components/CtaBand";
import { DetailPanel } from "@/components/Details";
import ImageGallery from "@/components/ImageGallery";
import { PLANS, planBySlug } from "@/data/site";

export function PlanPageLayout({
  slug,
  h1,
  highlight,
  lead,
  children,
}: {
  slug: string;
  h1: string;
  highlight: string;
  lead: string;
  /** Long-form copy, supplied as <Disclosure> rows. */
  children: ReactNode;
}) {
  const plan = planBySlug(slug)!;
  const others = PLANS.filter((p) => p.slug !== slug);

  return (
    <div className="pt-24 min-h-screen">
      <Seo path={`/${slug}`} />
      <Breadcrumbs path={`/${slug}`} />

      <PageHero eyebrow={`${plan.priceLabel} ${plan.period}`} h1={h1} highlight={highlight} lead={lead} />

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-[2.5rem] p-10 md:p-14 max-w-4xl mx-auto"
        >
          <ImageGallery images={plan.images} alt={`${plan.name} at The Cowork, Lahore`} />

          <div className="text-center mb-12">
            <span className="text-5xl font-bold text-gradient-gold">{plan.priceLabel}</span>
            <span className="text-white/30 text-sm ml-2">{plan.period}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {plan.features.map((feature) => (
              <div key={feature} className="flex items-start gap-4 text-sm text-white/70">
                <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Check className="w-3 h-3 text-primary" aria-hidden="true" />
                </span>
                <span className="font-light tracking-tight">{feature}</span>
              </div>
            ))}
          </div>

          <Link href="/contact">
            <button className="w-full py-4 rounded-2xl font-bold text-lg bg-primary text-black hover:scale-[1.02] transition-all duration-500 shadow-xl shadow-primary/20">
              Enquire About a {plan.name}
            </button>
          </Link>
        </motion.div>
      </Section>

      <Section dark>
        <div className="text-center mb-14">
          <h2 className="text-white mb-4">Other Plans</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto opacity-50" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {others.map((other) => (
            <Link key={other.slug} href={`/${other.slug}`}>
              <div className="glass-card p-9 rounded-3xl cursor-pointer hover:border-primary/30 transition-all duration-500 h-full">
                <h3 className="text-white text-2xl font-bold mb-3">{other.name}</h3>
                <p className="text-gradient-gold font-bold mb-4 text-xl">
                  {other.priceLabel} <span className="text-white/30 text-xs font-normal">{other.period}</span>
                </p>
                <p className="text-white/50 font-light leading-relaxed text-sm">{other.short}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <DetailPanel title={`About the ${plan.name.toLowerCase()}`}>{children}</DetailPanel>

      <CtaBand waMessage={`Hi! I'm interested in a ${plan.name} at The Cowork. Could you share availability?`} />
    </div>
  );
}
