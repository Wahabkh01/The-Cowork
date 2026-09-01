import { motion } from "framer-motion";
import { Link } from "wouter";
import { MonitorPlay, Mic, PenTool, Zap, Users, Coffee } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Disclosure, DetailPanel } from "@/components/Details";
import { FaqSection } from "@/components/FaqSection";
import { CtaBand } from "@/components/CtaBand";
import { MEETING_ROOM_FAQS } from "@/data/faqs";

const KIT = [
  { icon: <MonitorPlay className="w-6 h-6 text-primary" />, title: "Large-format screens", desc: "For presentations and video calls, with the cable already on the table." },
  { icon: <Mic className="w-6 h-6 text-primary" />, title: "Conference audio", desc: "Room microphones and speakers, so the far end hears everyone." },
  { icon: <PenTool className="w-6 h-6 text-primary" />, title: "Whiteboards", desc: "With markers that work. Wiped between bookings." },
  { icon: <Zap className="w-6 h-6 text-primary" />, title: "Power backup", desc: "The room does not go dark mid-pitch." },
  { icon: <Users className="w-6 h-6 text-primary" />, title: "Guest reception", desc: "Your visitors are met at the door and shown in." },
  { icon: <Coffee className="w-6 h-6 text-primary" />, title: "Tea and coffee service", desc: "Served to the room. Included, not billed per cup." },
];

export default function MeetingRooms() {
  return (
    <div className="pt-24 min-h-screen">
      <Seo path="/meeting-rooms-lahore" />
      <Breadcrumbs path="/meeting-rooms-lahore" />

      <PageHero
        eyebrow="Included with membership · bookable by the hour"
        h1="Meeting Rooms in"
        highlight="Lahore"
        lead="Sound-insulated rooms with screens, conference audio and whiteboards, beside Johar Town."
      />

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {KIT.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true }}
              className="glass-card p-9 rounded-3xl hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="mb-7 bg-white/5 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h2 className="text-white text-xl font-bold mb-3">{item.title}</h2>
              <p className="text-white/50 font-light leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">Hours Included by Plan</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto opacity-50" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { plan: "Hot Desk", hours: "2 hours", slug: "hot-desk-lahore" },
            { plan: "Dedicated Desk", hours: "5 hours", slug: "dedicated-desk-lahore" },
            { plan: "Private Office", hours: "Unlimited", slug: "private-office-lahore" },
          ].map((row) => (
            <Link key={row.slug} href={`/${row.slug}`}>
              <div className="glass-card p-10 rounded-3xl text-center cursor-pointer hover:border-primary/30 transition-all duration-500">
                <div className="text-3xl font-bold text-gradient-gold mb-3">{row.hours}</div>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">{row.plan}</div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <DetailPanel title="Booking a room">
        <Disclosure summary="Meeting room credits by plan" level="h2">
          <p>
            Every membership includes room time — you are not charged per meeting on top of your monthly
            rate until you exceed the allowance. Two hours a month with a{" "}
            <Link href="/hot-desk-lahore">hot desk</Link>, five with a{" "}
            <Link href="/dedicated-desk-lahore">dedicated desk</Link>, unlimited with a{" "}
            <Link href="/private-office-lahore">private office</Link>. Additional hours beyond your
            allowance are quoted per hour; ask reception and we will tell you the figure before you book,
            not after.
          </p>
        </Disclosure>

        <Disclosure summary="Booking without being a member" level="h2">
          <p>
            You do not need a membership to use the rooms. People book them for client pitches, board
            meetings, interview panels, training sessions, small workshops and video shoots that need a
            quiet, professional-looking room with reliable power. Send us the date, start time, duration
            and headcount, and we will confirm availability and the hourly rate.
          </p>
          <p>
            Worth saying plainly why the power backup matters for a one-off booking: a pitch that dies
            halfway through because the building lost grid power is a pitch you do not win. Our
            generators and UPS cover the meeting rooms exactly as they cover the desks.
          </p>
        </Disclosure>

        <Disclosure summary="Where to find us, and when to book" level="h2">
          <p>
            95 College Road, PCSIR Staff Colony, Lahore 54770 — on the edge of Johar Town, with parking
            inside the property so your guests are not circling for a space on the road. Directions and a
            map are on the <Link href="/contact">contact page</Link>.
          </p>
          <p>
            Reception takes bookings between 9:00 AM and 8:00 PM daily, and that is the fastest route to
            a confirmed slot. WhatsApp works at any hour. Rooms themselves can be used around the clock,
            including during the <Link href="/night-shift-coworking-lahore">night shift</Link>.
          </p>
        </Disclosure>
      </DetailPanel>

      <FaqSection faqs={MEETING_ROOM_FAQS} heading="Meeting room questions" />

      <CtaBand
        heading="Need a Room This Week?"
        waMessage="Hi! I'd like to book a meeting room at The Cowork. Here are my details:"
      />
    </div>
  );
}
