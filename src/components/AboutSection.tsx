
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-general mb-6">
            About <span className="text-gradient">TradeSuccess.VIP</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We're revolutionizing cryptocurrency trading by combining cutting-edge AI technology 
            with expert market analysis. Our platform serves over 2 million traders worldwide, 
            providing them with the tools and insights needed to succeed in the crypto market.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl font-bold text-crypto-green mb-2">2M+</div>
              <div className="text-gray-400">Active Traders</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl font-bold text-crypto-green mb-2">$5B+</div>
              <div className="text-gray-400">Trading Volume</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl font-bold text-crypto-green mb-2">190+</div>
              <div className="text-gray-400">Countries</div>
            </div>
          </div>

          <Button 
            className="glow-button text-crypto-dark font-semibold px-8 py-4 h-auto"
            onClick={() => window.location.href = '/about'}
          >
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
