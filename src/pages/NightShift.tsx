import { motion } from "framer-motion";
import { Link } from "wouter";
import { Moon, Zap, Wifi, ShieldCheck, Car, Coffee } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { RateTable } from "@/components/RateCard";
import { Disclosure, DetailPanel } from "@/components/Details";
import { FaqSection } from "@/components/FaqSection";
import { CtaBand } from "@/components/CtaBand";
import { NIGHT_SHIFT_FAQS } from "@/data/faqs";

const NIGHT_FACTS = [
  { icon: <Moon className="w-6 h-6 text-primary" />, title: "6 PM – 3 AM", desc: "The night shift proper. Or go 24/7 flexible if your hours drift." },
  { icon: <Zap className="w-6 h-6 text-primary" />, title: "Power that doesn't blink", desc: "Generators plus UPS. Load shedding at 1 AM does not drop your call." },
  { icon: <Wifi className="w-6 h-6 text-primary" />, title: "Fibre with a second line", desc: "Automatic failover, sized for simultaneous video calls and large uploads." },
  { icon: <ShieldCheck className="w-6 h-6 text-primary" />, title: "Security all night", desc: "Biometric entry, CCTV throughout, and personnel in the building." },
  { icon: <Car className="w-6 h-6 text-primary" />, title: "Parking inside", desc: "You are not walking to a car left on College Road at three in the morning." },
  { icon: <Coffee className="w-6 h-6 text-primary" />, title: "The café stays stocked", desc: "Coffee, tea and water through the night. The 2 AM slump is solvable." },
];

export default function NightShift() {
  return (
    <div className="pt-24 min-h-screen">
      <Seo path="/night-shift-coworking-lahore" />
      <Breadcrumbs path="/night-shift-coworking-lahore" />

      <PageHero
        eyebrow="06:00 PM – 03:00 AM · 24/7 access"
        h1="Night Shift Coworking in"
        highlight="Lahore"
        lead="Your clients are in New York, Austin, London and Dubai. We don't close."
      />

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {NIGHT_FACTS.map((fact, i) => (
            <motion.div
              key={fact.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true }}
              className="glass-card p-9 rounded-3xl hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="mb-7 bg-white/5 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-500">
                {fact.icon}
              </div>
              <h2 className="text-white text-xl font-bold mb-3">{fact.title}</h2>
              <p className="text-white/50 font-light leading-relaxed text-sm">{fact.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="text-center mb-14">
          <h2 className="text-white mb-4">Same Rate, Any Shift</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto opacity-50" />
        </div>
        <RateTable />
      </Section>

      <DetailPanel title="Working nights in Lahore">
        <Disclosure summary="Why a night shift matters in Lahore specifically" level="h2">
          <p>
            A very large slice of Pakistan's freelance and outsourced-services economy runs on other
            countries' clocks. Upwork and Fiverr contractors sync with American mornings. Agencies with
            US retainers hold stand-ups at 7 PM Pakistan time. Support teams for British firms start
            mid-afternoon and finish near midnight.
          </p>
          <p>
            All of those people have the same problem: the infrastructure they need — reliable power, a
            serious internet connection, a quiet room — is mostly sold on a 9-to-6 basis. So they work
            from home through the night, fight the load shedding, and take client calls with a generator
            running outside the window. Between 6 PM and 3 AM this space runs at full capacity. It is not
            a key handed to you at closing time. It is the same workspace, at night.
          </p>
        </Disclosure>

        <Disclosure summary="How the timings line up with your clients" level="h2">
          <ul>
            <li><strong>US Eastern.</strong> 6 PM in Lahore is roughly 8 AM in New York — start of the shift is start of their morning.</li>
            <li><strong>US Central and Mountain.</strong> The middle of our shift covers their working morning and early afternoon.</li>
            <li><strong>US Pacific.</strong> Their 9 AM lands around 9 PM here, comfortably inside the shift.</li>
            <li><strong>UK and Ireland.</strong> Their full working day sits in the earlier part of the evening.</li>
            <li><strong>Gulf and Europe.</strong> Largely covered by the standard day shift, with the evening as overlap.</li>
          </ul>
        </Disclosure>

        <Disclosure summary="Security at 3 AM" level="h2">
          <p>
            The question every prospective night member asks, and fairly. Entry is biometric, so nobody
            gets in who is not a member. CCTV covers the floors and entrances. Security personnel are on
            site through the night. Parking is inside the property, so the walk from your desk to your
            car does not involve a dark stretch of road. Members leave at 3 AM routinely.
          </p>
        </Disclosure>

        <Disclosure summary="Working through the night without wrecking yourself" level="h2">
          <p>
            A word of realism from watching members do this for a couple of years. The people who sustain
            night work treat it as a shift rather than an extension of their day: they sleep on a fixed
            schedule, eat a proper meal at the start of it, and leave at the end instead of drifting to
            five in the morning. The space helps with two of those — the café stays stocked, and the
            lounge areas are separate from the desks so a break is an actual change of position.
          </p>
        </Disclosure>

        <Disclosure summary="Who else in Lahore actually does this" level="h2">
          <p>
            Very few, honestly. Most coworking spaces in the Johar Town radius advertise 24/7 access,
            which usually means the door opens with a card and everything else — the staff, the café, the
            support — has gone home. We run the night as a staffed operating shift. If you have been
            quoted "24/7" elsewhere, the useful question on the tour is who is actually in the building
            at midnight.
          </p>
          <p>
            Every plan works on the night shift at the same rate: see{" "}
            <Link href="/pricing">pricing</Link>,{" "}
            <Link href="/hot-desk-lahore">hot desks</Link>,{" "}
            <Link href="/dedicated-desk-lahore">dedicated desks</Link> and{" "}
            <Link href="/private-office-lahore">private offices</Link>.
          </p>
        </Disclosure>
      </DetailPanel>

      <FaqSection faqs={NIGHT_SHIFT_FAQS} heading="Night shift questions" />

      <CtaBand
        heading="Come and See It at Night"
        waMessage="Hi! I work night hours and I'd like to see The Cowork during the night shift."
      />
    </div>
  );
}
