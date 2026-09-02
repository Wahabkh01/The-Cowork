import { Link } from "wouter";
import { MessageCircle } from "lucide-react";
import { Section } from "@/components/Section";
import { NAP } from "@/data/site";

/** Closing call to action, styled after the original About page's CTA panel. */
export function CtaBand({
  heading = "Ready to Upgrade?",
  waMessage = "Hi! I'd like to book a tour of The Cowork.",
}: {
  heading?: string;
  body?: string;
  waMessage?: string;
}) {
  return (
    <Section className="py-32 border-t border-white/5">
      <div className="glass-card rounded-3xl sm:rounded-[2rem] lg:rounded-[3rem] p-8 sm:p-12 lg:p-16 xl:p-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-30" />
        <h2 className="text-white mb-10 relative z-10">{heading}</h2>
        <div className="flex flex-col sm:flex-row gap-5 justify-center relative z-10">
          <Link href="/contact">
            <button className="bg-primary text-black px-16 py-5 font-black uppercase tracking-widest text-sm rounded-full hover:scale-105 transition-all duration-500 shadow-2xl shadow-primary/20">
              Book a Tour
            </button>
          </Link>
          <a
            href={`https://wa.me/${NAP.whatsapp}?text=${encodeURIComponent(waMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button text-white px-12 py-5 font-black uppercase tracking-widest text-sm rounded-full hover:scale-105 transition-all duration-500 flex items-center justify-center gap-3"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" /> WhatsApp
          </a>
        </div>
      </div>
    </Section>
  );
}
