
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Results = () => {
  const beforeAfterResults = [
    {
      title: "Bitcoin Futures Trade",
      before: "$5,000",
      after: "$18,500",
      profit: "+270%",
      timeframe: "3 weeks",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop"
    },
    {
      title: "Solana Spot Trading",
      before: "$2,500",
      after: "$11,200",
      profit: "+348%",
      timeframe: "2 months",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop"
    },
    {
      title: "DeFi Portfolio",
      before: "$10,000",
      after: "$42,000",
      profit: "+320%",
      timeframe: "4 months",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop"
    },
    {
      title: "Altcoin Signals",
      before: "$3,000",
      after: "$15,600",
      profit: "+420%",
      timeframe: "6 weeks",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "Marcus Chen",
      role: "Day Trader",
      quote: "The signals are incredibly accurate. I've made more in 3 months than my entire previous year of trading.",
      profit: "+$127,000",
      image: "MC"
    },
    {
      name: "Sarah Rodriguez",
      role: "Portfolio Manager",
      quote: "TradeSuccess.VIP completely transformed my investment strategy. The ROI speaks for itself.",
      profit: "+$89,500",
      image: "SR"
    },
    {
      name: "David Kim",
      role: "Crypto Investor",
      quote: "From skeptical to believer in just one month. The automated trading bots are game-changers.",
      profit: "+$156,800",
      image: "DK"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold font-general mb-6">
                Real Results from <span className="text-gradient">Real Traders</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the incredible profits our members have achieved using TradeSuccess.VIP signals, 
                bots, and portfolio management services. These are verified results from actual trades.
              </p>
            </div>
          </div>
        </section>

        {/* Before/After Results Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-general mb-6">
                Before & After <span className="text-gradient">Trade Results</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {beforeAfterResults.map((result, index) => (
                <div
                  key={index}
                  className="glass-card p-8 rounded-3xl hover:border-crypto-green/40 transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img 
                      src={result.image} 
                      alt={result.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-crypto-green text-crypto-dark px-3 py-1 rounded-full text-sm font-bold">
                      {result.profit}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold font-general mb-4 text-white">
                    {result.title}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-gray-400 text-sm mb-1">Initial Investment</div>
                      <div className="text-xl font-bold text-white">{result.before}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-400 text-sm mb-1">Final Result</div>
                      <div className="text-xl font-bold text-crypto-green">{result.after}</div>
                    </div>
                  </div>
                  
                  <div className="text-center text-gray-400 text-sm">
                    Achieved in {result.timeframe}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Dashboard Screenshots */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-general mb-6">
                Live Dashboard <span className="text-gradient">Performance</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="glass-card p-8 rounded-3xl text-center">
                <div className="text-4xl font-bold text-crypto-green mb-4">+347%</div>
                <div className="text-xl font-semibold text-white mb-2">Average ROI</div>
                <div className="text-gray-400">Across all signal types</div>
              </div>
              <div className="glass-card p-8 rounded-3xl text-center">
                <div className="text-4xl font-bold text-crypto-green mb-4">92%</div>
                <div className="text-xl font-semibold text-white mb-2">Win Rate</div>
                <div className="text-gray-400">Profitable signals ratio</div>
              </div>
              <div className="glass-card p-8 rounded-3xl text-center">
                <div className="text-4xl font-bold text-crypto-green mb-4">$2.1M</div>
                <div className="text-xl font-semibold text-white mb-2">Total Profits</div>
                <div className="text-gray-400">Generated this month</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials with Results */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-general mb-6">
                Success <span className="text-gradient">Stories</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="glass-card p-8 rounded-3xl hover:border-crypto-green/40 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-crypto-green to-crypto-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-crypto-dark font-bold">
                        {testimonial.image}
                      </span>
                    </div>
                    <div className="text-crypto-green font-bold text-2xl mb-1">{testimonial.profit}</div>
                    <div className="text-gray-400 text-sm">Total Profit</div>
                  </div>
                  
                  <blockquote className="text-gray-300 italic mb-6 text-center">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="text-center">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="glass-card p-12 rounded-3xl text-center relative overflow-hidden max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-crypto-green/10 via-transparent to-crypto-green/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold font-general mb-6">
                  Ready to <span className="text-gradient">Join Them?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Start your journey to financial freedom with TradeSuccess.VIP. 
                  Get access to the same signals and strategies that generated these results.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button className="glow-button text-crypto-dark font-semibold text-lg px-8 py-4 h-auto">
                    View Pricing Plans
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-crypto-green text-crypto-green hover:bg-crypto-green hover:text-crypto-dark text-lg px-8 py-4 h-auto"
                  >
                    See Live Signals
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Results;
