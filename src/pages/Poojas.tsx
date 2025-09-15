import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import rudrabhisheka from "@/assets/rudrabhisheka.jpg";
import templeComplex from "@/assets/temple-complex.jpg";
import spiritualOm from "@/assets/spiritual-om.jpg";

const Poojas = () => {
  const poojaServices = [
    {
      id: 1,
      title: "Rudrabhisheka",
      description: "Sacred abhisheka to Lord Shiva with milk, honey, ghee, and sacred waters. Powerful ritual for removing obstacles and bringing prosperity.",
      price: "₹2,500",
      duration: "1.5 Hours",
      participants: "Up to 5 people",
      image: rudrabhisheka,
      benefits: ["Removes negative karma", "Brings prosperity", "Grants peace of mind", "Fulfills desires"],
      rating: 4.9
    },
    {
      id: 2,
      title: "Narayan Bali",
      description: "Essential ritual for the liberation of departed souls and removal of ancestral curses. Performed at the sacred Gokarna beach.",
      price: "₹5,000",
      duration: "3 Hours",
      participants: "Family groups",
      image: templeComplex,
      benefits: ["Liberates departed souls", "Removes ancestral blocks", "Brings family harmony", "Spiritual elevation"],
      rating: 4.8
    },
    {
      id: 3,
      title: "Tripindi Shraddha",
      description: "Three-generation ancestral ritual for those whose shraddha hasn't been performed properly. Ensures peace for ancestors.",
      price: "₹7,500",
      duration: "4 Hours",
      participants: "Family groups",
      image: spiritualOm,
      benefits: ["Peace for ancestors", "Removes pitru dosha", "Family blessings", "Spiritual protection"],
      rating: 4.9
    },
    {
      id: 4,
      title: "Mahamrityunjaya Jap",
      description: "Powerful healing mantra chanting for health, longevity, and protection from negative influences and diseases.",
      price: "₹1,500",
      duration: "2 Hours",
      participants: "Individual/Family",
      image: spiritualOm,
      benefits: ["Health and healing", "Protection from diseases", "Longevity", "Mental peace"],
      rating: 4.7
    },
    {
      id: 5,
      title: "Ganapati Homam",
      description: "Sacred fire ritual to Lord Ganesha for removing obstacles and ensuring success in new ventures and endeavors.",
      price: "₹3,000",
      duration: "2 Hours",
      participants: "Individual/Family",
      image: templeComplex,
      benefits: ["Removes obstacles", "Ensures success", "New venture blessings", "Wisdom and knowledge"],
      rating: 4.8
    },
    {
      id: 6,
      title: "Navagraha Shanti",
      description: "Powerful ritual to appease all nine planets and reduce the malefic effects of planetary positions in horoscope.",
      price: "₹4,000",
      duration: "2.5 Hours",
      participants: "Individual/Family",
      image: rudrabhisheka,
      benefits: ["Planetary peace", "Reduces malefic effects", "Career progress", "Life harmony"],
      rating: 4.6
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-playfair font-bold text-primary mb-6">
              Sacred Poojas & Sevas
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Experience authentic Vedic rituals performed by expert priests in the divine atmosphere of Gokarna
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
                      <span className="text-sm font-medium">{service.rating}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      {service.duration}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2" />
                      {service.participants}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2 text-primary">Key Benefits:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {service.benefits.map((benefit, index) => (
                        <div key={index} className="text-xs text-muted-foreground">
                          • {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {service.price}
                    </span>
                    <Button asChild className="btn-divine">
                      <Link to="/contact">Book Now</Link>
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
              How Our Sacred Process Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple steps to connect with divine blessings through authentic Vedic rituals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-playfair font-semibold mb-2">Choose Service</h3>
              <p className="text-sm text-muted-foreground">
                Select the ritual that aligns with your spiritual needs and intentions
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-playfair font-semibold mb-2">Book & Schedule</h3>
              <p className="text-sm text-muted-foreground">
                Contact us to schedule your pooja at an auspicious time
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-playfair font-semibold mb-2">Sacred Ritual</h3>
              <p className="text-sm text-muted-foreground">
                Expert priests perform the ritual with authentic materials and mantras
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-playfair font-semibold mb-2">Receive Blessings</h3>
              <p className="text-sm text-muted-foreground">
                Get photos, videos, and blessed prasadam delivered to your home
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-divine text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            Ready to Begin Your Spiritual Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Connect with our spiritual consultants to choose the perfect ritual for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                Book Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                WhatsApp: +91 98765 43210
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Poojas;