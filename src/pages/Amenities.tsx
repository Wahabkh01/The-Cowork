import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Wifi, Zap, Utensils, Shield, Printer, MonitorPlay, Sofa, Car } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Img } from "@/components/Img";
import { Link } from "wouter";
import { Disclosure, DetailPanel } from "@/components/Details";

export default function Amenities() {
  const amenities = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "High-Speed Fibre Internet",
      desc: "Dedicated fiber optic lines with redundant backups ensuring you never disconnect."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "24/7 Power Backup",
      desc: "Industrial-grade generators and UPS systems. Load shedding is not a word in our dictionary."
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Tea & Refreshments",
      desc: "Complimentary tea and filtered water. Snacks available at the bar."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Access",
      desc: "Biometric entry, CCTV surveillance, and 24/7 on-site security personnel."
    },
    {
      icon: <Sofa className="w-8 h-8" />,
      title: "Ergonomic Furniture",
      desc: "Herman Miller chairs and height-adjustable desks in all premium suites."
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: "Business Center",
      desc: "High-volume printing, scanning, and mail handling services included."
    },
    {
      icon: <MonitorPlay className="w-8 h-8" />,
      title: "Tech-Enabled Rooms (Coming Soon)",
      desc: "Future endeavor: Meeting rooms equipped with 4K screens, Polycom conference systems, and whiteboards."
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "On-Site Parking",
      desc: "Hassle-free parking inside the property for you and your guests."
    }
  ];

  return (
    <div className="pt-20 sm:pt-24 min-h-screen">
      <Seo path="/amenities" />
      <Section className="text-center pt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white mb-6"
        >
          World-Class <span className="text-gradient-gold">Amenities</span>
        </motion.h1>
        <p className="text-white/60 max-w-2xl mx-auto text-xl font-light">
          Everything you need is already here.
        </p>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group p-8 glass-card rounded-3xl hover:border-primary/40 transition-all duration-500"
            >
              <div className="mb-6 text-primary w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-white text-xl mb-3 font-bold">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Visual Break - Image */}
      <div className="h-[260px] sm:h-[340px] lg:h-[420px] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Img
          name="AmenitiesOfficeBanner"
          sizes="100vw"
          alt="The Cowork amenities area in Lahore with desks, lounge seating and a refreshment station"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center">
          <h2 className="text-white text-3xl md:text-5xl font-serif italic">Work. Lounge. Create.</h2>
        </div>
      </div>

      <DetailPanel title="What's actually included">
        <Disclosure summary="The two amenities that actually decide it: power and internet" level="h2">
          <p>
            Coworking spaces in Lahore all advertise roughly the same list. In practice two items on it
            determine whether a workspace is usable, and both are invisible on a tour unless you ask
            pointed questions.
          </p>
          <h4>Power</h4>
          <p>
            "Power backup" can mean anything from a generator that takes ninety seconds to start —
            during which your machine reboots and your call drops — to a UPS layer that bridges the gap
            so seamlessly you never notice the grid went down. We run the second kind: UPS on the desks
            and the network hardware, generators behind it. Ask any workspace you are considering what
            happens in the first sixty seconds of an outage. The answer is revealing.
          </p>
          <h4>Internet</h4>
          <p>
            The number that matters is not the headline speed, it is what the connection does when
            everyone is on a call at once, and what happens when the line itself fails. We run dedicated
            fibre with a second line on automatic failover. On a tour, ask to run a speed test yourself,
            at a busy hour, at the desk you would actually sit at. We will hand you the WiFi password
            and let you.
          </p>
        </Disclosure>

        <Disclosure summary="The things nobody lists but everybody notices" level="h2">
          <ul>
            <li>
              <strong>Air conditioning sized for the room</strong>, behind the same generator capacity
              as everything else. A hot office in June is not a workspace.
            </li>
            <li>
              <strong>Lounge seating away from the desks.</strong> A break is only a break if you change
              your position.
            </li>
            <li>
              <strong>Daily cleaning, including the kitchen and washrooms.</strong> The least glamorous
              line here and the one members mention most often.
            </li>
            <li>
              <strong>Reception that knows your name and takes your parcels</strong>, staffed 9:00 AM to
              8:00 PM.
            </li>
            <li>
              <strong>Quiet enforced by layout rather than rules.</strong> Calls happen in rooms and
              phone areas because the rooms are close enough that using them is easier than not.
            </li>
          </ul>
        </Disclosure>

        <Disclosure summary="Included with every plan, and available around the clock" level="h2">
          <p>
            Everything on this page comes with a <Link href="/hot-desk-lahore">hot desk</Link>, a{" "}
            <Link href="/dedicated-desk-lahore">dedicated desk</Link> and a{" "}
            <Link href="/private-office-lahore">private office</Link> alike. What changes between plans
            is the permanence of your seat, your storage, your printing allowance and how many{" "}
            <Link href="/meeting-rooms-lahore">meeting room</Link> hours you get. Rates are on the{" "}
            <Link href="/pricing">pricing page</Link>.
          </p>
          <p>
            None of it switches off in the evening. The internet, the power backup, the security and the
            café run through the <Link href="/night-shift-coworking-lahore">night shift</Link> exactly as
            they do at midday. Reception is the one thing with fixed hours: 9:00 AM to 8:00 PM daily.
          </p>
        </Disclosure>
      </DetailPanel>
    </div>
  );
}
