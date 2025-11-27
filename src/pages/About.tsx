import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import templeComplex from "@/assets/temple-complex.jpg";
import spiritualOm from "@/assets/spiritual-om.jpg";
import panditPhoto from "@/assets/panditPhoto.jpeg"
import templePhoto from "@/assets/temple.jpeg"
const About = () => {
  const { t } = useTranslation();
  const priests = [
    {
      name: "Ganapati Bhat",
      experience: "15+ Year",
      description: "Expert priest with traditional Vedic knowledge."
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-playfair font-bold text-primary mb-6">
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
                {t('about.story.title')}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t('about.story.paragraph1')}</p>
                <p>{t('about.story.paragraph2')}</p>
                <p>{t('about.story.paragraph3')}</p>
              </div>
            </div>
            
            
            <div className="relative">
              <img
                src={templePhoto}
                alt="Ancient Gokarna Temple Complex"
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Why Choose Us?
            </h2>
          </div>
          <div className="max-w-4xl mx-auto text-muted-foreground space-y-4 text-center">
            <p>Wide range of Pujas, Havans, Homas and Yagyas performed by experienced Vedjis.</p>
            <p>Deep knowledge and understanding of all religious Hindu scriptures.</p>
            <p>Years of experience in performing complicated and complex religious Hindu rituals.</p>
            <p>Devotees can perform the rituals at a place convenient to them.</p>
            <p>Specialized in Shraadha Karma, Pitra Dosh, Gana Havana, Narayan Bali Pujas.</p>
          </div>
        </div>
      </section>

      {/* Our Priests */}
      <section className="py-16 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              {t('about.priests.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('about.priests.subtitle')}
            </p>
          </div>

          <div className="flex justify-center">
            {priests.map((priest) => (
              <Card key={priest.name} className="sacred-card divine-hover max-w-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src={panditPhoto}
                      alt="Pandit"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-playfair font-semibold mb-2">
                    {priest.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {priest.experience}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {priest.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Authenticity & Trust */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={spiritualOm}
                alt="Sacred Om symbol with divine lighting"
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 rounded-2xl"></div>
            </div>
            <div>
              <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
                {t('about.authenticity.title')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t('about.authenticity.vedicCompliance.title')}</h3>
                    <p className="text-muted-foreground text-sm">
                      {t('about.authenticity.vedicCompliance.description')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t('about.authenticity.certifiedPriests.title')}</h3>
                    <p className="text-muted-foreground text-sm">
                      {t('about.authenticity.certifiedPriests.description')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t('about.authenticity.pureMaterials.title')}</h3>
                    <p className="text-muted-foreground text-sm">
                      {t('about.authenticity.pureMaterials.description')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t('about.authenticity.spiritualGuidance.title')}</h3>
                    <p className="text-muted-foreground text-sm">
                      {t('about.authenticity.spiritualGuidance.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-divine text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-6">
            {t('about.mission.title')}
          </h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            {t('about.mission.description')}
          </p>
        </div>
      </section>
    </div>
  );
};


export default About;
