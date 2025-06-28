import { Button } from '@/components/ui/button';

const FinalCTA = () => {
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
            <div className="text-crypto-green mb-6">● Join The Revolution</div>
            
            <h2 className="text-4xl md:text-6xl font-bold font-general mb-6 text-white">
              Join thousands building{' '}
              <span className="text-[#73E212]">wealth with crypto</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't let another opportunity pass you by. Start your journey to financial 
              freedom today with the most trusted crypto investment platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button className="glow-button text-crypto-dark font-semibold text-lg px-12 py-4 h-auto">
                Get Started Now
              </Button>
              <Button 
                variant="outline" 
                className="border-crypto-green text-black hover:bg-crypto-green hover:text-crypto-dark text-lg px-12 py-4 h-auto"
              >
                Join VIP Community
              </Button>
            </div>

            <div className="grid md:grid-cols-4 gap-8 pt-8 border-t border-crypto-green/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-crypto-green mb-2">2M+</div>
                <div className="text-sm text-gray-400">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-crypto-green mb-2">$5B+</div>
                <div className="text-sm text-gray-400">Trading Volume</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-crypto-green mb-2">98%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-crypto-green mb-2">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              🔒 Secure • 💎 Insured up to $500K • ⚡ Instant Setup • 🌍 Global Access
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
