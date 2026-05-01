import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Wifi, Shield, Users, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Wash */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="/Images/LandingPageImage.webp" 
            alt="Luxury Coworking Space" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-20 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-white mb-6 leading-tight">
              Premium Coworking <br/>
              <span className="text-gradient-gold">in Lahore</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 font-light tracking-wide">
              Where ambition meets luxury in the heart of Johar Town.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-24 sm:mb-0">
              <Link href="/contact">
                <button className="px-10 py-4 bg-primary text-black font-bold rounded-full hover:scale-105 transition-all duration-500 shadow-xl shadow-primary/20" data-testid="button-book-tour">
                  Book a Tour
                </button>
              </Link>
              <Link href="/spaces">
                <button className="px-10 py-4 glass-button text-white font-semibold rounded-full hover:scale-105 transition-all duration-500" data-testid="button-view-plans">
                  View Plans
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 z-20">
          <div className="glass-card rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Members", value: "500+" },
              { label: "Offices", value: "40" },
              { label: "Events", value: "12+" },
              { label: "Uptime", value: "99.9%" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient-gold mb-1">{stat.value}</div>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <Section className="pt-48 md:pt-32">
        <div className="text-center mb-20">
          <h2 className="text-white mb-4">Curated for Excellence</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Freelancers",
              desc: "Escape the isolation of working from home. Join a vibrant community of creatives.",
              icon: <Wifi className="w-6 h-6 text-primary" />
            },
            {
              title: "Startups",
              desc: "Scale your team effortlessly with flexible plans that grow as you do.",
              icon: <Shield className="w-6 h-6 text-primary" />
            },
            {
              title: "Enterprise Teams",
              desc: "Premium private offices with bespoke branding options for established companies.",
              icon: <Users className="w-6 h-6 text-primary" />
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-3xl hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="mb-8 bg-white/5 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-white mb-4 text-2xl font-bold">{item.title}</h3>
              <p className="text-white/50 leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Workspace Preview */}
      <Section className="pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-8 leading-tight">Designed for <span className="text-gradient-gold">Focus</span></h2>
            <p className="text-white/60 mb-10 text-xl font-light leading-relaxed">
              Every corner of The Cowork is meticulously crafted to enhance productivity. 
              We've thought of everything so you can focus on what matters.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                "24/7 Secure Access",
                "Hi-Speed Fiber",
                "Unlimited Coffee",
                "Concierge Service"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-4 text-white/80 glass-button p-4 rounded-2xl">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span className="font-medium tracking-tight">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/spaces">
              <button className="flex items-center gap-2 text-primary hover:text-white transition-all group font-bold text-lg" data-testid="link-explore-spaces">
                Explore All Spaces <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="Images/WomanWorking.webp" 
                alt="Workspace Detail" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-[100px] -z-10" />
          </motion.div>
        </div>
      </Section>
    </>
  );
}
