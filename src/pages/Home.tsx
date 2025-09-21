import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, Star, Users, Shield, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

import rudrabhisheka from "@/assets/rudrabhisheka.jpg";
import templeComplex from "@/assets/temple-complex.jpg";
import heroVideo from "@/assets/heroVideo.mp4";
import myIcon from "@/assets/icon.png"; 

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
      image: rudrabhisheka
    },
    {
      title: t('home.services.narayanBali.title'),
      description: t('home.services.narayanBali.description'),
      //price: t('home.services.narayanBali.price'),
      image: templeComplex
    },
    {
      title: t('home.services.tripindiShraddha.title'),
      description: t('home.services.tripindiShraddha.description'),
      //price: t('home.services.tripindiShraddha.price'),
      image: templeComplex
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
      <video
        className="w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
        <div className="absolute inset-0 bg-gradient-temple opacity-80" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-fade-in-up">
            {t('home.hero.title').split(' ').map((word, index) => 
              word === 'Gokarna' || word === 'ಗೋಕರ್ಣ' || word === 'గోకర్ణ' ? 
              <span key={index} className="text-yellow-300">{word} </span> : word + ' '
            )}
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
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                {t('home.hero.whatsapp')}
              </a>
            </Button>
          </div>
        </div>
      </section>

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
        <Link to="/contact">
          <Phone className="w-5 h-5 mr-2" />
          {t("home.cta.callNow")}
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
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          {t("home.cta.whatsappUs")}
        </a>
      </Button>
    </div>
  </div>
</section>

      {/* Floating Icon Bottom-Left */}
<Link 
  to="/special-page" 
  className="fixed bottom-4 right-4 z-50"
>
  <img 
    src={myIcon} 
    alt="Special Page" 
    className="w-12 h-12 cursor-pointer hover:scale-110 transition-transform"
  />
</Link>

    </div>
  );
};

export default Home;