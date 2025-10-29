import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import templeComplex from "@/assets/temple-complex.jpg";
import rudrabhisheka from "@/assets/rudrabhisheka.jpg";
import spiritualOm from "@/assets/spiritual-om.jpg";
import Astrology from "@/assets/Astrology.jpg";
const Blogs = () => {
  const { t } = useTranslation();

  // Get blog articles from i18next JSON
  const blogPosts = t("blogs.articles", { returnObjects: true }) as any[]; 
  
const imageMap: Record<string, string> = {
  "temple-complex.jpg": templeComplex,
  "rudrabhisheka.jpg": rudrabhisheka,
  "spiritual-om.jpg": spiritualOm,
  "Astrology.jpg": Astrology
};

  const categories = [
    t('blogs.categories.all'),
    t('blogs.categories.rituals'),
    t('blogs.categories.timing'),
    t('blogs.categories.history'),
    t('blogs.categories.mantras'),
    t('blogs.categories.travel')
  ] ;

  

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
            {blogPosts.map((post: any, index: number) => (
              <Card key={index} className="sacred-card divine-hover group overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={imageMap[post.image]} 
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
                      {/* <Calendar className="w-3 h-3" /> */}
                      {/* <span>{post.date}</span> */}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {/* {post.readTime} */}
                      
                    </span>
                    <Link
  to={`/blog/${post.slug}`}
  className="inline-flex items-center text-primary text-sm font-medium hover:text-primary/80 group-hover:translate-x-1 transition-all duration-200"
>

                      {t('blogs.readMore')} <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
