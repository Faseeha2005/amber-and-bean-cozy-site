import { Link } from "react-router-dom";
import { Coffee, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-coffee text-cream">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
        >
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Coffee className="h-6 w-6 text-warm-amber" />
              <span className="font-display text-xl font-bold">
                Amber <span className="text-warm-amber">&</span> Bean
              </span>
            </div>
            <p className="text-sm text-cream/70 leading-relaxed">
              Where every cup feels like home. Crafted with love, served with warmth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-warm-amber">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/menu", label: "Menu" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-cream/70 hover:text-warm-amber transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-warm-amber">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-cream/70">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-warm-amber shrink-0" />
                <span>12 Northcar Street, T. Nagar, Chennai</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-warm-amber shrink-0" />
                <span>(503) 555-0127</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-warm-amber shrink-0" />
                <span>hello@amberandbean.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-warm-amber">Hours</h4>
            <div className="text-sm text-cream/70 space-y-1">
              <p>Mon - Fri: 6:30 AM - 8:00 PM</p>
              <p>Saturday: 7:00 AM - 9:00 PM</p>
              <p>Sunday: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-cream/50">© 2026 Amber & Bean. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-cream/50 hover:text-warm-amber transition-all duration-200 hover:scale-110"
                aria-label="Social media"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
