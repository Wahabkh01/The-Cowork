import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Calendar, Users, Heart } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Img } from "@/components/Img";
import { Link } from "wouter";
import { Disclosure, DetailPanel } from "@/components/Details";

export default function Community() {
  return (
    <div className="pt-32 min-h-screen">
      <Seo path="/community" />
      <Section className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white mb-8 leading-tight">
              More Than Just <br/>
              <span className="text-gradient-gold">a Desk</span>
            </h1>
            <p className="text-white/60 text-xl font-light leading-relaxed mb-12">
              Join a network of ambitious professionals and creative minds. 
              Collaboration happens naturally in an environment designed for human connection.
            </p>
            <div className="flex gap-6">
               <div className="glass-card p-6 rounded-3xl min-w-[140px] text-center">
                 <div className="text-4xl font-black text-gradient-gold mb-1">50+</div>
                 <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Companies</div>
               </div>
               <div className="glass-card p-6 rounded-3xl min-w-[140px] text-center">
                 <div className="text-4xl font-black text-gradient-gold mb-1">Weekly</div>
                 <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Events</div>
               </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Img
                name="Community1"
                sizes="(max-width: 1024px) 100vw, 45vw"
                alt="Members at a community event at The Cowork, Lahore"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 blur-[100px] -z-10" />
          </motion.div>
        </div>
      </Section>

      <Section className="py-32">
        <div className="text-center mb-24">
          <h2 className="text-white mb-4">Life at The Cowork</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Founder Fridays",
              desc: "Weekly fireside chats with successful entrepreneurs sharing their journey.",
              icon: <Users className="w-6 h-6 text-primary" />
            },
            {
              title: "Wellness Workshops",
              desc: "Yoga sessions and mental health workshops to keep you balanced.",
              icon: <Heart className="w-6 h-6 text-primary" />
            },
            {
              title: "Networking Mixers",
              desc: "Casual evening gatherings to meet your neighbors and find collaborators.",
              icon: <Calendar className="w-6 h-6 text-primary" />
            }
          ].map((event, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-3xl hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="mb-8 bg-white/5 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-500">
                {event.icon}
              </div>
              <h3 className="text-white mb-4 text-2xl font-bold">{event.title}</h3>
              <p className="text-white/50 leading-relaxed font-light">{event.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <DetailPanel title="Inside the community">
        <Disclosure summary="Who you would actually be sitting next to" level="h2">
          <p>
            The mix here is roughly half individuals and half small teams, and it is deliberate. Too many
            freelancers and the space is silent; too many teams and it is a set of private companies that
            happen to share a car park.
          </p>
          <p>
            In practice that means software developers and designers working for foreign clients, small
            agencies running social and performance marketing, a handful of product startups, consultants
            and accountants, and researchers from the UET corridor down{" "}
            <Link href="/coworking-space-pcsir">College Road</Link>. A significant share work the{" "}
            <Link href="/night-shift-coworking-lahore">night shift</Link> on American and British hours,
            which gives the place two distinct characters depending on when you walk in.
          </p>
        </Disclosure>

        <Disclosure summary="The two shifts have two different atmospheres" level="h2">
          <p>
            Walk in at eleven in the morning and it is a normal busy office: calls in the meeting rooms,
            people moving between desks, the café working hard. Walk in at eleven at night and it is
            noticeably quieter and more focused — a floor of people on client calls to America,
            headphones on. Both are good rooms to be in. They are not the same room.
          </p>
          <p>
            If what you want from coworking is people to talk to, the day shift gives you more of them.
            If what you want is uninterrupted hours, the night is hard to beat — and it is not a
            compromise here, because the power, internet, security and café all run through it.
          </p>
        </Disclosure>

        <Disclosure summary="Introductions, not networking" level="h2">
          <p>
            We do not run a members' directory app or a Slack nobody posts in. What we do is simpler:
            reception knows what most members do for a living, and if you say "I need someone who can
            build a Shopify integration by Friday", they will point you at a desk. That has produced more
            actual work for members than any event we have run.
          </p>
          <p>
            Members also run their own sessions in our{" "}
            <Link href="/meeting-rooms-lahore">meeting rooms</Link> — study groups, workshops, portfolio
            reviews, small meetups. If you organise something for the Lahore freelance or startup
            community and need a room with reliable power, talk to reception. We would rather the space
            was used.
          </p>
        </Disclosure>

        <Disclosure summary="Joining" level="h2">
          <p>
            Every plan includes access to everything on this page — there is no separate community fee
            and no tier that excludes you from events. Rates are on the{" "}
            <Link href="/pricing">pricing page</Link>: PKR 15,000 for a{" "}
            <Link href="/hot-desk-lahore">hot desk</Link>, PKR 25,000 for a{" "}
            <Link href="/dedicated-desk-lahore">dedicated desk</Link>, from PKR 60,000 for a{" "}
            <Link href="/private-office-lahore">private office</Link>.
          </p>
        </Disclosure>
      </DetailPanel>
    </div>
  );
}
