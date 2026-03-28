import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Wifi, Zap, Coffee, Shield, Printer, MonitorPlay, Sofa, Key } from "lucide-react";

export default function Amenities() {
  const amenities = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Gigabit Internet",
      desc: "Dedicated fiber optic lines with redundant backups ensuring you never disconnect."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "24/7 Power Backup",
      desc: "Industrial-grade generators and UPS systems. Load shedding is not a word in our dictionary."
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Premium Café",
      desc: "Unlimited artisan roasted coffee, tea, and fruit water. Snacks available at the bar."
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
      title: "Tech-Enabled Rooms",
      desc: "Meeting rooms equipped with 4K screens, Polycom conference systems, and whiteboards."
    },
    {
      icon: <Key className="w-8 h-8" />,
      title: "Valet Parking",
      desc: "Hassle-free parking with dedicated valet service for you and your guests."
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
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
      <div className="h-[400px] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Unsplash: Coffee shop or lounge area in office */}
        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop" 
          alt="Office Lounge" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-5xl font-serif italic">Work. Lounge. Create.</h2>
        </div>
      </div>
    </div>
  );
}
