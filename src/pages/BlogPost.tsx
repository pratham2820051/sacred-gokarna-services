import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams();
  const { t } = useTranslation();

  // Fetch blog data from the current language file dynamically
  const blogs = t("blogs.articles", { returnObjects: true }) as any[];
  const currentBlog = blogs.find((blog) => blog.slug === slug);

  if (!currentBlog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            {t("blogs.notFound.title")}
          </h1>
          <Link to="/blogs" className="text-primary hover:underline">
            ← {t("blogs.notFound.back")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link
          to="/blogs"
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          back
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-20">
        {/* Light Orange Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff7b00] via-[#ff8d21] to-[#ffa652]" />
        <div className="absolute inset-0 bg-black/20" /> {/* Light overlay */}

        <div className="relative container mx-auto px-4 text-center text-white max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            {currentBlog.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {currentBlog.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {currentBlog.date}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {currentBlog.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-6">
            <p>{currentBlog.content.intro}</p>
            <p>{currentBlog.content.main}</p>
            {currentBlog.content.sections && (
              <ul className="list-disc pl-6">
                {currentBlog.content.sections.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            )}
            <p>{currentBlog.content.wisdom}</p>
            <p>{currentBlog.content.invitation}</p>
            <p>{currentBlog.content.closing}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
