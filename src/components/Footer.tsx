import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { NAP, SOCIAL_LINKS, HOURS, BUSINESS_NAME } from "@/data/site";

const SOCIAL_ICONS: Record<string, { icon: typeof Facebook; label: string }> = {
  facebook: { icon: Facebook, label: "Facebook" },
  instagram: { icon: Instagram, label: "Instagram" },
  linkedin: { icon: Linkedin, label: "LinkedIn" },
};

export function Footer() {
  return (
    <footer className="pb-12 px-6">
      <div className="container mx-auto max-w-7xl glass-card rounded-[3rem] p-12 md:p-20 border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24 relative z-10">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <img src="/Images/Logo.png" alt="The Cowork Logo" width={40} height={40} className="h-10 w-auto" />
              <div className="text-2xl font-black tracking-tighter">
                <span className="text-primary">THE</span>
                <span className="text-white ml-2">COWORK</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Premium workspace solutions for the modern professional in Lahore. 
              Elevate your productivity.
            </p>
            <div className="flex gap-6">
              {SOCIAL_LINKS.map(([key, url]) => {
                const entry = SOCIAL_ICONS[key];
                if (!entry) return null;
                const Icon = entry.icon;
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${BUSINESS_NAME} on ${entry.label}`}
                    className="text-white/40 hover:text-primary transition-all hover:scale-110"
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[10px]">Explore</h4>
            <ul className="space-y-4 text-sm text-white/40 font-light">
              <li><Link href="/private-office-lahore"><span className="hover:text-primary cursor-pointer transition-colors">Private Offices</span></Link></li>
              <li><Link href="/dedicated-desk-lahore"><span className="hover:text-primary cursor-pointer transition-colors">Dedicated Desks</span></Link></li>
              <li><Link href="/hot-desk-lahore"><span className="hover:text-primary cursor-pointer transition-colors">Hot Desks</span></Link></li>
              <li><Link href="/meeting-rooms-lahore"><span className="hover:text-primary cursor-pointer transition-colors">Meeting Rooms</span></Link></li>
              <li><Link href="/pricing"><span className="hover:text-primary cursor-pointer transition-colors">Pricing</span></Link></li>
              <li><Link href="/night-shift-coworking-lahore"><span className="hover:text-primary cursor-pointer transition-colors">Night Shift</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[10px]">Company</h4>
            <ul className="space-y-4 text-sm text-white/40 font-light">
              <li><Link href="/about"><span className="hover:text-primary cursor-pointer transition-colors">About Us</span></Link></li>
              <li><Link href="/amenities"><span className="hover:text-primary cursor-pointer transition-colors">Amenities</span></Link></li>
              <li><Link href="/community"><span className="hover:text-primary cursor-pointer transition-colors">Events</span></Link></li>
              <li><Link href="/faq"><span className="hover:text-primary cursor-pointer transition-colors">FAQs</span></Link></li>
              <li><Link href="/coworking-space-wapda-town"><span className="hover:text-primary cursor-pointer transition-colors">Near Wapda Town</span></Link></li>
              <li><Link href="/coworking-space-pcsir"><span className="hover:text-primary cursor-pointer transition-colors">PCSIR & College Road</span></Link></li>
            </ul>
          </div>

          {/* NAP block — this exact wording is what goes on every directory listing. */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[10px]">Visit Us</h4>
            <ul className="space-y-6 text-sm text-white/40 font-light">
              <li className="flex items-start gap-4">
                <MapPin className="text-primary shrink-0 mt-0.5" size={18} aria-hidden="true" />
                <span>{NAP.full}</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-primary shrink-0" size={18} aria-hidden="true" />
                <a href={`tel:${NAP.phoneE164}`} className="hover:text-primary transition-colors">{NAP.phone}</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-primary shrink-0" size={18} aria-hidden="true" />
                <a href={`mailto:${NAP.email}`} className="hover:text-primary transition-colors break-all">{NAP.email}</a>
              </li>
              <li className="text-white/30 leading-relaxed">
                {HOURS.accessLabel}.<br />
                {HOURS.receptionLabel}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 text-[10px] font-bold uppercase tracking-widest text-white/20">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_NAME}. Built for Excellence.</p>
          <p>Coworking Space in Johar Town, Lahore</p>
        </div>
      </div>
      <a
        href={`https://wa.me/${NAP.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with The Cowork on WhatsApp"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <MessageCircle size={24} aria-hidden="true" />
      </a>
    </footer>
  );
}
