import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="pt-32 min-h-screen">
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
                alt="Building Architecture" 
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
    </div>
  );
}
