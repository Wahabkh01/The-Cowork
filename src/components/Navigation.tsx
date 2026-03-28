import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/spaces", label: "Spaces & Plans" },
  { href: "/amenities", label: "Amenities" },
  { href: "/community", label: "Community" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact", primary: true },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="fixed top-6 w-full z-50 px-6">
      <nav
        className={`mx-auto max-w-5xl rounded-full transition-all duration-500 border border-white/10 ${
          scrolled ? "glass-nav py-2 shadow-2xl" : "bg-black/20 backdrop-blur-md py-4"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <div className="text-xl font-black tracking-tighter cursor-pointer flex items-center gap-2 group">
              <span className="text-primary group-hover:scale-110 transition-transform">THE</span>
              <span className="text-white">COWORK</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all cursor-pointer px-4 py-2 rounded-full ${
                    link.primary
                      ? "bg-primary text-black hover:scale-105 shadow-lg shadow-primary/20 ml-2"
                      : "text-white/40 hover:text-white hover:bg-white/5"
                  } ${location === link.href && !link.primary ? "text-white bg-white/10" : ""}`}
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-full left-0 right-0 mt-4 mx-2 rounded-[2rem] overflow-hidden border border-white/10"
              style={{
                background: "rgba(0, 0, 0, 0.98)",
                backdropFilter: "blur(40px)",
                WebkitBackdropFilter: "blur(40px)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.9)",
              }}
            >
              <div className="p-8 flex flex-col gap-6">
                {links.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <div
                      className={`text-2xl font-black uppercase tracking-tighter cursor-pointer ${
                        location === link.href ? "text-primary" : "text-white/80"
                      }`}
                    >
                      {link.label}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
