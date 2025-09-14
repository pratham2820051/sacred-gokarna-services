import { Card, CardContent } from "@/components/ui/card";
import templeComplex from "@/assets/temple-complex.jpg";
import spiritualOm from "@/assets/spiritual-om.jpg";

const About = () => {
  const priests = [
    {
      name: "Pandit Raghunath Shastri",
      experience: "25+ Years",
      specialization: "Rudrabhisheka & Vedic Rituals",
      description: "Expert in ancient Vedic traditions with deep knowledge of Sanskrit scriptures."
    },
    {
      name: "Pandit Vishnu Bhat",
      experience: "20+ Years", 
      specialization: "Narayan Bali & Ancestral Rituals",
      description: "Specialized in ancestral ceremonies and liberation rituals for departed souls."
    },
    {
      name: "Pandit Gopal Sharma",
      experience: "18+ Years",
      specialization: "Mahamrityunjaya & Healing Rituals",
      description: "Master of healing mantras and protective rituals for health and well-being."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-playfair font-bold text-primary mb-6">
              About Gokarna Pooja Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Preserving ancient traditions and bringing divine blessings to devotees worldwide
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
                The Sacred Legacy of Gokarna
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Gokarna, meaning "Cow's Ear" in Sanskrit, is one of the most sacred pilgrimage 
                  destinations in India. Located on the pristine coast of Karnataka, this holy 
                  town has been a center of spiritual learning and divine worship for over 
                  1500 years.
                </p>
                <p>
                  Our services bridge the gap between ancient traditions and modern accessibility. 
                  We ensure that every ritual is performed with utmost devotion, following the 
                  exact procedures laid down in the Vedic scriptures.
                </p>
                <p>
                  The Mahabaleshwar Temple in Gokarna houses one of the most powerful Shiva 
                  lingas in the country. When you book a pooja through our services, you're 
                  not just participating in a ritual – you're connecting with centuries of 
                  spiritual energy and divine blessings.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={templeComplex} 
                alt="Ancient Gokarna Temple Complex"
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Priests */}
      <section className="py-16 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Our Sacred Priests
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet our learned priests who carry forward the ancient traditions with devotion and expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {priests.map((priest, index) => (
              <Card key={priest.name} className="sacred-card divine-hover">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="text-3xl">🧘‍♂️</div>
                  </div>
                  <h3 className="text-xl font-playfair font-semibold mb-2">
                    {priest.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {priest.experience}
                  </p>
                  <p className="text-sm font-medium text-accent mb-3">
                    {priest.specialization}
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
                Authenticity & Trust
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Vedic Compliance</h3>
                    <p className="text-muted-foreground text-sm">
                      All rituals are performed strictly according to ancient Vedic scriptures 
                      and traditional procedures passed down through generations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Certified Priests</h3>
                    <p className="text-muted-foreground text-sm">
                      Our priests are certified by traditional Vedic institutions and have 
                      decades of experience in performing sacred ceremonies.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Pure Materials</h3>
                    <p className="text-muted-foreground text-sm">
                      We use only the finest organic materials - pure ghee, fresh flowers, 
                      sacred waters, and authentic ingredients for all rituals.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Spiritual Guidance</h3>
                    <p className="text-muted-foreground text-sm">
                      Beyond performing rituals, we provide spiritual guidance and explain 
                      the significance of each ceremony to enhance your understanding.
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
            Our Sacred Mission
          </h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            To make the powerful spiritual energy of Gokarna accessible to devotees worldwide, 
            preserving ancient traditions while embracing modern convenience. We believe that 
            every soul deserves the opportunity to experience divine blessings, regardless of 
            physical distance from this holy land.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;