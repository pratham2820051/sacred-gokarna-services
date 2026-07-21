import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navigation = [
    { name: t("header.home"), href: "/" },
    { name: t("header.about"), href: "/about" },
    { name: t("header.poojas"), href: "/poojas" },
    { name: t("header.howToReach"), href: "/how-to-reach" },
    { name: t("header.blogs"), href: "/blogs" },
    { name: t("header.contact"), href: "/contact" },
    {name : t("header.gallery"), href: "/gallery"},
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-3xl">🕉️</div>
            <div>
              <h1 className="text-xl font-playfair font-bold text-primary">
                {t("header.title")}
              </h1>
              <p className="text-xs text-muted-foreground">{t("header.subtitle")}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Language Switcher */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button asChild className="btn-divine">
              <Link to="/contact">
                <Phone className="w-4 h-4 mr-2" />
                {t("header.bookNow")}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href) ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 space-y-3">
                <LanguageSwitcher />
                <Button asChild className="btn-divine w-full">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    <Phone className="w-4 h-4 mr-2" />
                    {t("header.bookNow")}
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;