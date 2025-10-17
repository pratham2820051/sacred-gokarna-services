import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import templeComplex from "@/assets/temple-complex.jpg";
import rudrabhisheka from "@/assets/rudrabhisheka.jpg";
import spiritualOm from "@/assets/spiritual-om.jpg";

const Blogs = () => {
  const { t } = useTranslation();
  const blogPosts = [
    {
      id: 1,
      slug: "narayan-bali-pooja-cost-gokarna",
      title: "Narayan Bali Pooja Cost in Gokarna: Complete Guide 2024",
      excerpt: "Discover the complete cost breakdown, significance, and benefits of Narayan Bali ritual performed at the sacred Gokarna temple.",
      image: templeComplex,
      author: "Pandit Raghunath Shastri",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Rituals"
    },
    {
  id: 2,
  slug: "tripindi-shraddha-meaning-procedure-benefits",
  title: "Tripindi Shraddha – Meaning, Procedure, Importance & Benefits",
  excerpt: "Understand the sacred Vedic ritual Tripindi Shraddha, its significance in releasing unsettled souls, and the benefits of performing it at holy places like Gokarna and Kashi.",
  image: rudrabhisheka, 
  author: "Pandit Vishnu Bhat",
  date: "March 20, 2024",
  readTime: "9 min read",
  category: "Rituals"
},
    {
      id: 3,
      slug: "gokarna-temple-history-significance",
      title: "Gokarna Temple: Ancient History and Spiritual Significance",
      excerpt: "Explore the rich 1500-year history of Mahabaleshwar Temple and understand why Gokarna is considered one of India's holiest places.",
      image: spiritualOm,
      author: "Dr. Gopal Sharma",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "History"
    },
    {
      id: 4,
      slug: "tripindi-shraddha-procedure-benefits",
      title: "Tripindi Shraddha: Complete Procedure and Spiritual Benefits",
      excerpt: "Understanding the significance of this powerful ancestral ritual and its role in removing pitru dosha and bringing family harmony.",
      image: templeComplex,
      author: "Pandit Raghunath Shastri",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "Rituals"
    },
    {
      id: 5,
      slug: "mahamrityunjaya-mantra-healing-power",
      title: "Mahamrityunjaya Mantra: The Healing Power of Ancient Chants",
      excerpt: "Discover how this powerful Vedic mantra brings healing, protection, and spiritual transformation in daily life.",
      image: spiritualOm,
      author: "Pandit Vishnu Bhat",
      date: "February 20, 2024",
      readTime: "6 min read",
      category: "Mantras"
    },
    {
      id: 6,
      slug: "gokarna-travel-guide-devotees",
      title: "Gokarna Travel Guide for Devotees: Sacred Sites and Rituals",
      excerpt: "Complete travel guide covering temple visits, sacred beaches, local customs, and spiritual experiences in Gokarna.",
      image: templeComplex,
      author: "Travel Team",
      date: "February 15, 2024",
      readTime: "12 min read",
      category: "Travel"
    }
  ];

  const categories = [
    t('blogs.categories.all'),
    t('blogs.categories.rituals'),
    t('blogs.categories.timing'),
    t('blogs.categories.history'),
    t('blogs.categories.mantras'),
    t('blogs.categories.travel')
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-playfair font-bold text-primary mb-6">
              {t('blogs.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('blogs.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === t('blogs.categories.all') 
                    ? "bg-primary text-white" 
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="sacred-card divine-hover group overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-playfair font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary text-sm font-medium hover:text-primary/80 transition-colors group-hover:translate-x-1 transition-transform"
                    >
{t('blogs.readMore')}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-divine text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-playfair font-bold mb-4">
              {t('blogs.newsletter.title')}
            </h2>
            <p className="text-white/90 mb-8">
              {t('blogs.newsletter.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              
              
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Popular Topics
            </h2>
            <p className="text-muted-foreground">
              Explore the most sought-after spiritual knowledge and ritual guidance
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Rudrabhisheka Benefits",
              "Gokarna Temple Timings", 
              "Narayan Bali Procedure",
              "Pitru Dosha Remedies",
              "Mahamrityunjaya Jap",
              "Temple Travel Guide",
              "Ancestral Rituals",
              "Spiritual Healing"
            ].map((topic, index) => (
              <div key={topic} className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium text-sm text-primary">
                  {topic}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;