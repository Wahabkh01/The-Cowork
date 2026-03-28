import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { InquiryForm } from "@/components/InquiryForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen">
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
                { icon: <MapPin />, title: "Visit", val: "123 MM Alam Road, Gulberg III" },
                { icon: <Phone />, title: "Call", val: "+92 300 123 4567" },
                { icon: <Mail />, title: "Email", val: "hello@thecowork.pk" },
                { icon: <Clock />, title: "Hours", val: "Reception: 9AM - 8PM" },
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 rounded-3xl group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/10 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-white text-lg mb-1 font-bold">{item.title}</h3>
                  <p className="text-white/40 text-sm font-light">{item.val}</p>
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

      {/* Map Placeholder */}
      <div className="h-[400px] w-full bg-zinc-900 flex items-center justify-center border-t border-white/10">
        <p className="text-muted-foreground flex items-center gap-2">
          <MapPin /> Google Maps Embed Would Go Here
        </p>
      </div>
    </div>
  );
}
