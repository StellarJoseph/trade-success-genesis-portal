import { Button } from '@/components/ui/button';
import { Bitcoin } from 'lucide-react';
import { useEffect, useState } from 'react';

const ROTATING_WORDS = [
  'Easier',
  'Richer',
  'Stronger',
  'Shielded',
];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fadeOutTimeout = setTimeout(() => setFade(false), 2000); // fade out after 2s
    const changeWordTimeout = setTimeout(() => {
      setCurrentWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
      setFade(true);
    }, 2400); // change word after fade out
    return () => {
      clearTimeout(fadeOutTimeout);
      clearTimeout(changeWordTimeout);
    };
  }, [currentWordIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Gradient Background */}
      <div className="animated-gradient"></div>
      {/* Background Effects - matching the green gradient from reference */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#73E212]/20 via-crypto-dark to-crypto-darker"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#73E212]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#73E212]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Enhanced Floating Icons with Images - Better spacing and larger sizes */}
        <div className="absolute top-40 right-1/4 w-28 h-28 border-2 border-[#73E212]/50 rounded-full flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: '2s' }}>
          <div className="w-20 h-20 bg-[#73E212]/30 rounded-full flex items-center justify-center">
            <img src="https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750432714/bitcoin_7617086_xs6crd.png" alt="Bitcoin" className="w-12 h-12" />
          </div>
        </div>

        {/* Solana icon - moved lower */}
        <div className="absolute top-[32rem] right-8 w-24 h-24 border-2 border-[#73E212]/50 rounded-full flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: '3s' }}>
          <div className="w-16 h-16 bg-[#73E212]/25 rounded-full flex items-center justify-center">
            <img src="https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750432713/solana_6557105_l5j1w0.png" alt="Solana" className="w-10 h-10" />
          </div>
        </div>

        {/* USDT icon - moved lower */}
        <div className="absolute top-[38rem] right-1/3 w-20 h-20 border-2 border-[#73E212]/50 rounded-full flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: '4s' }}>
          <div className="w-12 h-12 bg-[#73E212]/30 rounded-full flex items-center justify-center">
            <img src="https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750432714/tenge_3611642_udagom.png" alt="USDT" className="w-8 h-8" />
          </div>
        </div>

        <div className="absolute top-136 right-12 w-16 h-16 border-2 border-[#73E212]/50 rounded-full flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: '5s' }}>
          <div className="w-10 h-10 bg-[#73E212]/25 rounded-full flex items-center justify-center">
            <img src="https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750432714/mining_11107279_qka6o3.png" alt="Mining" className="w-6 h-6" />
          </div>
        </div>

        {/* Icon at bottom left of ATM card */}
        <div className="absolute bottom-24 left-1/4 w-20 h-20 border-2 border-[#73E212]/50 rounded-full flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: '1.5s' }}>
          <div className="w-12 h-12 bg-[#73E212]/30 rounded-full flex items-center justify-center">
            <span className="text-[#73E212] text-xs font-bold">ETH</span>
          </div>
        </div>

        {/* Original floating icons for left side */}
        <div className="absolute top-48 left-16 w-20 h-20 border border-[#73E212]/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '3s' }}>
          <div className="w-10 h-10 bg-[#73E212]/15 rounded-full flex items-center justify-center">
            <span className="text-[#73E212] text-xs font-bold">SOL</span>
          </div>
        </div>

        <div className="absolute bottom-32 left-1/3 w-18 h-18 border border-[#73E212]/25 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '4s' }}>
          <div className="w-8 h-8 bg-[#73E212]/20 rounded-full flex items-center justify-center">
            <span className="text-[#73E212] text-xs font-bold">USDT</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-general mb-6 leading-tight text-white text-center">
              Make Your Life{' '}
              <span
                className={`rotating-word font-bold transition-opacity duration-400 ${fade ? 'opacity-100' : 'opacity-0'}`}
                style={{ color: '#73E212' }}
              >
                {ROTATING_WORDS[currentWordIndex]}
              </span>{' '}
              With Cryptocurrency
            </h1>
            
            <p className="text-xl text-white mb-8 max-w-2xl">
            Unlock Smarter Crypto Gains with TradeSuccess.VIP
            Step into the future of wealth creation with our AI-driven platform. From expert trading signals to automated portfolio strategies, we empower you to profit confidently in the fast-moving crypto market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                className="glow-button text-black font-semibold text-lg px-8 py-4 h-auto"
                onClick={() => {
                  const element = document.getElementById('vip-services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                className="border-[#73E212] text-black hover:bg-[#73E212] hover:text-black text-lg px-8 py-4 h-auto"
                onClick={() => {
                  const element = document.getElementById('results-section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                See Results
              </Button>
            </div>

            {/* Updated Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#73E212]/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#73E212]">7,000+</div>
                <div className="text-sm text-white">Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#73E212]">300+</div>
                <div className="text-sm text-white">Monthly Signals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#73E212]">$12M+</div>
                <div className="text-sm text-white">Profit Made</div>
              </div>
            </div>
          </div>

          {/* Visual Element - Cards in hand like reference */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Hand holding cards visual representation */}
              <div className="glass-card p-8 rounded-3xl animate-float transform rotate-3">
                <div className="bg-gradient-to-br from-[#73E212] to-[#73E212] p-6 rounded-2xl mb-6">
                  <div className="text-black font-bold text-xl mb-2">TradeSuccess VIP</div>
                  <div className="text-black text-sm">ELITE MEMBER</div>
                  <div className="text-black text-lg font-bold mt-4">DAVID R MEDEIROS</div>
                  <div className="flex justify-between items-end mt-4">
                    <div className="w-8 h-6 bg-black/20 rounded"></div>
                    <div className="text-black text-xs">****  ****  ****  8291</div>
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
                  <div className="w-3 h-3 bg-[#73E212] rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-[#73E212] font-bold">+127%</div>
                    <div className="text-xs text-white">Portfolio</div>
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
