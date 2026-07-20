import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SEO } from "@/components/SEO";

const faqData = [
  {
    question: "What is the difference between Narayana Bali and Nag Bali pooja?",
    answer: "Narayana Bali is performed to help the soul of an ancestor who died an unnatural or untimely death attain peace, while Nag Bali is performed to atone for the sin of killing a snake. The two are traditionally performed together as Narayana-Nagbali."
  },
  {
    question: "How much does a Narayana Bali pooja cost in Gokarna?",
    answer: "Cost depends on the ritual type, priest arrangements, and whether you attend in person or virtually. See our pricing page for a full package breakdown."
  },
  {
    question: "Can Tripindi Shraddha be performed virtually without visiting Gokarna?",
    answer: "Yes. We offer virtual participation via video call, where our certified priests perform the ritual at the Gokarna temple while you take part remotely."
  },
  {
    question: "What are the signs that a family is affected by Pitru Dosha?",
    answer: "Common signs include repeated obstacles in marriage or childbirth, unexplained business or health setbacks, and recurring family discord. These are traditionally linked to unresolved ancestral rites."
  },
  {
    question: "Which is the best time to perform Narayana Bali pooja?",
    answer: "Shukla Paksha Ekadashi and Dwadashi (the bright-fortnight 11th and 12th lunar days) of any Hindu month are considered ideal for this rite."
  },
  {
    question: "How many days are required for Narayana Bali pooja?",
    answer: "The core Narayana Bali ritual typically takes one full day (3-4 hours of active pooja). If combined with Nag Bali, it may extend to 5-6 hours. Some families choose to stay an additional day for temple darshan."
  },
  {
    question: "Do I need to fast before the pooja?",
    answer: "The karta (person performing the ritual on behalf of the family) is typically asked to observe a simple fast on the morning of the pooja. Our priest will provide specific guidance based on the ritual being performed."
  },
  {
    question: "Can women participate in Narayana Bali or Tripindi Shraddha?",
    answer: "Yes, women can be present during the ritual. In cases where the male family member is unavailable, women can also be the karta with the priest's guidance."
  },
  {
    question: "What documents or information do I need to provide?",
    answer: "You will need the name of the deceased ancestor, their relationship to you, and if known, their date of death and the nature of death. Our priest will guide you on what details are needed during the consultation."
  },
  {
    question: "Is there any scientific basis for Pitru Dosha?",
    answer: "Pitru Dosha is a concept rooted in Vedic astrology and Hindu dharma. While it may not have a Western scientific basis, millions of families have reported positive changes in their lives after performing the prescribed ancestral rituals."
  }
];

const FAQ = () => {
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
        "name": "FAQ",
        "item": "https://narayanabalitripindi.com/faq"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Narayana Bali & Tripindi Shraddha FAQ"
        description="Answers to common questions about Narayana Bali pooja, Tripindi Shraddha, Pitru Dosha, cost, timing, and virtual booking in Gokarna."
        keywords="narayana bali faq, tripindi shraddha questions, pitru dosha faq, gokarna pooja questions"
        canonical="https://narayanabalitripindi.com/faq"
        structuredData={[breadcrumbSchema, faqSchema]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-playfair font-bold text-primary mb-6">
              Frequently Asked Questions: Narayana Bali & Tripindi Shraddha
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find answers to the most common questions about our pooja services, procedures, and booking.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-base py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 bg-gradient-sacred">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-playfair font-bold text-primary mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground mb-8">
            Our priests are happy to answer any specific questions about your family's situation and recommend the right ritual.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-divine">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
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

export default FAQ;
