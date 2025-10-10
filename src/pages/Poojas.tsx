import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import rudrabhisheka from "@/assets/rudrabhisheka.jpg";
import templeComplex from "@/assets/temple-complex.jpg";
import spiritualOm from "@/assets/spiritual-om.jpg";
import Astrology from "@/assets/Astrology.jpg"
const Poojas = () => {
  const { t } = useTranslation();

  const poojaServices = [
    {
      id: 1,
      title: t('poojas.services.rudrabhisheka.title'),
      description: t('poojas.services.rudrabhisheka.description'),
      price: "₹2,500",
      duration: t('poojas.services.rudrabhisheka.duration'),
      participants: t('poojas.services.rudrabhisheka.participants'),
      image: rudrabhisheka,
      benefits: t('poojas.services.rudrabhisheka.benefits', { returnObjects: true }) || [],
      rating: 4.9
    },
    {
      id: 2,
      title: t('poojas.services.narayanBali.title'),
      description: t('poojas.services.narayanBali.description'),
      price: "₹5,000",
      duration: t('poojas.services.narayanBali.duration'),
      participants: t('poojas.services.narayanBali.participants'),
      image: templeComplex,
      benefits: t('poojas.services.narayanBali.benefits', { returnObjects: true }) || [],
      rating: 4.8
    },
    {
      id: 3,
      title: t('poojas.services.tripindiShraddha.title'),
      description: t('poojas.services.tripindiShraddha.description'),
      price: "₹7,500",
      duration: t('poojas.services.tripindiShraddha.duration'),
      participants: t('poojas.services.tripindiShraddha.participants'),
      image: spiritualOm,
      benefits: t('poojas.services.tripindiShraddha.benefits', { returnObjects: true }) || [],
      rating: 4.9
    },
    {
      id: 4,
      title: t('poojas.services.mahamrityunjaya.title'),
      description: t('poojas.services.mahamrityunjaya.description'),
      price: "₹1,500",
      duration: t('poojas.services.mahamrityunjaya.duration'),
      participants: t('poojas.services.mahamrityunjaya.participants'),
      image: spiritualOm,
      benefits: t('poojas.services.mahamrityunjaya.benefits', { returnObjects: true }) || [],
      rating: 4.7
    },
    {
      id: 5,
      title: t('poojas.services.ganapatiHomam.title'),
      description: t('poojas.services.ganapatiHomam.description'),
      price: "₹3,000",
      duration: t('poojas.services.ganapatiHomam.duration'),
      participants: t('poojas.services.ganapatiHomam.participants'),
      image: templeComplex,
      benefits: t('poojas.services.ganapatiHomam.benefits', { returnObjects: true }) || [],
      rating: 4.8
    },
    {
      id: 6,
      title: t('poojas.services.navagrahaShanti.title'),
      description: t('poojas.services.navagrahaShanti.description'),
      price: "₹4,000",
      duration: t('poojas.services.navagrahaShanti.duration'),
      participants: t('poojas.services.navagrahaShanti.participants'),
      image: rudrabhisheka,
      benefits: t('poojas.services.navagrahaShanti.benefits', { returnObjects: true }) || [],
      rating: 4.6
    },
     {
      id: 7,
      title: t('poojas.services.astrologyService.title'),
      description: t('poojas.services.astrologyService.description'),
      price: "₹2,000",
      duration: t('poojas.services.astrologyService.duration'),
      participants: t('poojas.services.astrologyService.participants'),
      image: Astrology,
      benefits: t('poojas.services.astrologyService.benefits', { returnObjects: true }) || [],
      rating: 4.8
    },
     {
      id: 8,
      title: t('poojas.services.nagaShanti.title'),
      description: t('poojas.services.nagaShanti.description'),
      price: "₹3,500",
      duration: t('poojas.services.nagaShanti.duration'),
      participants: t('poojas.services.nagaShanti.participants'),
      image: spiritualOm,
      benefits: t('poojas.services.nagaShanti.benefits', { returnObjects: true }) || [],
      rating: 4.9
    },
     {
      id: 9,
      title: t('poojas.services.chandiHavana.title'),
      description: t('poojas.services.chandiHavana.description'),
      price: "₹6,000",
      duration: t('poojas.services.chandiHavana.duration'),
      participants: t('poojas.services.chandiHavana.participants'),
      image: rudrabhisheka,
      benefits: t('poojas.services.chandiHavana.benefits', { returnObjects: true }) || [],
      rating: 4.9
    }
    

  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-playfair font-bold text-primary mb-6">
              {t('poojas.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('poojas.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {poojaServices.map((service) => (
              <Card key={service.id} className="sacred-card divine-hover group">
                <div className="aspect-video overflow-hidden rounded-t-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-playfair font-semibold">
                      {service.title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                       {/* <span className="text-sm font-medium">{service.rating}</span> */}
                      
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                     {/*  <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      {service.duration}
                    </div> */}
                   
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2" />
                      {service.participants}
                    </div>
                  </div>

                  {/* Benefits */}
                  {Array.isArray(service.benefits) && service.benefits.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-2 text-primary">{t('poojas.services.keyBenefits')}</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {service.benefits.map((benefit, index) => (
                          <div key={index} className="text-xs text-muted-foreground">
                            • {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    {/* <span className="text-2xl font-bold text-primary">
                      {service.price}
                    </span> */}
                    
                    <Button asChild className="btn-divine">
                      <Link to="/contact">{t('poojas.services.bookNow')}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              {t('poojas.process.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('poojas.process.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {step}
                </div>
                <h3 className="text-lg font-playfair font-semibold mb-2">
                  {t(`poojas.process.step${step}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(`poojas.process.step${step}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
   <section className="py-16 bg-gradient-divine text-white">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-playfair font-bold mb-4">
      {t('poojas.cta.title')}
    </h2>
    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
      {t('poojas.cta.subtitle')}
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {/* Primary Button */}
      <Button
        asChild
        size="lg"
        className="bg-white text-orange-500 font-semibold hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white transition-all duration-300"
      >
        <Link to="/contact">{t('poojas.cta.bookConsultation')}</Link>
      </Button>

      {/* Secondary Button */}
     <Button
  asChild
  size="lg"
  variant="outline"
  className="border-white text-orange-500 font-semibold hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white transition-all duration-300"
>
  <a 
    href="https://wa.me/919901801625"
    target="_blank"
    rel="noopener noreferrer"
  >
    Whatsapp : 9901801625
  </a>
</Button>

    </div>
  </div>
</section>

    </div>
  );
};

export default Poojas;
