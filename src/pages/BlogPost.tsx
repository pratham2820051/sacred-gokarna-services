import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import templeComplex from "@/assets/temple-complex.jpg";

const BlogPost = () => {
  const { slug } = useParams();

  // Sample blog data - in a real app, this would come from an API
  const blogData = {
    "narayan-bali-pooja-cost-gokarna": {
      title: "Narayan Bali Pooja Cost in Gokarna: Complete Guide 2024",
      author: "Pandit Raghunath Shastri",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: templeComplex,
      content: `
        <p>Narayan Bali is one of the most important and powerful rituals performed in Gokarna for the liberation of departed souls and removal of ancestral curses. This comprehensive guide will help you understand the complete cost structure and significance of this sacred ceremony.</p>

        <h2>What is Narayan Bali?</h2>
        <p>Narayan Bali is a sacred Vedic ritual performed for the peace and liberation of departed souls, especially those who died unnatural deaths or whose last rites were not performed properly. The ritual helps in removing pitru dosha (ancestral curse) and brings peace to the entire family lineage.</p>

        <h2>Cost Breakdown for Narayan Bali in Gokarna</h2>
        <h3>Basic Narayan Bali Package: ₹5,000</h3>
        <ul>
          <li>Priest dakshina and guidance</li>
          <li>Basic ritual materials (rice, sesame, water)</li>
          <li>Simple offerings and flowers</li>
          <li>Sacred fire ceremony</li>
        </ul>

        <h3>Premium Package: ₹8,000</h3>
        <ul>
          <li>All basic package inclusions</li>
          <li>Enhanced ritual materials and decorations</li>
          <li>Photography and video documentation</li>
          <li>Prasadam distribution</li>
          <li>Certificate of ritual completion</li>
        </ul>

        <h3>Comprehensive Package: ₹12,000</h3>
        <ul>
          <li>All premium package inclusions</li>
          <li>Extended ritual with additional mantras</li>
          <li>Special offerings including fruits and sweets</li>
          <li>Post-ritual consultation and guidance</li>
          <li>Blessed items shipped to your home</li>
        </ul>

        <h2>Additional Costs to Consider</h2>
        <p>Apart from the ritual cost, devotees should budget for:</p>
        <ul>
          <li>Travel expenses to Gokarna</li>
          <li>Accommodation (₹1,000 - ₹5,000 per night)</li>
          <li>Food and local transportation</li>
          <li>Optional donations to the temple</li>
        </ul>

        <h2>Best Time to Perform Narayan Bali</h2>
        <p>The ritual can be performed throughout the year, but certain periods are considered more auspicious:</p>
        <ul>
          <li>During Pitru Paksha (Ancestral fortnight)</li>
          <li>On new moon days (Amavasya)</li>
          <li>During Mahalaya period</li>
          <li>On death anniversaries of ancestors</li>
        </ul>

        <h2>Benefits of Narayan Bali</h2>
        <p>Regular performance of Narayan Bali brings numerous spiritual and material benefits:</p>
        <ul>
          <li>Liberation of departed souls</li>
          <li>Removal of pitru dosha from horoscope</li>
          <li>Peace and harmony in family relationships</li>
          <li>Protection from negative energies</li>
          <li>Blessings for prosperity and success</li>
        </ul>

        <h2>How to Book Narayan Bali in Gokarna</h2>
        <p>Booking your Narayan Bali ritual is simple:</p>
        <ol>
          <li>Contact our spiritual consultants</li>
          <li>Provide your details and preferred dates</li>
          <li>Choose your preferred package</li>
          <li>Make advance payment to confirm booking</li>
          <li>Receive detailed instructions and guidance</li>
        </ol>

        <p>For bookings and more information, contact us at +91 98765 43210 or WhatsApp us for instant assistance.</p>
      `
    }
  };

  const currentBlog = blogData[slug as keyof typeof blogData];

  if (!currentBlog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Blog Post Not Found</h1>
          <Link to="/blogs" className="text-primary hover:underline">
            ← Back to Blogs
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
          Back to Blogs
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentBlog.image})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              {currentBlog.title}
            </h1>
            
            {/* Meta Information */}
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
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Share Buttons */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </Button>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: currentBlog.content }}
            />

            {/* CTA Section */}
            <div className="mt-12 p-8 bg-gradient-sacred rounded-2xl text-center">
              <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
                Ready to Book Your Ritual?
              </h3>
              <p className="text-muted-foreground mb-6">
                Connect with our expert priests for personalized guidance and booking assistance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-divine">
                  <Link to="/contact">Book Consultation</Link>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                    WhatsApp: +91 98765 43210
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-primary mb-4">
              Related Articles
            </h2>
            <p className="text-muted-foreground">
              Continue your spiritual learning journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              "Best Time for Rudrabhisheka in Gokarna",
              "Tripindi Shraddha: Complete Procedure",
              "Gokarna Temple: History and Significance"
            ].map((title, index) => (
              <div key={title} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-playfair font-semibold mb-2 text-primary">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Discover more about this important spiritual topic...
                </p>
                <Link 
                  to="/blogs" 
                  className="text-primary text-sm font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;