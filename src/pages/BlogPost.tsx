import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import narayanBali from "@/assets/narayanBali.jpg";
import templeComplex from "@/assets/temple-complex.jpg";
import rudrabhisheka from "@/assets/rudrabhisheka.jpg";
import spiritualOm from "@/assets/spiritual-om.jpg";
import Astrology from "@/assets/Astrology.jpg";
import mahabaleshwar from "@/assets/mahabaleshwar.jpg";
import Tripindi from "@/assets/Tripindi.png";

const imageMap: Record<string, string> = {
  "narayanBali.jpg": narayanBali,
  "temple-complex.jpg": templeComplex,
  "rudrabhisheka.jpg": rudrabhisheka,
  "spiritual-om.jpg": spiritualOm,
  "Astrology.jpg": Astrology,
  "mahabaleshwar.jpg": mahabaleshwar,
  "Tripindi.png": Tripindi,
};

const BlogPost = () => {
  const { slug } = useParams();
  const { t } = useTranslation();

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

  const isStructured = currentBlog.content?.type === "structured";

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

      {/* Hero */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff7b00] via-[#ff8d21] to-[#ffa652]" />
        <div className="absolute inset-0 bg-black/20" />
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
          {isStructured ? (
            <StructuredContent content={currentBlog.content} imageMap={imageMap} />
          ) : (
            <LegacyContent content={currentBlog.content} />
          )}
        </div>
      </section>
    </div>
  );
};

/* ── Structured renderer (new format) ── */
const StructuredContent = ({ content, imageMap }: { content: any; imageMap: Record<string, string> }) => (
  <div className="space-y-8 text-gray-800 leading-relaxed">

    {/* Featured Image */}
    {content.featuredImage && imageMap[content.featuredImage] && (
      <div className="rounded-xl overflow-hidden shadow-md">
        <img
          src={imageMap[content.featuredImage]}
          alt="Narayana Bali Pooja in Gokarna"
          className="w-full h-72 object-cover"
        />
      </div>
    )}

    {/* Intro */}
    <p className="text-lg">{content.intro}</p>
    {content.introSub && <p className="text-lg">{content.introSub}</p>}

    {/* Named sections */}
    {content.namedSections?.map((section: any, i: number) => (
      <div key={i} className="space-y-3">
        <h2 className="text-2xl font-playfair font-bold text-primary">
          {section.heading}
        </h2>

        {section.body && <p>{section.body}</p>}

        {/* Internal SEO link */}
        {section.internalLink && (
          <p>
            <Link
              to={section.internalLink.to}
              className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80 transition-colors"
            >
              {section.internalLink.text}
            </Link>
          </p>
        )}

        {section.subHeading && (
          <p className="font-semibold">{section.subHeading}</p>
        )}

        {/* Bullet list */}
        {section.bullets && (
          <ul className="list-disc pl-6 space-y-1">
            {section.bullets.map((b: string, j: number) => (
              <li key={j}>{b}</li>
            ))}
          </ul>
        )}

        {/* Numbered steps */}
        {section.steps && (
          <ol className="space-y-3 pl-2">
            {section.steps.map((step: any, j: number) => (
              <li key={j} className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                  {j + 1}
                </span>
                <div>
                  <span className="font-semibold">{step.title}: </span>
                  {step.desc}
                </div>
              </li>
            ))}
          </ol>
        )}

        {/* Note */}
        {section.note && (
          <p className="italic text-muted-foreground border-l-4 border-primary/40 pl-4">
            {section.note}
          </p>
        )}

        {/* FAQs */}
        {section.faqs && (
          <div className="space-y-4">
            {section.faqs.map((faq: any, j: number) => (
              <div key={j}>
                <p className="font-semibold">
                  {j + 1}. {faq.q}
                </p>
                <p className="text-muted-foreground pl-4">{faq.a}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    ))}

    {/* CTA */}
    {content.cta && (
      <div className="mt-10 p-6 bg-primary/5 border border-primary/20 rounded-xl space-y-3">
        <h2 className="text-2xl font-playfair font-bold text-primary">
          {content.cta.heading}
        </h2>
        <p>{content.cta.body}</p>
        {content.cta.lines?.map((line: string, i: number) => (
          <p key={i} className="font-medium">
            {line}
          </p>
        ))}
        <div className="pt-2">
          <Link
            to="/contact"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    )}
  </div>
);

/* ── Legacy renderer (existing blogs) ── */
const LegacyContent = ({ content }: { content: any }) => (
  <div className="prose prose-lg max-w-none space-y-6">
    <p>{content.intro}</p>
    <p>{content.main}</p>
    {content.sections && (
      <ul className="list-disc pl-6">
        {content.sections.map((s: string, i: number) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    )}
    <p>{content.wisdom}</p>
    <p>{content.invitation}</p>
    <p>{content.closing}</p>
  </div>
);

export default BlogPost;
