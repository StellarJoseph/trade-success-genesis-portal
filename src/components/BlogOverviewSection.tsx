import { Button } from '@/components/ui/button';

const BlogOverviewSection = () => {
  const articles = [
    {
      date: "December 21, 2024",
      title: "Advanced Trading Strategies for Maximum ROI",
      description: "Learn the proven strategies our top traders use to consistently generate 25%+ monthly returns in volatile markets.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop"
    },
    {
      date: "December 20, 2024",
      title: "Portfolio Diversification in Crypto Markets",
      description: "Discover how to build a balanced crypto portfolio that performs well across different market conditions and cycles.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop"
    },
    {
      date: "December 19, 2024",
      title: "AI-Powered Signal Analysis Explained",
      description: "Behind the scenes look at how our AI algorithms process market data to generate high-accuracy trading signals.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-crypto-green text-sm font-semibold mb-4 tracking-wider">BLOGPOSTS</div>
          <h2 className="text-4xl md:text-5xl font-bold font-general mb-6 text-white">
            News & <span className="text-[#73E212]">Articles</span>
          </h2>
          <div className="flex justify-center">
            <Button 
              variant="outline"
              className="border-crypto-green text-black hover:bg-crypto-green hover:text-crypto-dark"
            >
              All Articles
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl overflow-hidden hover:border-crypto-green/40 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                {/* Base Dashboard Layer */}
                <img 
                  src="/lovable-uploads/a93107c7-1fcf-47a7-9819-4f36b8aa8aac.png"
                  alt="Dashboard Background"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                {/* Animated Screenshot Overlay */}
                <img 
                  src={article.image}
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover animate-slide-up-down group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="text-crypto-green text-sm mb-3">{article.date}</div>
                <h3 className="text-xl font-bold font-general mb-3 text-white group-hover:text-crypto-green transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {article.description}
                </p>
                <Button 
                  variant="ghost"
                  className="text-crypto-green hover:text-crypto-green hover:bg-crypto-green/10 p-0 h-auto font-semibold"
                >
                  Know More →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogOverviewSection;
