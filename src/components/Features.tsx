
import { Zap, CircleArrowUp, CircleArrowDown } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <CircleArrowUp className="w-12 h-12" />,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200&h=200&fit=crop",
      title: "Optimal Prices",
      description: "Get the best market prices with our advanced algorithm that scans multiple exchanges in real-time."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=200&h=200&fit=crop",
      title: "Automatic Trading",
      description: "Let our AI-powered bots execute trades 24/7 while you sleep. Never miss profitable opportunities again."
    },
    {
      icon: <CircleArrowDown className="w-12 h-12" />,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=200&fit=crop",
      title: "Secure & Insured",
      description: "Your investments are protected with bank-level security and insurance coverage up to $500,000."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-general mb-6">
            Decentralized Trading For{' '}
            <span className="text-gradient">Everyone</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of cryptocurrency trading with our cutting-edge platform
            designed for both beginners and professional traders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-3xl hover:border-crypto-green/40 transition-all duration-300 group hover:transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="relative">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-20 h-20 rounded-2xl object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-crypto-green/20 to-crypto-green-light/20 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-crypto-green">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-general text-white group-hover:text-crypto-green transition-colors">
                    {feature.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
