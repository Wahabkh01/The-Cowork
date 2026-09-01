import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Link } from "wouter";
import { Check } from "lucide-react";
import ImageGallery from "@/components/ImageGallery";
import { Seo } from "@/components/Seo";
import { Disclosure, DetailPanel } from "@/components/Details";
import { FaqSection } from "@/components/FaqSection";
import { GENERAL_FAQS } from "@/data/faqs";
import { PLANS, SHIFTS } from "@/data/site";

export default function Spaces() {
  const plans = PLANS;

  return (
    <div className="pt-24 min-h-screen">
      <Seo path="/spaces" />
      <Section className="pb-10 pt-20">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-white mb-6"
          >
            Choose Your <span className="text-gradient-gold">Workspace</span>
          </motion.h1>
          <p className="text-white/60 text-xl font-light">
            Flexible membership plans designed for your growth.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, ease: [0.16, 1, 0.3, 1], duration: 1 }}
              viewport={{ once: true }}
              className={`relative p-10 rounded-[2.5rem] glass-card transition-all duration-500 hover:-translate-y-2 ${
                plan.featured ? "border-primary/40 ring-1 ring-primary/20" : ""
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black px-6 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-primary/40">
                  Most Popular
                </div>
              )}

              <h3 className="text-white mb-3 text-3xl font-bold">{plan.name}</h3>
              <p className="text-white/40 text-sm mb-10 h-10 font-light leading-relaxed">{plan.desc}</p>
              
              <ImageGallery images={plan.images} alt={`${plan.name} at The Cowork, Lahore`} />

              <div className="mb-12">
                <span className="text-5xl font-bold text-gradient-gold">{plan.priceLabel}</span>
                <span className="text-white/30 text-sm ml-2">{plan.period}</span>
              </div>

              <div className="space-y-5 mb-12">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 text-sm text-white/70">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="font-light tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href={`/${plan.slug}`}>
                <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-500 ${
                  plan.featured
                    ? "bg-primary text-black hover:scale-[1.02] shadow-xl shadow-primary/20"
                    : "glass-button text-white hover:scale-[1.02]"
                }`} data-testid={`button-select-${plan.name.toLowerCase().replace(' ', '-')}`}>
                  Select Plan
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="bg-zinc-900 rounded-lg p-8 md:p-12 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-white mb-2">Need a Custom Solution?</h3>
            <p className="text-muted-foreground max-w-xl">
              We offer bespoke office layouts for teams larger than 20 people. 
              Let us design your dream headquarters.
            </p>
          </div>
          <Link href="/contact">
            <button className="px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-black transition-all rounded font-medium whitespace-nowrap">
              Contact Sales
            </button>
          </Link>
        </div>
      </Section>

      <DetailPanel title="Choosing a plan">
        <Disclosure summary="Which plan is right for you" level="h2">
          <p>
            The honest decision rule is about permanence, not budget. Ask how many days a week you will
            actually be here, and whether you carry equipment.
          </p>
          <ul>
            <li>
              <strong>One to three days a week, laptop only.</strong> Take a{" "}
              <Link href="/hot-desk-lahore">hot desk</Link>. You are not paying for a chair that sits
              empty while you are at a client site.
            </li>
            <li>
              <strong>Four or five days, external monitor, papers, a routine.</strong> Take a{" "}
              <Link href="/dedicated-desk-lahore">dedicated desk</Link>. The PKR 10,000 difference buys
              back the twenty minutes a day you would spend setting up and packing down.
            </li>
            <li>
              <strong>A team, constant calls, or anything confidential.</strong> Take a{" "}
              <Link href="/private-office-lahore">private office</Link>. Open-plan and back-to-back
              client calls do not mix, for you or for the people around you.
            </li>
          </ul>
        </Disclosure>

        <Disclosure summary="Day shift, night shift, or 24/7 — the rate is the same" level="h2">
          <p>Every plan runs on the shift you choose, at the same monthly rate:</p>
          <ul>
            {SHIFTS.map((shift) => (
              <li key={shift.id}>
                <strong>{shift.label}, {shift.time}.</strong> {shift.blurb}
              </li>
            ))}
          </ul>
          <p>
            If you work US or UK client hours, the{" "}
            <Link href="/night-shift-coworking-lahore">night shift</Link> is why most of our freelancers
            picked us over somewhere closer to the boulevard.
          </p>
        </Disclosure>

        <Disclosure summary="What every plan includes regardless" level="h2">
          <p>
            Dedicated fibre internet with an automatic backup line. Industrial generators plus UPS, so
            load shedding does not interrupt anything. Unlimited coffee, tea and water. Daily cleaning.
            Biometric access, CCTV and on-site security. Parking inside the property. Reception and mail
            handling between 9:00 AM and 8:00 PM. And meeting room credits, which scale with the plan —
            2 hours on a hot desk, 5 on a dedicated desk, unlimited with a private office. The full list
            is on the <Link href="/amenities">amenities page</Link>, and{" "}
            <Link href="/meeting-rooms-lahore">meeting rooms</Link> have their own page.
          </p>
        </Disclosure>

        <Disclosure summary="Larger teams and custom layouts" level="h2">
          <p>
            Above roughly ten people, a standard cabin stops being the right shape. Tell us your
            headcount, how you want the room laid out, and when you need it, and we will quote the
            footprint rather than quote you a range. Multi-room arrangements for teams up to fifty are
            something we build regularly.
          </p>
        </Disclosure>
      </DetailPanel>

      <FaqSection faqs={GENERAL_FAQS.slice(0, 5)} heading="Before you choose" />
    </div>
  );
}
