import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="pb-12 px-6">
      <div className="container mx-auto max-w-7xl glass-card rounded-[3rem] p-12 md:p-20 border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10" />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24 relative z-10">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <img src="/Images/Logo.png" alt="The Cowork Hub Logo" className="h-10 w-auto" />
              <div className="text-2xl font-black tracking-tighter">
                <span className="text-primary">THE</span>
                <span className="text-white">COWORK</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Premium workspace solutions for the modern professional in Lahore. 
              Elevate your productivity.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-primary transition-all hover:scale-110"><Instagram size={20} /></a>
              <a href="#" className="text-white/40 hover:text-primary transition-all hover:scale-110"><Facebook size={20} /></a>
              <a href="#" className="text-white/40 hover:text-primary transition-all hover:scale-110"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[10px]">Explore</h4>
            <ul className="space-y-4 text-sm text-white/40 font-light">
              <li><Link href="/spaces"><span className="hover:text-primary cursor-pointer transition-colors">Private Offices</span></Link></li>
              <li><Link href="/spaces"><span className="hover:text-primary cursor-pointer transition-colors">Dedicated Desks</span></Link></li>
              <li><Link href="/amenities"><span className="hover:text-primary cursor-pointer transition-colors">Amenities</span></Link></li>
              <li><Link href="/community"><span className="hover:text-primary cursor-pointer transition-colors">Events</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[10px]">Company</h4>
            <ul className="space-y-4 text-sm text-white/40 font-light">
              <li><Link href="/about"><span className="hover:text-primary cursor-pointer transition-colors">About Us</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-primary cursor-pointer transition-colors">Contact</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-primary cursor-pointer transition-colors">Careers</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-primary cursor-pointer transition-colors">Privacy</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[10px]">Visit Us</h4>
            <ul className="space-y-6 text-sm text-white/40 font-light">
              <li className="flex items-start gap-4">
                <MapPin className="text-primary shrink-0" size={18} />
                <span>95 College Road, near Johar Town, Block D Block E PCSIR Staff Colony, Lahore, 54770 Map of The Cowork - Coworking Space Johar Town Lahore</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-primary shrink-0" size={18} />
                <span>+92 333 4835258</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-primary shrink-0" size={18} />
                <span>thecoworkpk@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 text-[10px] font-bold uppercase tracking-widest text-white/20">
          <p>&copy; {new Date().getFullYear()} The Cowork. Built for Excellence.</p>
          <div className="flex gap-8">
            <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
            <span className="hover:text-white transition-colors cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
