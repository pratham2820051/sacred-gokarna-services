import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import Tripindi from "@/assets/Tripindi.webp";

const TripindiShraddha = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://narayanabalitripindi.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Tripindi Shraddha",
        "item": "https://narayanabalitripindi.com/tripindi-shraddha"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Tripindi Shraddha in Gokarna: Meaning & Full Procedure"
        description="What is Tripindi Shraddha and when is it needed? Learn the meaning, procedure, and booking process for Tripindi Shraddha pooja in Gokarna."
        keywords="tripindi shraddha, tripindi shraddha gokarna, tripindi shraddha meaning, tripindi shraddha procedure, tripindi pooja"
        canonical="https://narayanabalitripindi.com/tripindi-shraddha"
        structuredData={[breadcrumbSchema]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-playfair font-bold text-primary mb-6">
              Tripindi Shraddha Pooja in Gokarna: Meaning, Purpose & Procedure
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A powerful ancestral ritual to honor three generations of forefathers and bring peace to their souls.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-primary mb-6">
                What is Tripindi Shraddha?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Tripindi Shraddha is a sacred Vedic ritual performed to appease the souls of three generations of ancestors (father, grandfather, and great-grandfather). The word "Tripindi" literally means "three pindas" — offerings made to three generations of departed souls.
                </p>
                <p>
                  This ritual is performed when the regular annual Shraddha ceremonies have been missed for three or more consecutive years, or when ancestors are believed to be unsatisfied due to incomplete last rites.
                </p>
                <p>
                  Gokarna is considered one of the most sacred places for performing Tripindi Shraddha, as the divine presence of Lord Mahabaleshwara amplifies the spiritual merit of the ritual.
                </p>
              </div>

              <h2 className="text-3xl font-playfair font-bold text-primary mb-6 mt-10">
                When is Tripindi Shraddha Needed?
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold">•</span>
                  <span>When annual Shraddha has been missed for 3+ years</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold">•</span>
                  <span>When family faces repeated obstacles in career, marriage, or health</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold">•</span>
                  <span>When ancestors' last rites were not performed properly</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold">•</span>
                  <span>When Pitru Dosha is indicated in the horoscope</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold">•</span>
                  <span>When unexplained family discord persists across generations</span>
                </li>
              </ul>

              <h2 className="text-3xl font-playfair font-bold text-primary mb-6 mt-10">
                Procedure
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start space-x-3">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">1</span>
                  <p>Sankalpa and invocation of ancestral deities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">2</span>
                  <p>Preparation of three pindas for three generations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">3</span>
                  <p>Tarpana (water offerings) with Vedic mantras</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">4</span>
                  <p>Brahmin Bhojana (feeding priests as representatives of ancestors)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">5</span>
                  <p>Final prayers and Dakshina for completion of the rite</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <img
                src={Tripindi}
                alt="Tripindi Shraddha Pooja ritual in Gokarna"
                className="rounded-2xl shadow-lg w-full"
              />
              <Card className="sacred-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-4">Benefits of Tripindi Shraddha</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Appeases three generations of ancestors at once</li>
                    <li>• Removes effects of missed annual Shraddha</li>
                    <li>• Resolves Pitru Dosha in the horoscope</li>
                    <li>• Brings family harmony and removes obstacles</li>
                    <li>• Bestows ancestral blessings for future generations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-divine text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            Book Tripindi Shraddha in Gokarna
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Our certified priests perform Tripindi Shraddha at the sacred Gokarna temples with complete Vedic procedures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-500 font-semibold hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white transition-all duration-300">
              <Link to="/contact">Book Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-orange-500 font-semibold hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white transition-all duration-300">
              <a href="https://wa.me/919901801625" target="_blank" rel="noopener noreferrer">
                WhatsApp: 9901801625
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TripindiShraddha;
