import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-general mb-6 text-white">
            About <span className="text-[#73E212]">TradeSuccess.VIP</span>
          </h2>
          
          <p className="text-xl text-white mb-8 leading-relaxed">
            Revolutionizing Crypto Trading—One Strategy at a Time. <br className="md:hidden" /><br className="hidden md:block" />
            At TradeSuccess.VIP, we're transforming how people trade crypto by combining AI-powered automation (trading bots), real-time market data, and proven signal strategies—all in one seamless experience. <br className="md:hidden" /><br className="hidden md:block" />
            Trusted by a growing global community of 70,000+ traders, we empower both beginners and experienced investors to trade smarter, reduce risk, and grow their portfolios with confidence. Whether you're after daily profit signals, bot-powered trades, or managed portfolios, our platform provides everything you need—securely and transparently. <br className="md:hidden" /><br className="hidden md:block" />
            Join the future of crypto trading. Let results speak for themselves.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl font-bold text-[#73E212] mb-2">70K+</div>
              <div className="text-white">Active Traders</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl font-bold text-[#73E212] mb-2">$6M+</div>
              <div className="text-white">Trading Volume</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl font-bold text-[#73E212] mb-2">19+</div>
              <div className="text-white">Countries</div>
            </div>
          </div>

          <Button 
            className="glow-button text-black font-semibold px-8 py-4 h-auto"
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
