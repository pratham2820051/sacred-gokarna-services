import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gradient-divine text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🕉️</div>
              <h3 className="text-lg font-playfair font-bold">
                {t("header.title")}
              </h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold">{t("footer.quickLinks")}</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-white/80 hover:text-white transition-colors text-sm">
                {t("header.about")}
              </Link>
              <Link to="/poojas" className="text-white/80 hover:text-white transition-colors text-sm">
                {t("header.poojas")}
              </Link>
              <Link to="/how-to-reach" className="text-white/80 hover:text-white transition-colors text-sm">
                {t("header.howToReach")}
              </Link>
              <Link to="/blogs" className="text-white/80 hover:text-white transition-colors text-sm">
                {t("header.blogs")}
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold">{t("footer.services")}</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/poojas" className="text-white/80 hover:text-white transition-colors text-sm">
                {t("footer.rudrabhisheka")}
              </Link>
              <Link to="/poojas" className="text-white/80 hover:text-white transition-colors text-sm">
                {t("footer.narayanBali")}
              </Link>
              <Link to="/poojas" className="text-white/80 hover:text-white transition-colors text-sm">
                {t("footer.tripindiShraddha")}
              </Link>
              <Link to="/poojas" className="text-white/80 hover:text-white transition-colors text-sm">
                {t("footer.mahamrityunjaya")}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold">{t("footer.contact")}</h4>
            <div className="space-y-3">
              <a 
                href="tel:+919876543210" 
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 9999999999</span>
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
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;