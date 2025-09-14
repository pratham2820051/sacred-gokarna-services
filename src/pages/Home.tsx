import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, Star, Users, Shield, Clock } from "lucide-react";
import gokarnaHero from "@/assets/gokarna-hero.jpg";
import rudrabhisheka from "@/assets/rudrabhisheka.jpg";
import templeComplex from "@/assets/temple-complex.jpg";

const Home = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "The Rudrabhisheka performed here was truly divine. The priests were knowledgeable and the entire experience was spiritually uplifting.",
      rating: 5
    },
    {
      name: "Rajesh Kumar", 
      location: "Bangalore",
      text: "Excellent service for Narayan Bali ritual. Everything was arranged perfectly and the atmosphere was very peaceful.",
      rating: 5
    },
    {
      name: "Meera Devi",
      location: "Delhi",
      text: "Highly recommended for authentic temple rituals. The staff is very helpful and the ceremonies are performed with utmost devotion.",
      rating: 5
    }
  ];

  const services = [
    {
      title: "Rudrabhisheka",
      description: "Sacred ritual to Lord Shiva with milk, honey, and sacred waters",
      price: "₹2,500",
      image: rudrabhisheka
    },
    {
      title: "Narayan Bali",
      description: "Ancestral ritual for peace and liberation of departed souls",
      price: "₹5,000",
      image: templeComplex
    },
    {
      title: "Tripindi Shraddha",
      description: "Three-generation ancestral ritual for spiritual blessings",
      price: "₹7,500",
      image: templeComplex
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Authentic Rituals",
      description: "Traditional ceremonies performed according to ancient scriptures"
    },
    {
      icon: Users,
      title: "Expert Priests",
      description: "Experienced Brahmin priests with deep spiritual knowledge"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your spiritual needs"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${gokarnaHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-temple opacity-80" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-fade-in-up">
            Book Authentic <span className="text-yellow-300">Gokarna Poojas</span> Online
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Experience divine blessings through sacred rituals performed by expert priests 
            in the holy land of Gokarna
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="btn-divine text-lg px-8 py-4">
              <Link to="/poojas">
                Book Pooja Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
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
              Popular Sacred Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the most sought-after spiritual rituals performed with devotion and authenticity
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
                    <span className="text-2xl font-bold text-primary">
                      {service.price}
                    </span>
                    <Button asChild variant="outline" className="hover:bg-primary hover:text-white">
                      <Link to="/poojas">Book Now</Link>
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
              Why Choose Our Services?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trust, authenticity, and spiritual excellence in every ritual we perform
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
              Devotee Experiences
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from the devotees who have experienced divine blessings through our services
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
            Ready to Experience Divine Blessings?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Book your authentic Gokarna pooja today and connect with the sacred energy of this holy land
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 98765 43210
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;