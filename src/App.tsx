import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Analytics } from "@vercel/analytics/next";
import "./i18n";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Eagerly load homepage (critical path)
import Home from "./pages/Home";

// Lazy-load all other pages (code-splitting)
const About = lazy(() => import("./pages/About"));
const Poojas = lazy(() => import("./pages/Poojas"));
const HowToReach = lazy(() => import("./pages/HowToReach"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SpecialPage = lazy(() => import("./pages/SpecialPage"));
const Gallery = lazy(() => import("./pages/Gallery"));
const NarayanaBaliPooja = lazy(() => import("./pages/NarayanaBaliPooja"));
const TripindiShraddha = lazy(() => import("./pages/TripindiShraddha"));
const PitruDoshaRemedies = lazy(() => import("./pages/PitruDoshaRemedies"));
const VirtualPoojaBooking = lazy(() => import("./pages/VirtualPoojaBooking"));
const Pricing = lazy(() => import("./pages/Pricing"));
const FAQ = lazy(() => import("./pages/FAQ"));

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
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
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
              </Suspense>
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
