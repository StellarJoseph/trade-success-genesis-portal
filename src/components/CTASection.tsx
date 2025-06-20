
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="glass-card p-12 rounded-3xl text-center relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-crypto-green/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-crypto-green-light/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold font-general mb-6">
              Activate Your Bot, Fund Your Account,{' '}
              <span className="text-gradient">and Earn Profits Daily</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of successful traders who trust TradeSuccess.VIP for their 
              cryptocurrency investment journey. Start with as little as $50.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="glow-button text-crypto-dark font-semibold text-lg px-12 py-4 h-auto">
                Get Started with $50
              </Button>
              <Button 
                variant="outline" 
                className="border-crypto-green text-crypto-green hover:bg-crypto-green hover:text-crypto-dark text-lg px-12 py-4 h-auto"
              >
                View Our Plans
              </Button>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              🔒 Secure • 💎 Insured up to $500K • ⚡ Instant Setup
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
