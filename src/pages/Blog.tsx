
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      title: "Mastering Crypto Trading: Essential Strategies for 2024",
      excerpt: "Discover the most effective trading strategies that are helping our members achieve consistent profits in today's volatile crypto market.",
      date: "January 15, 2024",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop"
    },
    {
      title: "AI Trading Bots: The Future of Automated Investing",
      excerpt: "Learn how our AI-powered trading bots are revolutionizing the way people invest in cryptocurrency with minimal risk and maximum returns.",
      date: "January 12, 2024",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop"
    },
    {
      title: "Portfolio Diversification in the Crypto Space",
      excerpt: "Understand the importance of diversifying your crypto portfolio and how our platform helps you achieve optimal risk management.",
      date: "January 10, 2024",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=250&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold font-general mb-6">
                Trading <span className="text-gradient">Blog</span>
              </h1>
              <p className="text-xl text-gray-300 mb-12">
                Stay updated with the latest insights, strategies, and market analysis from our expert traders.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div key={index} className="glass-card rounded-3xl overflow-hidden hover:border-crypto-green/40 transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="text-sm text-crypto-green mb-3">{post.date}</div>
                    <h3 className="text-xl font-bold font-general text-white mb-4 group-hover:text-crypto-green transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Button variant="outline" className="border-crypto-green text-crypto-green hover:bg-crypto-green hover:text-crypto-dark">
                      Read More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
