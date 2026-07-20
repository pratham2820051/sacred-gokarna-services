import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Video, Globe, Shield, Clock } from "lucide-react";
import { SEO } from "@/components/SEO";

const VirtualPoojaBooking = () => {
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
        "name": "Virtual Pooja Booking",
        "item": "https://narayanabalitripindi.com/virtual-pooja-booking"
      }
    ]
  };

  const features = [
    {
      icon: Video,
      title: "Live Video Call",
      description: "Watch and participate in the pooja via high-quality video call in real-time."
    },
    {
      icon: Globe,
      title: "From Anywhere in the World",
      description: "No travel needed. Join from India, USA, UK, UAE, or any country."
    },
    {
      icon: Shield,
      title: "Same Authentic Ritual",
      description: "The exact same Vedic procedures performed at Gokarna's sacred temples."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Choose a date and time that works with your timezone and schedule."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Virtual Narayana Bali Pooja: Book Online From Anywhere"
        description="Can't travel to Gokarna? Book a virtual Narayana Bali or Tripindi Shraddha pooja by video call, performed by certified priests at the temple."
        keywords="virtual pooja, online pooja booking, virtual narayana bali, remote pooja gokarna, online tripindi shraddha"
        canonical="https://narayanabalitripindi.com/virtual-pooja-booking"
        structuredData={[breadcrumbSchema]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-playfair font-bold text-primary mb-6">
              Virtual Narayana Bali Pooja: Participate From Anywhere
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Can't travel to Gokarna? Participate in authentic Vedic rituals from anywhere in the world through live video call.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-playfair font-bold text-primary mb-6">
            How Virtual Pooja Works
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Our virtual pooja service allows you to participate in the full Narayana Bali, Tripindi Shraddha, or any other ritual remotely. The pooja is performed by our certified priests at the sacred Gokarna temple, and you join via a live video call to take part in the Sankalpa, observe the rituals, and receive blessings.
            </p>
            <p>
              This service is ideal for devotees living abroad or in distant cities who cannot travel to Gokarna. The spiritual merit and efficacy of the ritual remain the same whether you attend in person or virtually.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-primary mb-4">
              Why Choose Virtual Pooja?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-playfair font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-playfair font-bold text-primary mb-8">
            Booking Process
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</span>
              <div>
                <h3 className="font-semibold text-lg">Contact Us</h3>
                <p className="text-muted-foreground">Reach out via WhatsApp or our contact form with your requirements and preferred date.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</span>
              <div>
                <h3 className="font-semibold text-lg">Consultation & Scheduling</h3>
                <p className="text-muted-foreground">Our priest will discuss the ritual details, confirm the date, and guide you on preparation.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</span>
              <div>
                <h3 className="font-semibold text-lg">Join via Video Call</h3>
                <p className="text-muted-foreground">On the scheduled day, join the live video call to participate in the Sankalpa and observe the pooja.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</span>
              <div>
                <h3 className="font-semibold text-lg">Receive Prasad & Documentation</h3>
                <p className="text-muted-foreground">After the ritual, we courier the Prasad and completion certificate to your address.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Rituals */}
      <section className="py-16 bg-gradient-sacred">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-playfair font-bold text-primary mb-8 text-center">
            Rituals Available Virtually
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="sacred-card divine-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-playfair font-semibold mb-2">Narayana Bali</h3>
                <p className="text-sm text-muted-foreground">For souls who died unnatural or untimely deaths.</p>
              </CardContent>
            </Card>
            <Card className="sacred-card divine-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-playfair font-semibold mb-2">Tripindi Shraddha</h3>
                <p className="text-sm text-muted-foreground">For missed annual Shraddha of three generations.</p>
              </CardContent>
            </Card>
            <Card className="sacred-card divine-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-playfair font-semibold mb-2">Nag Bali</h3>
                <p className="text-sm text-muted-foreground">For atonement of Sarpa Dosha (snake-related sins).</p>
              </CardContent>
            </Card>
            <Card className="sacred-card divine-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-playfair font-semibold mb-2">Rudrabhisheka</h3>
                <p className="text-sm text-muted-foreground">Sacred abhisheka of Lord Shiva for blessings and protection.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-divine text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            Book Your Virtual Pooja Today
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            No travel needed. Participate in sacred Gokarna rituals from the comfort of your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-500 font-semibold hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white transition-all duration-300">
              <Link to="/contact">Book Virtual Pooja</Link>
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

export default VirtualPoojaBooking;
