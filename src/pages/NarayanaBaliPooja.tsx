import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import narayanBali from "@/assets/narayanBali.jpg";

const NarayanaBaliPooja = () => {
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
        "name": "Narayana Bali Pooja",
        "item": "https://narayanabalitripindi.com/narayana-bali-pooja"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Narayana Bali Pooja in Gokarna: Procedure, Cost & Benefits"
        description="Complete guide to Narayana Bali pooja in Gokarna — what it resolves, step-by-step procedure, cost, and how to book with a certified priest."
        keywords="narayana bali pooja, narayana bali gokarna, narayana bali procedure, narayana bali cost, narayan bali pooja benefits"
        canonical="https://narayanabalitripindi.com/narayana-bali-pooja"
        structuredData={[breadcrumbSchema]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-playfair font-bold text-primary mb-6">
              Narayana Bali Pooja in Gokarna
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A sacred Vedic ritual to bring peace to ancestors who met untimely or unnatural deaths, performed by certified priests at Gokarna's holy temples.
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
                What is Narayana Bali Pooja?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Narayana Bali is a sacred Hindu ritual performed to help the souls of ancestors who died an unnatural or untimely death attain moksha (liberation). This pooja is traditionally performed at Gokarna, one of the most sacred kshetras for ancestral rites.
                </p>
                <p>
                  The ritual involves elaborate Vedic procedures including the creation of a symbolic body (pinda), invocation of Lord Narayana, and specific mantras to guide the departed soul towards peace and liberation.
                </p>
                <p>
                  Narayana Bali is recommended when a family member has died due to accidents, suicide, murder, or any unnatural cause, and is believed to remove the ancestral afflictions (Pitru Dosha) that may be affecting the family.
                </p>
              </div>

              <h2 className="text-3xl font-playfair font-bold text-primary mb-6 mt-10">
                Step-by-Step Procedure
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start space-x-3">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">1</span>
                  <p>Sankalpa (sacred vow) taken by the family members</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">2</span>
                  <p>Preparation of the ritual ground and sacred fire (Agni Sthapana)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">3</span>
                  <p>Creation of the symbolic body (Pinda Pradana) representing the departed soul</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">4</span>
                  <p>Invocation of Lord Narayana and recitation of Vedic mantras</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">5</span>
                  <p>Homa (fire ritual) and final offerings for the departed soul's liberation</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <img
                src={narayanBali}
                alt="Narayana Bali Pooja being performed in Gokarna"
                className="rounded-2xl shadow-lg w-full"
              />
              <Card className="sacred-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-4">Key Benefits</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Liberation of ancestral souls from bondage</li>
                    <li>• Removal of Pitru Dosha from the family</li>
                    <li>• Relief from unexplained obstacles in life</li>
                    <li>• Blessings for family prosperity and harmony</li>
                    <li>• Peace and closure for the living family members</li>
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
            Book Narayana Bali Pooja in Gokarna
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Connect with our certified Vedic priests to schedule your Narayana Bali pooja at Gokarna's sacred temples.
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

export default NarayanaBaliPooja;
