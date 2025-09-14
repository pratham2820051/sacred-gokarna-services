import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    poojaType: "",
    preferredDate: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.poojaType) {
      toast({
        title: "Please fill in required fields",
        description: "Name, phone, and pooja type are required.",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would send data to a server
    toast({
      title: "🙏 Thank you for your inquiry!",
      description: "Our priests will contact you within 24 hours to discuss your requirements.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      poojaType: "",
      preferredDate: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const poojaOptions = [
    "Rudrabhisheka",
    "Narayan Bali",
    "Tripindi Shraddha", 
    "Mahamrityunjaya Jap",
    "Ganapati Homam",
    "Navagraha Shanti",
    "General Consultation"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-playfair font-bold text-primary mb-6">
              Contact Our Sacred Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to begin your spiritual journey? Connect with our expert priests for personalized guidance
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-playfair font-bold text-primary mb-6">
                Book Your Spiritual Consultation
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Pooja/Service Type *</label>
                  <Select value={formData.poojaType} onValueChange={(value) => handleChange("poojaType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the ritual you're interested in" />
                    </SelectTrigger>
                    <SelectContent>
                      {poojaOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Date</label>
                  <Input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => handleChange("preferredDate", e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your specific requirements, family details, or any questions you have..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="btn-divine w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Inquiry
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-playfair font-bold text-primary mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our dedicated team is here to assist you with all your spiritual needs. 
                  Contact us through any of the following channels:
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="sacred-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Call Us</h3>
                        <a 
                          href="tel:+919876543210" 
                          className="text-primary hover:underline"
                        >
                          +91 98765 43210
                        </a>
                        <p className="text-sm text-muted-foreground">
                          Available 24/7 for spiritual guidance
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="sacred-card divine-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">WhatsApp</h3>
                        <a 
                          href="https://wa.me/919876543210" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          +91 98765 43210
                        </a>
                        <p className="text-sm text-muted-foreground">
                          Instant messaging and quick responses
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="sacred-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a 
                          href="mailto:info@gokarnapoojas.com" 
                          className="text-primary hover:underline"
                        >
                          info@gokarnapoojas.com
                        </a>
                        <p className="text-sm text-muted-foreground">
                          Detailed inquiries and documentation
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="sacred-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Temple Address</h3>
                        <p className="text-muted-foreground text-sm">
                          Mahabaleshwar Temple Complex<br />
                          Gokarna, Uttara Kannada<br />
                          Karnataka - 581326, India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="sacred-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Service Hours</h3>
                        <p className="text-sm text-muted-foreground">
                          Temple: 4:30 AM - 12:30 PM & 5:00 PM - 8:30 PM<br />
                          Support: 24/7 available
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-playfair font-bold text-primary mb-4">
              Find Us at Sacred Gokarna
            </h2>
            <p className="text-muted-foreground">
              Located in the heart of Gokarna's spiritual district
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

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How far in advance should I book a ritual?",
                answer: "We recommend booking at least 7-10 days in advance to ensure availability and proper preparation. For major festivals or auspicious days, book 2-3 weeks ahead."
              },
              {
                question: "Can I participate in the ritual remotely?",
                answer: "Yes! We offer live streaming for devotees who cannot be physically present. You'll receive photos, videos, and blessed prasadam delivered to your home."
              },
              {
                question: "What should I bring for the ritual?",
                answer: "We provide all necessary materials. You only need to bring your devotion and any specific offerings you wish to make. We'll guide you on any special requirements."
              },
              {
                question: "Are there any restrictions on who can participate?",
                answer: "Our rituals are open to all devotees regardless of background. Some specific rituals may have traditional requirements, which we'll explain during booking."
              }
            ].map((faq, index) => (
              <Card key={index} className="sacred-card">
                <CardContent className="p-6">
                  <h3 className="font-playfair font-semibold text-lg mb-3 text-primary">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;