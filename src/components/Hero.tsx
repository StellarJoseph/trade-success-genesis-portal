
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-crypto-green/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-crypto-green-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-general mb-6 leading-tight">
              Make Your life{' '}
              <span className="text-gradient">Easier With</span>{' '}
              Cryptocurrency
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Join the global crypto revolution with TradeSuccess.VIP. 
              Our AI-powered trading platform and expert signals help you 
              maximize profits in the cryptocurrency market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="glow-button text-crypto-dark font-semibold text-lg px-8 py-4 h-auto">
                Get Started
              </Button>
              <Button 
                variant="outline" 
                className="border-crypto-green text-crypto-green hover:bg-crypto-green hover:text-crypto-dark text-lg px-8 py-4 h-auto"
              >
                Watch Video
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-crypto-green/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-crypto-green">84M+</div>
                <div className="text-sm text-gray-400">Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-crypto-green">49M+</div>
                <div className="text-sm text-gray-400">Transactions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-crypto-green">79M+</div>
                <div className="text-sm text-gray-400">Profit Made</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="glass-card p-8 rounded-3xl animate-float">
              <div className="bg-gradient-to-br from-crypto-green to-crypto-green-light p-6 rounded-2xl mb-6">
                <div className="text-crypto-dark font-bold text-xl mb-2">TradeSuccess VIP</div>
                <div className="text-crypto-dark text-sm">Premium Trading Card</div>
                <div className="text-crypto-dark text-2xl font-bold mt-4">****  ****  ****  8291</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Portfolio Balance</span>
                  <span className="text-crypto-green font-bold">$127,459.32</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">24h Change</span>
                  <span className="text-crypto-green font-bold">+12.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Active Trades</span>
                  <span className="text-white font-bold">17</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
