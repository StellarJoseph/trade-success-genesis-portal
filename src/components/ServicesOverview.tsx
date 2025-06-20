
import { Button } from '@/components/ui/button';

const ServicesOverview = () => {
  const services = [
    {
      title: "AI-Powered Trading Signals",
      description: "Get expert-level trading signals powered by advanced AI algorithms and market analysis. Our system analyzes thousands of data points to deliver profitable opportunities directly to your phone.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
      features: ["Real-time alerts", "95%+ accuracy rate", "Multi-exchange support"]
    },
    {
      title: "Automated Trading Bots",
      description: "Let our sophisticated bots trade for you 24/7. Set your risk parameters and watch your portfolio grow while you sleep. Perfect for busy professionals and passive investors.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop",
      features: ["24/7 automation", "Risk management", "Portfolio optimization"]
    },
    {
      title: "Portfolio Management",
      description: "Professional portfolio management services with dedicated account managers. Get personalized strategies tailored to your financial goals and risk tolerance.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
      features: ["Personal advisor", "Custom strategies", "Monthly reports"]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-general mb-6">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive crypto trading solutions designed to maximize your profits
            while minimizing risk through cutting-edge technology and expert guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl overflow-hidden hover:border-crypto-green/40 transition-all duration-300 group hover:transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold font-general mb-4 text-white group-hover:text-crypto-green transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-crypto-green rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full border-crypto-green/30 text-crypto-green hover:bg-crypto-green hover:text-crypto-dark transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
