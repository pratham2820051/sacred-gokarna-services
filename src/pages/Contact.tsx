import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
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
        title: t('contact.form.requiredFields'),
        description: t('contact.form.requiredDescription'),
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would send data to a server
    toast({
      title: t('contact.form.thankYou'),
      description: t('contact.form.thankYouDescription'),
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
              {t('contact.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('contact.hero.subtitle')}
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
                {t('contact.form.title')}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.form.fullName')}</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.form.phoneNumber')}</label>
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
                  <label className="block text-sm font-medium mb-2">{t('contact.form.emailAddress')}</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.form.poojaType')}</label>
                  <Select value={formData.poojaType} onValueChange={(value) => handleChange("poojaType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('contact.form.selectPooja')} />
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
                  <label className="block text-sm font-medium mb-2">{t('contact.form.preferredDate')}</label>
                  <Input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => handleChange("preferredDate", e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.form.additionalMessage')}</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder={t('contact.form.messagePlaceholder')}
                    rows={4}
                  />
                </div>

                <Button type="submit" className="btn-divine w-full">
                  <Send className="w-4 h-4 mr-2" />
{t('contact.form.sendInquiry')}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-playfair font-bold text-primary mb-6">
                  {t('contact.info.title')}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {t('contact.info.subtitle')}
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
                        <h3 className="font-semibold mb-1">{t('contact.info.call.title')}</h3>
                        <a 
                          href="tel:+919901801625" 
                          className="text-primary hover:underline"
                        >
                          +91 9901801625
                        </a>
                        <p className="text-sm text-muted-foreground">
                          {t('contact.info.call.availability')}
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
                        <h3 className="font-semibold mb-1">{t('contact.info.whatsapp.title')}</h3>
                        <a 
                          href="https://wa.me/919901801625" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          +91 9901801625
                        </a>
                        <p className="text-sm text-muted-foreground">
                          {t('contact.info.whatsapp.description')}
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
                        <h3 className="font-semibold mb-1">{t('contact.info.email.title')}</h3>
                        <a 
                          href="mailto:gokarnapooja9@gmail.com" 
                          className="text-primary hover:underline"
                        >
                          gokarnapooja9@gmail.com
                        </a>
                        <p className="text-sm text-muted-foreground">
                          gokarnapooja9@gmail.com
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
                        <h3 className="font-semibold mb-1">{t('contact.info.address.title')}</h3>
                        <p className="text-muted-foreground text-sm" style={{whiteSpace: 'pre-line'}}>
                          {t('contact.info.address.address')}
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
                        <h3 className="font-semibold mb-1">{t('contact.info.hours.title')}</h3>
                        <p className="text-sm text-muted-foreground" style={{whiteSpace: 'pre-line'}}>
                          {t('contact.info.hours.description')}
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
              {t('contact.map.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('contact.map.subtitle')}
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
              {t('contact.faq.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('contact.faq.subtitle')}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: t('contact.faq.q1.question'),
                answer: t('contact.faq.q1.answer')
              },
              {
                question: t('contact.faq.q2.question'),
                answer: t('contact.faq.q2.answer')
              },
              {
                question: t('contact.faq.q3.question'),
                answer: t('contact.faq.q3.answer')
              },
              {
                question: t('contact.faq.q4.question'),
                answer: t('contact.faq.q4.answer')
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