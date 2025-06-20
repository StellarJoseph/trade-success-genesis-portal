
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
            Revolutionizing Crypto Trading—One Strategy at a Time. At TradeSuccess.VIP, we're transforming how people trade crypto by combining AI-powered automation (trading bots), real-time market data, and proven signal strategies—all in one seamless experience. Trusted by a growing global community of 70,000+ traders, we empower both beginners and experienced investors to trade smarter, reduce risk, and grow their portfolios with confidence. Whether you're after daily profit signals, bot-powered trades, or managed portfolios, our platform provides everything you need—securely and transparently. Join the future of crypto trading. Let results speak for themselves.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl font-bold text-crypto-green mb-2">70K+</div>
              <div className="text-gray-400">Active Traders</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl font-bold text-crypto-green mb-2">$6M+</div>
              <div className="text-gray-400">Trading Volume</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl font-bold text-crypto-green mb-2">19+</div>
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
