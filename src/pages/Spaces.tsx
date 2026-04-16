import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Link } from "wouter";
import { Check } from "lucide-react";
import ImageGallery from "@/components/ImageGallery";

export default function Spaces() {
  const plans = [
    {
      name: "Hot Desk",
      price: "15,000",
      period: "/ month",
      desc: "Perfect for freelancers who need a flexible, professional environment.",
      features: [
        "Access to open workspace",
        "High-speed internet",
        "Unlimited coffee & tea",
        "2 hours meeting room credits",
        "Business address"
      ],
      images: [
        "/Images/HotDesk1.webp",
        "/Images/HostDesk4.webp",
        "/Images/HotDesk3.webp",
      ]
    },
    {
      name: "Dedicated Desk",
      price: "25,000",
      period: "/ month",
      featured: true,
      desc: "Your own permanent desk with lockable storage in a shared premium office.",
      features: [
        "Reserved desk & chair",
        "Lockable storage cabinet",
        "24/7 Access",
        "5 hours meeting room credits",
        "Mail handling service",
        "Free printing (100 pages)"
      ],
      images: [
        "/Images/DedicatedDesk1.webp",
        "/Images/Worker1.webp",
        "/Images/DedicatedDesk3.webp",
      ]
    },
    {
      name: "Private Office",
      price: "60,000",
      period: "/ month",
      desc: "Fully furnished private offices for teams of 2 to 50 people.",
      features: [
        "Fully furnished private room",
        "Sound-insulated walls",
        "Custom branding options",
        "Unlimited meeting room access",
        "Guest reception service",
        "Daily cleaning service"
      ],
      images: [
        "/Images/PrivateOffice1.webp",
        "/Images/PrivateOffice2.webp",
        "/Images/PrivateOffice3.webp",
      ]
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <Section className="pb-10 pt-20">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-white mb-6"
          >
            Choose Your <span className="text-gradient-gold">Workspace</span>
          </motion.h1>
          <p className="text-white/60 text-xl font-light">
            Flexible membership plans designed for your growth.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, ease: [0.16, 1, 0.3, 1], duration: 1 }}
              viewport={{ once: true }}
              className={`relative p-10 rounded-[2.5rem] glass-card transition-all duration-500 hover:-translate-y-2 ${
                plan.featured ? "border-primary/40 ring-1 ring-primary/20" : ""
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black px-6 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-primary/40">
                  Most Popular
                </div>
              )}

              <h3 className="text-white mb-3 text-3xl font-bold">{plan.name}</h3>
              <p className="text-white/40 text-sm mb-10 h-10 font-light leading-relaxed">{plan.desc}</p>
              
              <ImageGallery images={plan.images} />

              <div className="mb-12">
                <span className="text-5xl font-bold text-gradient-gold">PKR {plan.price}</span>
                <span className="text-white/30 text-sm ml-2">{plan.period}</span>
              </div>

              <div className="space-y-5 mb-12">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 text-sm text-white/70">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="font-light tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-500 ${
                  plan.featured
                    ? "bg-primary text-black hover:scale-[1.02] shadow-xl shadow-primary/20"
                    : "glass-button text-white hover:scale-[1.02]"
                }`} data-testid={`button-select-${plan.name.toLowerCase().replace(' ', '-')}`}>
                  Select Plan
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="bg-zinc-900 rounded-lg p-8 md:p-12 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-white mb-2">Need a Custom Solution?</h3>
            <p className="text-muted-foreground max-w-xl">
              We offer bespoke office layouts for teams larger than 20 people. 
              Let us design your dream headquarters.
            </p>
          </div>
          <Link href="/contact">
            <button className="px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-black transition-all rounded font-medium whitespace-nowrap">
              Contact Sales
            </button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
