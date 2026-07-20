import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";

const PitruDoshaRemedies = () => {
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
        "name": "Pitru Dosha Remedies",
        "item": "https://narayanabalitripindi.com/pitru-dosha-remedies"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Pitru Dosha Remedies: Symptoms & Pooja Solutions"
        description="Signs of Pitru Dosha and how Narayana Bali or Tripindi Shraddha pooja in Gokarna can resolve it. Learn causes, symptoms, and remedies."
        keywords="pitru dosha, pitru dosha remedies, pitru dosha symptoms, pitru dosha nivaran, pitru dosh pooja gokarna"
        canonical="https://narayanabalitripindi.com/pitru-dosha-remedies"
        structuredData={[breadcrumbSchema]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-playfair font-bold text-primary mb-6">
              Pitru Dosha Symptoms & Remedies: Narayana Bali and Tripindi Shraddha
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Understand the signs of ancestral afflictions and discover the Vedic rituals that resolve them.
            </p>
          </div>
        </div>
      </section>

      {/* What is Pitru Dosha */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-playfair font-bold text-primary mb-6">
            What is Pitru Dosha?
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Pitru Dosha is an astrological condition that occurs when ancestors' souls are not at peace due to incomplete last rites, unnatural deaths, or neglected annual Shraddha ceremonies. It is reflected in the horoscope when Rahu or Ketu conjuncts with the Sun or Moon in specific houses.
            </p>
            <p>
              This ancestral affliction is believed to create obstacles across generations, affecting health, wealth, relationships, and overall family well-being until the appropriate remedial rituals are performed.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-16 bg-gradient-sacred">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-playfair font-bold text-primary mb-8">
            Common Symptoms of Pitru Dosha
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="sacred-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Marriage & Relationships</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Repeated delays or obstacles in marriage</li>
                  <li>• Frequent marital discord without clear cause</li>
                  <li>• Broken engagements or failed relationships</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="sacred-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Health & Childbirth</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Unexplained or chronic health issues in family</li>
                  <li>• Difficulty conceiving or repeated miscarriages</li>
                  <li>• Children facing developmental challenges</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="sacred-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Career & Finance</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Repeated business failures despite effort</li>
                  <li>• Sudden financial losses or debts</li>
                  <li>• Stagnation in career growth</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="sacred-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Family & Well-being</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Recurring family conflicts across generations</li>
                  <li>• Unexplained fear, anxiety, or nightmares</li>
                  <li>• Feeling of being cursed or blocked</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Remedies */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-playfair font-bold text-primary mb-8">
            Vedic Remedies for Pitru Dosha
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-playfair font-semibold mb-2">Narayana Bali Pooja</h3>
              <p className="text-muted-foreground">
                Performed when an ancestor died an unnatural or untimely death. This ritual invokes Lord Narayana to guide the departed soul to liberation, thereby removing the Pitru Dosha from the family lineage.
              </p>
              <Link to="/narayana-bali-pooja" className="text-primary font-medium inline-block mt-2 hover:underline">
                Learn more about Narayana Bali →
              </Link>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-playfair font-semibold mb-2">Tripindi Shraddha</h3>
              <p className="text-muted-foreground">
                Performed when annual Shraddha ceremonies have been missed for three or more years. This ritual appeases three generations of ancestors simultaneously, restoring the flow of ancestral blessings.
              </p>
              <Link to="/tripindi-shraddha" className="text-primary font-medium inline-block mt-2 hover:underline">
                Learn more about Tripindi Shraddha →
              </Link>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-playfair font-semibold mb-2">Nag Bali</h3>
              <p className="text-muted-foreground">
                Performed to atone for the sin of killing a snake (Sarpa Dosha), which is closely linked to Pitru Dosha. Often performed together with Narayana Bali as Narayana-Nagbali.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-divine text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            Get a Free Consultation for Pitru Dosha
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Speak with our experienced priests to understand your family's situation and get the right remedy recommendation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-500 font-semibold hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white transition-all duration-300">
              <Link to="/contact">Get Consultation</Link>
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

export default PitruDoshaRemedies;
