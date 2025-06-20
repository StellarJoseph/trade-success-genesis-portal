
import { Button } from '@/components/ui/button';
import { Bitcoin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects - matching the green gradient from reference */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-crypto-green/20 via-crypto-dark to-crypto-darker"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-crypto-green/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-crypto-green-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Enhanced Floating Icons with Images - Better spacing and larger sizes */}
        <div className="absolute top-20 right-1/4 w-24 h-24 border border-crypto-green/30 rounded-full flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: '2s' }}>
          <div className="w-16 h-16 bg-crypto-green/20 rounded-full flex items-center justify-center">
            <img src="https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750432714/bitcoin_7617086_xs6crd.png" alt="Bitcoin" className="w-10 h-10" />
          </div>
        </div>

        <div className="absolute top-36 right-8 w-20 h-20 border border-crypto-green/25 rounded-full flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: '3s' }}>
          <div className="w-12 h-12 bg-crypto-green/15 rounded-full flex items-center justify-center">
            <img src="https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750432713/solana_6557105_l5j1w0.png" alt="Solana" className="w-8 h-8" />
          </div>
        </div>

        <div className="absolute top-52 right-1/3 w-18 h-18 border border-crypto-green/20 rounded-full flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: '4s' }}>
          <div className="w-10 h-10 bg-crypto-green/20 rounded-full flex items-center justify-center">
            <img src="https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750432714/tenge_3611642_udagom.png" alt="USDT" className="w-6 h-6" />
          </div>
        </div>

        <div className="absolute top-44 right-12 w-16 h-16 border border-crypto-green/20 rounded-full flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: '5s' }}>
          <div className="w-8 h-8 bg-crypto-green/15 rounded-full flex items-center justify-center">
            <img src="https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750432714/mining_11107279_qka6o3.png" alt="Mining" className="w-5 h-5" />
          </div>
        </div>

        {/* Original floating icons for left side */}
        <div className="absolute top-48 left-16 w-20 h-20 border border-crypto-green/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '3s' }}>
          <div className="w-10 h-10 bg-crypto-green/15 rounded-full flex items-center justify-center">
            <span className="text-crypto-green text-xs font-bold">SOL</span>
          </div>
        </div>

        <div className="absolute bottom-32 left-1/3 w-18 h-18 border border-crypto-green/25 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '4s' }}>
          <div className="w-8 h-8 bg-crypto-green/20 rounded-full flex items-center justify-center">
            <span className="text-crypto-green text-xs font-bold">USDT</span>
          </div>
        </div>
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button className="glow-button text-crypto-dark font-semibold text-lg px-8 py-4 h-auto">
                Get Started
              </Button>
              <Button 
                variant="outline" 
                className="border-crypto-green text-crypto-green hover:bg-crypto-green hover:text-crypto-dark text-lg px-8 py-4 h-auto"
                onClick={() => window.location.href = '/results'}
              >
                See Results
              </Button>
            </div>

            {/* Updated Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-crypto-green/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-crypto-green">7,000+</div>
                <div className="text-sm text-gray-400">Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-crypto-green">300+</div>
                <div className="text-sm text-gray-400">Monthly Signals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-crypto-green">$12M+</div>
                <div className="text-sm text-gray-400">Profit Made</div>
              </div>
            </div>
          </div>

          {/* Visual Element - Cards in hand like reference */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Hand holding cards visual representation */}
              <div className="glass-card p-8 rounded-3xl animate-float transform rotate-3">
                <div className="bg-gradient-to-br from-crypto-green to-crypto-green-light p-6 rounded-2xl mb-6">
                  <div className="text-crypto-dark font-bold text-xl mb-2">TradeSuccess VIP</div>
                  <div className="text-crypto-dark text-sm">MEMBERSHIP</div>
                  <div className="text-crypto-dark text-lg font-bold mt-4">DAVID R MEDEIROS</div>
                  <div className="flex justify-between items-end mt-4">
                    <div className="w-8 h-6 bg-crypto-dark/20 rounded"></div>
                    <div className="text-crypto-dark text-xs">****  ****  ****  8291</div>
                  </div>
                </div>
              </div>
              
              {/* Second card behind */}
              <div className="absolute top-4 left-4 glass-card p-8 rounded-3xl animate-float bg-crypto-purple/50 transform -rotate-6 -z-10" style={{ animationDelay: '0.5s' }}>
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-6 rounded-2xl">
                  <div className="text-white font-bold text-xl mb-2">MasterCard</div>
                  <div className="text-gray-300 text-sm">Premium</div>
                  <div className="text-white text-lg font-bold mt-4">****  ****  ****  ****</div>
                </div>
              </div>

              {/* Portfolio stats overlay */}
              <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-crypto-green rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-crypto-green font-bold">+127%</div>
                    <div className="text-xs text-gray-400">Portfolio</div>
                  </div>
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
