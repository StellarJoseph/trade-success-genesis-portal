
import { Zap, CircleArrowUp, CircleArrowDown } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <CircleArrowUp className="w-8 h-8" />,
      title: "Optimal Prices",
      description: "Get the best market prices with our advanced algorithm that scans multiple exchanges in real-time."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automatic Trading",
      description: "Let our AI-powered bots execute trades 24/7 while you sleep. Never miss profitable opportunities again."
    },
    {
      icon: <CircleArrowDown className="w-8 h-8" />,
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
              className="glass-card p-8 rounded-3xl hover:border-crypto-green/40 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-crypto-green to-crypto-green-light rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow-pulse">
                <div className="text-crypto-dark">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold font-general mb-4 text-white">
                {feature.title}
              </h3>
              
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
