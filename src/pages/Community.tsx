import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Calendar, Users, Heart } from "lucide-react";

export default function Community() {
  return (
    <div className="pt-32 min-h-screen">
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
              <img 
                src="/Images/Community1.webp" 
                alt="Community Event" 
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
    </div>
  );
}
