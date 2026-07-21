import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, Star, Users, Shield, Clock, Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import rudrabhisheka from "@/assets/rudrabhisheka.jpg";
import templeComplex from "@/assets/temple-complex.jpg";
import heroVideo from "@/assets/heroVideo.mp4";
import heroPoster from "@/assets/gokarna-hero.jpg";
import Rudrabhisheka from "@/assets/Rudrabhisheka.png";
import narayanBali from "@/assets/narayanBali.jpg"

import Tripindi from "@/assets/Tripindi.png"
import { SEO } from "@/components/SEO";

// Hero section: poster image on mobile, deferred video on desktop
const HeroSection = ({ t }: { t: (key: string) => string }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // On desktop, auto-load and play video after component mounts (deferred)
  useEffect(() => {
    if (!isMobile && videoRef.current) {
      videoRef.current.src = heroVideo;
      videoRef.current.load();
      videoRef.current.play().then(() => setVideoPlaying(true)).catch(() => {});
    }
  }, [isMobile]);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.src = heroVideo;
      videoRef.current.load();
      videoRef.current.play().then(() => setVideoPlaying(true)).catch(() => {});
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background: poster image shown immediately, video loads on top */}
      <div className="absolute inset-0">
        <img
          src={heroPoster}
          alt="Sacred Gokarna Temple"
          className={`w-full h-full object-cover ${videoPlaying ? 'hidden' : 'block'}`}
          fetchPriority="high"
        />
        <video
          ref={videoRef}
          className={`w-full h-full object-cover absolute inset-0 ${videoPlaying ? 'block' : 'hidden'}`}
          poster={heroPoster}
          loop
          muted
          playsInline
          preload="none"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-temple opacity-80" />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-fade-in-up">
          Narayana Bali & Tripindi Shraddha Pooja in Gokarna
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {t('home.hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button asChild size="lg" className="btn-divine text-lg px-8 py-4">
            <Link to="/poojas">
              {t('home.hero.bookPooja')}
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-orange-800 hover:bg-white hover:text-primary">
            <a href="https://wa.me/919901801625" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
              <MessageCircle className="w-5 h-5 mr-2" />
              {t('home.hero.whatsapp')}
            </a>
          </Button>
        </div>

        {/* Mobile: play video button */}
        {isMobile && !videoPlaying && (
          <button
            onClick={handlePlayVideo}
            className="mt-6 inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            aria-label="Play background video"
          >
            <Play className="w-5 h-5" />
            <span className="text-sm">Watch Video</span>
          </button>
        )}
      </div>
    </section>
  );
};

const Home = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: t('home.testimonials.testimonial1.name'),
      location: t('home.testimonials.testimonial1.location'),
      text: t('home.testimonials.testimonial1.text'),
      rating: 5
    },
    {
      name: t('home.testimonials.testimonial2.name'),
      location: t('home.testimonials.testimonial2.location'),
      text: t('home.testimonials.testimonial2.text'),
      rating: 5
    },
    {
      name: t('home.testimonials.testimonial3.name'),
      location: t('home.testimonials.testimonial3.location'),
      text: t('home.testimonials.testimonial3.text'),
      rating: 5
    }
  ];

  const services = [
    {
      title: t('home.services.rudrabhisheka.title'),
      description: t('home.services.rudrabhisheka.description'),
      //price: t('home.services.rudrabhisheka.price'),
      image: Rudrabhisheka
    },
    {
      title: t('home.services.narayanBali.title'),
      description: t('home.services.narayanBali.description'),
      //price: t('home.services.narayanBali.price'),
      image: narayanBali
    },
    {
      title: t('home.services.tripindiShraddha.title'),
      description: t('home.services.tripindiShraddha.description'),
      //price: t('home.services.tripindiShraddha.price'),
      image: Tripindi
    }
  ];

  const features = [
    {
      icon: Shield,
      title: t('home.whyChoose.authentic.title'),
      description: t('home.whyChoose.authentic.description')
    },
    {
      icon: Users,
      title: t('home.whyChoose.experienced.title'),
      description: t('home.whyChoose.experienced.description')
    },
    {
      icon: Clock,
      title: t('home.whyChoose.support.title'),
      description: t('home.whyChoose.support.description')
    }
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Narayana Bali Tripindi - Sacred Gokarna Services",
    "image": "https://narayanabalitripindi.com/og-image.jpg",
    "url": "https://narayanabalitripindi.com/",
    "telephone": "+91-9901801625",
    "priceRange": "₹10,000–₹20,000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kotiteertha",
      "addressLocality": "Gokarna",
      "addressRegion": "Karnataka",
      "postalCode": "581326",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 14.5479,
      "longitude": 74.3188
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "06:00",
      "closes": "20:00"
    }
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Narayana Bali Tripindi",
    "url": "https://narayanabalitripindi.com/"
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Narayana Bali & Tripindi Shraddha Pooja in Gokarna | Book"
        description="Book authentic Narayana Bali, Tripindi Shraddha & Nag Bali pooja in Gokarna with certified Vedic priests. In-person or virtual. 10 years' experience."
        keywords="narayanabali, narayanabalitripindi, gokarnapooja, gokarna pooja, Narayana Bali, Tripindi Shraddha, Pooja booking, Hindu rituals, online pooja services, Pitru dosha remedies, narayan bali pooja, tripindi shraddha pooja, gokarna temple, vedic rituals"
        canonical="https://narayanabalitripindi.com"
        structuredData={[localBusinessSchema, webSiteSchema]}
      />
      {/* Hero Section */}
      <HeroSection t={t} />

      {/* Quick Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="sacred-card divine-hover">
                <div className="aspect-video overflow-hidden rounded-t-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">

                    <Button asChild variant="outline" className="hover:bg-primary hover:text-white">
                      <Link to="/poojas">{t('home.services.bookNow')}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              {t('home.whyChoose.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('home.whyChoose.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              {t('home.testimonials.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('home.testimonials.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="sacred-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* video section*/}

      {/* Devotee Experience Video Section */}
      <section className="py-16 bg-gradient-sacred">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
            {t("home.video.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            {t("home.video.subtitle")}
          </p>

          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden group shadow-2xl">
            {/* YouTube Embed */}
            <iframe
              id="ytplayer"
              className="w-full h-[480px] rounded-2xl transition-all duration-500 group-hover:blur-sm"
              src="https://www.youtube.com/embed/inySpZ5Aq2w?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=inySpZ5Aq2w"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Devotee experience video - Narayana Bali Pooja at Gokarna"
            ></iframe>

            {/* Overlay on hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <a
                href="https://youtu.be/inySpZ5Aq2w"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#FF6600] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-[#FF6600] hover:to-[#FFA500] hover:text-white transition-colors flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-5 h-5"
                >
                  <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l4.5-2.5a.5.5 0 0 0 0-.814l-4.5-2.5z" />
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
                </svg>
                {t("home.video.watchOnYoutube")}
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 bg-gradient-divine text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            {t("home.cta.title")}
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {t("home.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Call Now button */}
            <Button
              asChild
              size="lg"
              className="bg-white text-[#FF6600] border border-[#FF6600] 
                   hover:bg-gradient-to-r hover:from-[#FF6600] hover:to-[#FFA500] 
                   hover:text-white transition"
            >
              <Link to="/contact" aria-label="Call us at 9901801625">
                <Phone className="w-5 h-5 mr-2" />
                9901801625
              </Link>
            </Button>

            {/* WhatsApp Us button */}


            <Button
              asChild
              size="lg"
              className="bg-white text-[#FF6600] border border-[#FF6600] 
                   hover:bg-gradient-to-r hover:from-[#FF6600] hover:to-[#FFA500] 
                   hover:text-white transition"
            >
              <a
                href="https://wa.me/919901801625"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t("home.cta.whatsappUs")}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Floating Icon Bottom-Left */}
      {/* <Link 
  to="/special-page" 
  className="fixed bottom-4 right-4 z-50"
>
  <img 
    src={myIcon} 
    alt="Special Page" 
    className="w-12 h-12 cursor-pointer hover:scale-110 transition-transform"
  />
</Link> */}

    </div>
  );
};

export default Home;