import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Link } from "wouter";
import { Seo } from "@/components/Seo";
import { Disclosure, DetailPanel } from "@/components/Details";
import { NAP } from "@/data/site";

export default function About() {
  return (
    <div className="pt-32 min-h-screen">
      <Seo path="/about" />
      <Section className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white mb-8 leading-tight">
            Elevating Work <br/>
            <span className="text-gradient-gold">Culture in Lahore</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
            We built The Cowork because we believe your environment dictates your output. 
            Excellence is not an act, but a habit.
          </p>
        </motion.div>
      </Section>

      <Section className="py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                alt="The building housing The Cowork on College Road, Lahore"
                width={2070}
                height={2588}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 blur-[100px] -z-10" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-8">Our <span className="text-gradient-gold">Mission</span></h2>
            <div className="space-y-8 text-white/50 text-lg font-light leading-relaxed">
              <p>
                Founded in 2023, The Cowork was born from a frustration with traditional, uninspiring office spaces. 
                We created a sanctuary that feels like a 5-star hotel but functions like a high-tech headquarters.
              </p>
              <p>
                Our mission is to provide the most premium, productive, and hassle-free workspace experience in Pakistan, 
                enabling you to focus entirely on building your legacy.
              </p>
            </div>
            
            <div className="mt-12 glass-card p-10 rounded-[2rem] border-l-4 border-l-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-[50px]" />
              <p className="text-white italic text-xl font-light leading-relaxed relative z-10">
                "We provide the habitat for the habit of excellence."
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="py-32 border-t border-white/5">
        <div className="glass-card rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-30" />
          <h2 className="text-white mb-10 relative z-10">Ready to Upgrade?</h2>
          <Link href="/contact">
            <button className="bg-primary text-black px-16 py-5 font-black uppercase tracking-widest text-sm rounded-full hover:scale-105 transition-all duration-500 shadow-2xl shadow-primary/20 relative z-10">
              Join The Cowork
            </button>
          </Link>
        </div>
      </Section>

      <DetailPanel title="More about us">
        <Disclosure summary="Why we opened on College Road rather than the Johar Town boulevard" level="h2">
          <p>
            The Cowork opened in 2023 at {NAP.full}. We chose PCSIR Staff Colony rather than the Johar
            Town boulevard on purpose. The boulevard is where every commercial building in the area put
            its front door, which means it is also where the traffic, the rent and the parking problem
            live. A few hundred metres off it, we could give members better space for less money and a
            car park they can actually get into.
          </p>
          <p>
            The second decision was about hours. A large share of Lahore's freelance and outsourced work
            runs on American and British time, and those people were working through the night from their
            bedrooms because nothing was open. So we run a genuine{" "}
            <Link href="/night-shift-coworking-lahore">night shift</Link>, 6 PM to 3 AM, staffed and
            fully powered, with 24-hour access on top of it.
          </p>
        </Disclosure>

        <Disclosure summary="What we optimise for: uptime, and honesty about money" level="h2">
          <p>
            <strong>Uptime.</strong> Dedicated fibre with an automatic failover line, and industrial
            generators plus UPS on every desk and every piece of network hardware. When the grid drops
            you should not notice. For a member on a client call at two in the morning, that is not a
            luxury feature — it is the entire product.
          </p>
          <p>
            <strong>Honesty about money.</strong> Our rate card is on the website: PKR 15,000 for a hot
            desk, PKR 25,000 for a dedicated desk, PKR 60,000 for a private office, all inclusive. Most
            spaces in this market make you sit through a tour before they will give you a number. We
            think that wastes your time and filters for the wrong people. See{" "}
            <Link href="/pricing">pricing</Link>.
          </p>
        </Disclosure>

        <Disclosure summary="What we are not" level="h2">
          <p>
            Worth being clear about the edges. We are a single location, not a chain, so we cannot offer
            you a desk in Karachi next week. We are not the cheapest workspace in Lahore — there are
            spaces running desks around PKR 11,000, and if price is the only variable that matters, take
            one of them with our blessing. And we are not a business incubator: we do not take equity,
            run an accelerator or promise introductions to investors. We rent good desks in a building
            that works, and we run the community around them properly.
          </p>
        </Disclosure>

        <Disclosure summary="Our name, address and hours, for the record" level="h2">
          <p>
            We trade as <strong>The Cowork</strong>. The address is <strong>{NAP.full}</strong>, the
            phone numbers are <strong>{NAP.phone}</strong> / <strong>{NAP.phone2}</strong>, and the email is{" "}
            <strong>{NAP.email}</strong>. The space is open <strong>24 hours a day, seven days a
            week</strong> for members, and reception is staffed <strong>9:00 AM to 8:00 PM daily</strong>.
            If you find us listed anywhere under a different name, address or number, that listing is out
            of date — this is the reference.
          </p>
        </Disclosure>
      </DetailPanel>
    </div>
  );
}
