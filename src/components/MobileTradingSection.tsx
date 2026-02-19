import React from 'react';

const assets = [
  { name: 'Bitcoin', symbol: 'BTC', amount: 52340, change: '+12.5%', color: 'bg-[#73E212]', symbolColor: 'text-black', changeColor: 'text-[#73E212]' },
  { name: 'Ethereum', symbol: 'ETH', amount: 3240, change: '+8.3%', color: 'bg-purple-500', symbolColor: 'text-white', changeColor: 'text-[#73E212]' },
  { name: 'BNB', symbol: 'BNB', amount: 2180, change: '+15.7%', color: 'bg-yellow-500', symbolColor: 'text-white', changeColor: 'text-[#73E212]' },
  { name: 'Solana', symbol: 'SOL', amount: 1890, change: '+22.1%', color: 'bg-gradient-to-r from-purple-600 to-pink-600', symbolColor: 'text-white', changeColor: 'text-[#73E212]' },
  { name: 'USDT', symbol: 'USDT', amount: 5000, change: '+0.1%', color: 'bg-green-500', symbolColor: 'text-white', changeColor: 'text-white' }
];

const total = assets.reduce((sum, a) => sum + a.amount, 0);

const formatCurrency = (value: number) => {
  return value.toLocaleString(undefined, { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
};

const MobileTradingSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-general mb-6 text-white">
              Seamless Trading{' '}
              <span className="text-[#73E212]">With Your Phone</span>
            </h2>
            
            <p className="text-xl text-white mb-8">
              Trade from anywhere. Get signals. Execute trades. Earn daily.
              Our mobile-optimized platform puts the power of professional 
              cryptocurrency trading in your pocket.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#73E212]/20 to-[#73E212]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💳</span>
                </div>
                <div className="text-sm text-white">Instant Payments</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#73E212]/20 to-[#73E212]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="text-sm text-white">Lightning Fast</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#73E212]/20 to-[#73E212]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <div className="text-sm text-white">Global Access</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-[#73E212] rounded-full"></div>
                <span className="text-white">Real-time market notifications</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-[#73E212] rounded-full"></div>
                <span className="text-white">One-tap trade execution</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-[#73E212] rounded-full"></div>
                <span className="text-white">Secure biometric authentication</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card p-8 rounded-3xl animate-float">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-white">Portfolio Balance</span>
                  <span className="text-[#73E212] font-bold text-xl">{formatCurrency(total)}</span>
                </div>

                <div className="space-y-4">
                  {assets.map((asset, idx) => (
                    <div key={idx} className={`flex justify-between items-center p-4 ${idx === 0 ? 'bg-[#73E212]/10' : 'bg-[#73E212]/5'} rounded-xl`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${asset.color}`}>
                          <span className={`${asset.symbolColor} text-xs font-bold`}>{asset.symbol}</span>
                        </div>
                        <div>
                          <div className="text-white font-semibold">{asset.name}</div>
                          <div className="text-xs text-white">{asset.symbol}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-bold ${asset.changeColor}`}>{asset.change}</div>
                        <div className="text-xs text-white">{formatCurrency(asset.amount)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileTradingSection;
