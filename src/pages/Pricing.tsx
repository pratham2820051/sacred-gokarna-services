import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { SEO } from "@/components/SEO";

const Pricing = () => {
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
        "name": "Pricing",
        "item": "https://narayanabalitripindi.com/pricing"
      }
    ]
  };

  const packages = [
    {
      name: "Narayana Bali",
      description: "For souls who met untimely or unnatural deaths",
      features: [
        "Complete Narayana Bali ritual by certified priest",
        "All pooja materials included",
        "Sankalpa and Homa",
        "Pinda Pradana at sacred spot",
        "Post-ritual guidance",
        "Completion certificate"
      ],
      note: "Duration: 3-4 hours"
    },
    {
      name: "Tripindi Shraddha",
      description: "For missed annual Shraddha of three generations",
      features: [
        "Complete Tripindi Shraddha ritual",
        "All pooja materials included",
        "Tarpana for three generations",
        "Brahmin Bhojana",
        "Post-ritual guidance",
        "Completion certificate"
      ],
      note: "Duration: 2-3 hours"
    },
    {
      name: "Narayana Bali + Nag Bali",
      description: "Combined ritual for complete ancestral peace",
      features: [
        "Full Narayana Bali procedure",
        "Full Nag Bali procedure",
        "All pooja materials included",
        "Combined Homa and offerings",
        "Post-ritual guidance",
        "Completion certificate"
      ],
      note: "Duration: 5-6 hours",
      popular: true
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Narayana Bali Pooja Cost in Gokarna: Full Pricing"
        description="Transparent pricing for Narayana Bali, Tripindi Shraddha and Nag Bali pooja in Gokarna — in-person and virtual packages explained."
        keywords="narayana bali cost, narayana bali price gokarna, tripindi shraddha cost, pooja pricing gokarna"
        canonical="https://narayanabalitripindi.com/pricing"
        structuredData={[breadcrumbSchema]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-playfair font-bold text-primary mb-6">
              Narayana Bali & Tripindi Shraddha Pooja Cost in Gokarna
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transparent pricing with no hidden charges. All materials, priest fees, and temple arrangements included.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <Card key={pkg.name} className={`sacred-card relative ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-bold mb-2">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-muted-foreground mb-4">{pkg.note}</p>

                  <Button asChild className="w-full btn-divine">
                    <Link to="/contact">Enquire & Book</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Option */}
      <section className="py-16 bg-gradient-sacred">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-playfair font-bold text-primary mb-4">
              Virtual Pooja Packages
            </h2>
            <p className="text-muted-foreground">
              All the above rituals are also available virtually via live video call. Virtual packages include the same complete ritual performed at the Gokarna temple, with Prasad couriered to your address.
            </p>
          </div>
          <div className="text-center">
            <Button asChild size="lg" className="btn-divine">
              <Link to="/virtual-pooja-booking">Learn About Virtual Pooja</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-playfair font-bold text-primary mb-6">
            Important Information
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              • Exact pricing depends on the specific ritual requirements, number of days, and any additional ceremonies. Contact us for a personalized quote.
            </p>
            <p>
              • All prices include pooja materials (samagri), priest fees, temple arrangements, and Dakshina.
            </p>
            <p>
              • For in-person visits, accommodation and travel arrangements can be assisted separately.
            </p>
            <p>
              • Payment can be made via UPI, bank transfer, or cash. Advance booking with partial payment is recommended.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-divine text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            Get a Custom Quote
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Every family's needs are unique. Contact us for a personalized quote based on your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-500 font-semibold hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white transition-all duration-300">
              <Link to="/contact">Get Quote</Link>
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

export default Pricing;
