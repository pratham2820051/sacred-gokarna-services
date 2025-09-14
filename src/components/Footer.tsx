import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-divine text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🕉️</div>
              <h3 className="text-lg font-playfair font-bold">
                Gokarna Pooja Services
              </h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Authentic temple rituals and sacred ceremonies performed by 
              experienced priests in the divine atmosphere of Gokarna.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-white/80 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link to="/poojas" className="text-white/80 hover:text-white transition-colors text-sm">
                Poojas & Sevas
              </Link>
              <Link to="/how-to-reach" className="text-white/80 hover:text-white transition-colors text-sm">
                How to Reach
              </Link>
              <Link to="/blogs" className="text-white/80 hover:text-white transition-colors text-sm">
                Blogs
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold">Popular Services</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/poojas" className="text-white/80 hover:text-white transition-colors text-sm">
                Rudrabhisheka
              </Link>
              <Link to="/poojas" className="text-white/80 hover:text-white transition-colors text-sm">
                Narayan Bali
              </Link>
              <Link to="/poojas" className="text-white/80 hover:text-white transition-colors text-sm">
                Tripindi Shraddha
              </Link>
              <Link to="/poojas" className="text-white/80 hover:text-white transition-colors text-sm">
                Mahamrityunjaya Jap
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <a 
                href="tel:+919876543210" 
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 98765 43210</span>
              </a>
              <a 
                href="mailto:info@gokarnapoojas.com" 
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@gokarnapoojas.com</span>
              </a>
              <div className="flex items-start space-x-3 text-white/80">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-sm">
                  Gokarna Temple Complex,<br />
                  Uttara Kannada, Karnataka
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Gokarna Pooja Services. All rights reserved. | 
            Blessed by the divine grace of Lord Shiva
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;