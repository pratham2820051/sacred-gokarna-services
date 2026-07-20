import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Analytics } from "@vercel/analytics/next";
import "./i18n";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Poojas from "./pages/Poojas";
import HowToReach from "./pages/HowToReach";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SpecialPage from "@/pages/SpecialPage";
import Gallery from "./pages/Gallery";
import NarayanaBaliPooja from "./pages/NarayanaBaliPooja";
import TripindiShraddha from "./pages/TripindiShraddha";
import PitruDoshaRemedies from "./pages/PitruDoshaRemedies";
import VirtualPoojaBooking from "./pages/VirtualPoojaBooking";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();

  // Loading screen for 2.5s
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Set document language and font dynamically
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    const fontFamily =
      i18n.language === "kn"
        ? "'Noto Sans Kannada', sans-serif"
        : i18n.language === "te"
        ? "'Noto Sans Telugu', sans-serif"
        : "'Inter', sans-serif";
    document.documentElement.style.setProperty("--font-family-current", fontFamily);
  }, [i18n.language]);

  if (loading) return <LoadingScreen />;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/special-page" element={<SpecialPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/poojas" element={<Poojas />} />
                <Route path="/narayana-bali-pooja" element={<NarayanaBaliPooja />} />
                <Route path="/tripindi-shraddha" element={<TripindiShraddha />} />
                <Route path="/pitru-dosha-remedies" element={<PitruDoshaRemedies />} />
                <Route path="/virtual-pooja-booking" element={<VirtualPoojaBooking />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/how-to-reach" element={<HowToReach />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
        <Analytics /> {/* ← Vercel Analytics */}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
