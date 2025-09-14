import { Card, CardContent } from "@/components/ui/card";
import { Train, Bus, Car, Clock, MapPin, Info } from "lucide-react";

const HowToReach = () => {
  const travelOptions = [
    {
      icon: Train,
      title: "By Train",
      description: "Most convenient way to reach Gokarna",
      details: [
        "Nearest railway station: Gokarna Road (GOK) - 10km from temple",
        "Major trains: Matsyagandha Express, Konkan Kanya Express",
        "Auto-rickshaws and buses available from station to temple",
        "Journey time from Bangalore: 10-12 hours",
        "Journey time from Mumbai: 8-10 hours"
      ]
    },
    {
      icon: Bus,
      title: "By Bus", 
      description: "Regular bus services from major cities",
      details: [
        "State transport buses available from Bangalore, Mumbai, Pune",
        "Private bus operators: Airavat, VRL, SRS Travels",
        "Overnight buses recommended for comfort",
        "Journey time from Bangalore: 8-10 hours",
        "Journey time from Goa: 3-4 hours"
      ]
    },
    {
      icon: Car,
      title: "By Car/Taxi",
      description: "Drive through scenic Western Ghats",
      details: [
        "Well-connected by NH-66 (coastal highway)",
        "Parking available near temple complex",
        "Fuel stations available en route",
        "Scenic drive through coastal Karnataka",
        "GPS coordinates: 14.5426° N, 74.3188° E"
      ]
    }
  ];

  const travelTips = [
    {
      title: "Temple Timings",
      description: "4:30 AM to 12:30 PM & 5:00 PM to 8:30 PM",
      icon: Clock
    },
    {
      title: "Dress Code",
      description: "Traditional attire preferred. Remove footwear before entering",
      icon: Info
    },
    {
      title: "Best Time to Visit",
      description: "October to March for pleasant weather",
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
              How to Reach Gokarna
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your journey to spiritual bliss begins here. Find the best way to reach the sacred land of Gokarna
            </p>
          </div>
        </div>
      </section>

      {/* Travel Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Travel Options
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the most convenient way to reach the divine destination
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
              Temple Location
            </h2>
            <p className="text-muted-foreground">
              Mahabaleshwar Temple, Gokarna, Uttara Kannada, Karnataka
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
              Important Travel Information
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Essential details to make your spiritual journey smooth and meaningful
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
                Accommodation Options
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Temple Guest Houses</h4>
                  <p className="text-sm text-muted-foreground">
                    Simple, clean rooms near the temple. Advance booking recommended during festivals.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Beach Resorts</h4>
                  <p className="text-sm text-muted-foreground">
                    Comfortable stays with sea views. Located 2-3 km from main temple.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Budget Hotels</h4>
                  <p className="text-sm text-muted-foreground">
                    Affordable options in Gokarna town with basic amenities and local food.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-playfair font-bold text-primary mb-6">
                Nearby Sacred Places
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Om Beach</h4>
                  <p className="text-sm text-muted-foreground">
                    Sacred beach shaped like Om symbol, perfect for meditation and spiritual reflection.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Kudle Beach</h4>
                  <p className="text-sm text-muted-foreground">
                    Peaceful beach for evening prayers and watching beautiful sunsets.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Mirjan Fort</h4>
                  <p className="text-sm text-muted-foreground">
                    Historic fort located 22 km away, perfect for a day trip after temple visit.
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
            Need Travel Assistance?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Our team can help you plan your journey and arrange local transportation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919876543210"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-colors"
            >
              Call: +91 98765 43210
            </a>
            <a 
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToReach;