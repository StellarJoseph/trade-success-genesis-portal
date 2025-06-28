import { Zap, Shield, TrendingUp, Bot, ChartBar, Lock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=300&h=200&fit=crop",
      title: "Optimal Prices",
      description: "Get the best market prices with our advanced algorithm that scans multiple exchanges in real-time, ensuring you always get the most competitive rates."
    },
    {
      icon: <Bot className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=300&h=200&fit=crop",
      title: "Automatic Trading",
      description: "Let our AI-powered bots execute trades 24/7 while you sleep. Never miss profitable opportunities with intelligent automation."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop",
      title: "Secure & Insured",
      description: "Your investments are protected with bank-level security and insurance coverage up to $500,000 for complete peace of mind."
    },
    {
      icon: <ChartBar className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
      title: "Real-Time Analytics",
      description: "Access comprehensive market insights, portfolio performance, and trading analytics with our advanced dashboard."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=200&fit=crop",
      title: "Multi-Layer Security",
      description: "Enterprise-grade security with FIPS 140-2 validation, cold storage, and multi-signature wallets protecting your assets."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=300&h=200&fit=crop",
      title: "Lightning Fast",
      description: "Execute trades in milliseconds with our high-frequency trading infrastructure and optimized order routing."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-general mb-6 text-white">
            <span className="text-[#73E212]">Powerful.</span> Secure. <span className="text-[#73E212]">Effortless.</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Experience the future of cryptocurrency trading with our cutting-edge platform
            designed for both beginners and professional traders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-3xl hover:border-[#73E212]/40 transition-all duration-300 group hover:transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Section */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-[#73E212]/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-[#73E212] transition-all duration-300">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold font-general text-white group-hover:text-[#73E212] transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed text-sm">
                  {feature.description}
                </p>
                
                {/* Hover Effect Line */}
                <div className="w-0 h-0.5 bg-[#73E212] group-hover:w-full transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
