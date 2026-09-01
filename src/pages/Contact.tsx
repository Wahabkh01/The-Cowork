import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { InquiryForm } from "@/components/InquiryForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Link } from "wouter";
import { Disclosure, DetailPanel } from "@/components/Details";
import { NAP, HOURS } from "@/data/site";

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen">
      <Seo path="/contact" />
      <Section className="pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-white mb-8">Get in <span className="text-gradient-gold">Touch</span></h1>
            <p className="text-white/60 mb-12 text-xl font-light leading-relaxed">
              Interested in a tour or have questions? Fill out the form or visit us directly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: <MapPin />, title: "Visit", val: NAP.full },
                { icon: <Phone />, title: "Call", val: NAP.phone, href: `tel:${NAP.phoneE164}` },
                { icon: <Mail />, title: "Email", val: NAP.email, href: `mailto:${NAP.email}` },
                { icon: <Clock />, title: "Hours", val: `Open 24 hours · ${HOURS.receptionShort}` },
              ].map((item: { icon: JSX.Element; title: string; val: string; href?: string }, i) => (
                <div key={i} className="glass-card p-6 rounded-3xl group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/10 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-white text-lg mb-1 font-bold">{item.title}</h3>
                  {item.href ? (
                    <a href={item.href} className="text-white/40 text-sm font-light hover:text-primary transition-colors break-words">{item.val}</a>
                  ) : (
                    <p className="text-white/40 text-sm font-light">{item.val}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[80px]" />
            <h3 className="text-white mb-8 text-3xl font-bold">Send an Inquiry</h3>
            <InquiryForm />
          </motion.div>
        </div>
      </Section>

      <Section>
        <div className="w-full h-[500px] rounded-3xl overflow-hidden">
          <iframe
            title="Map showing The Cowork at 95 College Road, PCSIR Staff Colony, Lahore"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.821511256834!2d74.29001987469599!3d31.47352974875151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919016d3447cae7%3A0x95c9732879ecbe61!2sThe%20Cowork%20-%20Coworking%20Space%20Johar%20Town%20Lahore!5e0!3m2!1sen!2s!4v1713293323817!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Section>

      <DetailPanel title="Visiting & getting in touch">
        <Disclosure summary="Finding us, and coming from elsewhere in Lahore" level="h2">
          <p>
            We are at 95 College Road, inside PCSIR Staff Colony, on the western edge of Johar Town.
            Parking is inside the property, so you are not looking for a space on the road.
          </p>
          <ul>
            <li>
              <strong>From Johar Town.</strong> Head west along College Road, away from the main
              boulevard, towards PCSIR Staff Colony. We are at number 95.
            </li>
            <li>
              <strong>From <Link href="/coworking-space-wapda-town">Wapda Town</Link>.</strong> A
              straight run in along College Road, typically under ten minutes outside peak.
            </li>
            <li>
              <strong>From Canal Road or Thokar Niaz Baig.</strong> Come in without crossing the centre
              of Johar Town, which is where the traffic sits.
            </li>
            <li>
              <strong>From UET and the university corridor.</strong> A short drive down College Road —
              see the <Link href="/coworking-space-pcsir">PCSIR and College Road page</Link>.
            </li>
          </ul>
        </Disclosure>

        <Disclosure summary="When we reply" level="h2">
          <p>
            Reception is staffed <strong>9:00 AM to 8:00 PM every day</strong>, and messages sent in that
            window usually get an answer within the hour. The building itself is{" "}
            <strong>open 24 hours a day</strong> for members, including through the{" "}
            <Link href="/night-shift-coworking-lahore">night shift</Link> — but if you message at 2 AM,
            expect a reply after nine.
          </p>
        </Disclosure>

        <Disclosure summary="What to include in your message" level="h2">
          <p>
            So we can answer in one reply rather than four, tell us three things: which{" "}
            <strong>shift</strong> you want (day, night or 24/7 flexible), how many{" "}
            <strong>seats or cabins</strong> you need, and roughly <strong>when</strong> you want to
            start. The form asks for all three. With those we can confirm availability and a firm price
            straight away.
          </p>
          <p>
            If you only need a room for a single session rather than a desk, say so — include the date,
            start time, duration and headcount, and we will confirm the slot and the hourly rate. See{" "}
            <Link href="/meeting-rooms-lahore">meeting rooms</Link>.
          </p>
        </Disclosure>

        <Disclosure summary="What to ask on a tour" level="h2">
          <p>
            Ask to sit at the specific desk that would be yours. Ask us to run an internet speed test in
            front of you. Ask what happens in the first sixty seconds of a power cut. Ask for the price
            in writing before you leave — it is on the <Link href="/pricing">pricing page</Link> anyway,
            so there should be no surprises. Tours take about fifteen minutes and there is no pitch at
            the end. If you want to see the space at the hour you would actually use it, ask for an
            evening slot.
          </p>
        </Disclosure>
      </DetailPanel>
    </div>
  );
}
