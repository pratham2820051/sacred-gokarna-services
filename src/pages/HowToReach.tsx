import { Card, CardContent } from "@/components/ui/card";
import { Train, Bus, Car, Clock, MapPin, Info } from "lucide-react";
import { useTranslation } from "react-i18next";

const HowToReach = () => {
  const { t } = useTranslation();
  const travelOptions = [
    {
      icon: Train,
      title: t('howToReach.travel.byTrain.title'),
      description: t('howToReach.travel.byTrain.description'),
      details: t('howToReach.travel.byTrain.details', { returnObjects: true })
    },
    {
      icon: Bus,
      title: t('howToReach.travel.byBus.title'),
      description: t('howToReach.travel.byBus.description'),
      details: t('howToReach.travel.byBus.details', { returnObjects: true })
    },
    {
      icon: Car,
      title: t('howToReach.travel.byCar.title'),
      description: t('howToReach.travel.byCar.description'),
      details: t('howToReach.travel.byCar.details', { returnObjects: true })
    }
  ];

  const travelTips = [
    {
      title: t('howToReach.travelInfo.templeTimings.title'),
      description: t('howToReach.travelInfo.templeTimings.description'),
      icon: Clock
    },
    {
      title: t('howToReach.travelInfo.dressCode.title'),
      description: t('howToReach.travelInfo.dressCode.description'),
      icon: Info
    },
    {
      title: t('howToReach.travelInfo.bestTime.title'),
      description: t('howToReach.travelInfo.bestTime.description'),
      icon: MapPin
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-playfair font-bold text-primary mb-6">
              {t('howToReach.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('howToReach.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Travel Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              {t('howToReach.travel.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('howToReach.travel.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {travelOptions.map((option, index) => (
              <Card key={option.title} className="sacred-card divine-hover">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <option.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-playfair font-semibold">
                        {option.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {option.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {option.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              {t('howToReach.location.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('howToReach.location.address')}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.8751833333333!2d74.31683931484375!3d14.542580289862842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbc0b5c5b5b5b%3A0x1234567890abcdef!2sMahabaleshwar%20Temple%2C%20Gokarna!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gokarna Temple Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              {t('howToReach.travelInfo.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('howToReach.travelInfo.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {travelTips.map((tip, index) => (
              <Card key={tip.title} className="sacred-card text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <tip.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-playfair font-semibold mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {tip.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation & Nearby Places */}
      <section className="py-16 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-primary mb-6">
                {t('howToReach.accommodation.title')}
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">{t('howToReach.accommodation.templeGuest.title')}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t('howToReach.accommodation.templeGuest.description')}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">{t('howToReach.accommodation.beachResorts.title')}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t('howToReach.accommodation.beachResorts.description')}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">{t('howToReach.accommodation.budgetHotels.title')}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t('howToReach.accommodation.budgetHotels.description')}
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-playfair font-bold text-primary mb-6">
                {t('howToReach.nearbyPlaces.title')}
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">{t('howToReach.nearbyPlaces.omBeach.title')}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t('howToReach.nearbyPlaces.omBeach.description')}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">{t('howToReach.nearbyPlaces.kudleBeach.title')}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t('howToReach.nearbyPlaces.kudleBeach.description')}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">{t('howToReach.nearbyPlaces.mirjanFort.title')}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t('howToReach.nearbyPlaces.mirjanFort.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Travel Help */}
   <section className="py-16 bg-gradient-divine text-white">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-playfair font-bold mb-4">
      {t('howToReach.travelAssistance.title')}
    </h2>
    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
      {t('howToReach.travelAssistance.subtitle')}
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {/* Call Button */}
      <a 
        href="tel:+919876543210"
        className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-500 rounded-full font-semibold hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white transition-all duration-300"
      >
        {t('howToReach.travelAssistance.call')}
      </a>

      {/* WhatsApp Button */}
    <a 
  href="https://wa.me/919876543210"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-500 rounded-full font-semibold hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white transition-all duration-300"
>
  {t('howToReach.travelAssistance.whatsapp')}
</a>

    </div>
  </div>
</section>


    </div>
  );
};

export default HowToReach;