import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check, X } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { PlanCards } from "@/components/RateCard";
import { Disclosure, DetailPanel } from "@/components/Details";
import { FaqSection } from "@/components/FaqSection";
import { CtaBand } from "@/components/CtaBand";
import { PRICING_FAQS } from "@/data/faqs";
import { SHIFTS } from "@/data/site";

const INCLUDED = [
  "Fibre internet with automatic backup line",
  "Electricity and industrial power backup",
  "Complimentary tea and filtered water",
  "Daily cleaning and maintenance",
  "Meeting room credits on every plan",
  "Biometric access, CCTV and security",
  "On-site parking for you and guests",
  "Reception and mail handling, 9 AM – 8 PM",
];

const NOT_INCLUDED = [
  "A joining or setup fee — there isn't one",
  "A monthly maintenance surcharge — there isn't one",
  "Printing beyond your plan's allowance",
  "Meeting room hours beyond your credits",
];

export default function Pricing() {
  return (
    <div className="pt-20 sm:pt-24 min-h-screen">
      <Seo path="/pricing" />
      <Breadcrumbs path="/pricing" />

      <PageHero
        eyebrow="Published rate card"
        h1="Coworking Space Price in"
        highlight="Lahore"
        lead="No forms, no tours before you get a number. Here is what a desk costs."
      />

      <Section>
        <PlanCards />
      </Section>

      <Section dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[2rem] lg:rounded-[2.5rem] p-7 sm:p-9 lg:p-12"
          >
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">In the price</h2>
            <ul className="space-y-5">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-4 text-white/60 font-light text-sm">
                  <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card rounded-[2rem] lg:rounded-[2.5rem] p-7 sm:p-9 lg:p-12"
          >
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">Not in the price</h2>
            <ul className="space-y-5">
              {NOT_INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-4 text-white/60 font-light text-sm">
                  <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <X className="w-3 h-3 text-white/40" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      <DetailPanel title="How our pricing works">
        <Disclosure summary="Why we publish our rates when most spaces in Lahore don't" level="h2">
          <p>
            Ring around the coworking spaces in Lahore and you will notice a pattern: quite a few will
            not give you a number until you have handed over your phone number and sat through a tour.
            The reasoning is that once you are in the building, the price is easier to justify.
          </p>
          <p>
            We think that is a bad trade. It wastes your evening, it wastes our reception's time, and it
            filters for people willing to be handled rather than people who actually want the space. So
            the rate card is on the website. If PKR 15,000 a month is not where your budget sits, you
            have found that out in four seconds instead of four days.
          </p>
        </Disclosure>

        <Disclosure summary="How our pricing compares in Johar Town" level="h2">
          <p>
            The Lahore coworking market runs roughly from PKR 11,000 at the budget end to PKR 35,000 a
            desk at the premium end. We sit in the middle, and what you get for it is the part worth
            checking line by line: genuine backup power rather than a shared generator, a second internet
            line rather than a single connection, meeting room credits included rather than billed, and a
            staffed <Link href="/night-shift-coworking-lahore">night shift</Link> that most of the market
            does not run at all.
          </p>
        </Disclosure>

        <Disclosure summary="Shifts, and why the rate doesn't change between them" level="h2">
          <p>You choose a shift when you join. The monthly rate is the same for all three:</p>
          <ul>
            {SHIFTS.map((shift) => (
              <li key={shift.id}>
                <strong>{shift.label} — {shift.time}.</strong> {shift.blurb}
              </li>
            ))}
          </ul>
          <p>
            If your hours move around — and with freelance work they usually do — take 24/7 flexible
            access and stop thinking about it.
          </p>
        </Disclosure>

        <Disclosure summary="Meeting rooms and extra hours" level="h2">
          <p>
            Meeting room credits come with every plan — two hours a month on a{" "}
            <Link href="/hot-desk-lahore">hot desk</Link>, five on a{" "}
            <Link href="/dedicated-desk-lahore">dedicated desk</Link>, and inclusive access with a{" "}
            <Link href="/private-office-lahore">private office</Link>. Additional hours, and bookings
            from people who are not members, are quoted per hour — message reception and we will confirm
            the rate and the slot. More on the{" "}
            <Link href="/meeting-rooms-lahore">meeting rooms page</Link>.
          </p>
        </Disclosure>

        <Disclosure summary="Larger private offices" level="h2">
          <p>
            PKR 60,000 is the starting monthly rate for a private office. Larger cabins and multi-room
            layouts for teams above roughly ten people are quoted on the footprint you need — send us
            your headcount and we will come back with a written figure rather than a range.
          </p>
        </Disclosure>
      </DetailPanel>

      <FaqSection faqs={PRICING_FAQS} heading="Pricing questions" />

      <CtaBand
        heading="See it before you pay for it"
        waMessage="Hi! I've seen your rates online and I'd like to book a tour of The Cowork."
      />
    </div>
  );
}
