import { Link } from "wouter";
import { Seo } from "@/components/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { FaqSection } from "@/components/FaqSection";
import { CtaBand } from "@/components/CtaBand";
import { GENERAL_FAQS, PRICING_FAQS, NIGHT_SHIFT_FAQS, MEETING_ROOM_FAQS } from "@/data/faqs";

export default function Faq() {
  return (
    <div className="pt-24 min-h-screen">
      <Seo path="/faq" />
      <Breadcrumbs path="/faq" />

      <PageHero
        eyebrow="Straight answers"
        h1="Frequently Asked"
        highlight="Questions"
        lead="Hours, prices, the night shift, meeting rooms, power, internet and parking."
      />

      <FaqSection faqs={GENERAL_FAQS} heading="The basics" id="general" />
      <FaqSection faqs={PRICING_FAQS} heading="Pricing and payment" id="pricing" />
      <FaqSection faqs={NIGHT_SHIFT_FAQS} heading="Night shift and 24/7 access" id="night-shift" />
      <FaqSection faqs={MEETING_ROOM_FAQS} heading="Meeting rooms" id="meeting-rooms" />

      <section className="bg-black pb-20">
        <div className="container mx-auto px-4 max-w-4xl text-white/40 font-light text-sm">
          <p>
            Still stuck? The{" "}
            <Link href="/pricing" className="text-primary hover:text-white transition-colors">pricing page</Link>{" "}
            has the full rate card, the{" "}
            <Link href="/night-shift-coworking-lahore" className="text-primary hover:text-white transition-colors">night shift page</Link>{" "}
            covers working US and UK hours, and the{" "}
            <Link href="/contact" className="text-primary hover:text-white transition-colors">contact page</Link>{" "}
            has our map, phone number and a form that goes straight to WhatsApp.
          </p>
        </div>
      </section>

      <CtaBand heading="Still Have a Question?" waMessage="Hi! I had a question that wasn't on your FAQ page:" />
    </div>
  );
}
