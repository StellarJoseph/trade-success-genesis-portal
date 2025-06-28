import { useState, useEffect } from 'react';

const MarketData = () => {
  const [marketData, setMarketData] = useState([
    { symbol: 'BTC', name: 'Bitcoin', price: 45240.32, change: 2.45 },
    { symbol: 'ETH', name: 'Ethereum', price: 3105.67, change: -1.23 },
    { symbol: 'SOL', name: 'Solana', price: 98.45, change: 5.67 },
    { symbol: 'USDT', name: 'Tether', price: 1.00, change: 0.01 }
  ]);

  const [currentStats, setCurrentStats] = useState({
    depositeCrypto: 31,
    earnInterest: 52
  });

  useEffect(() => {
    // Simulate real-time price updates
    const interval = setInterval(() => {
      setMarketData(prev => 
        prev.map(coin => ({
          ...coin,
          price: coin.price * (1 + (Math.random() - 0.5) * 0.02),
          change: (Math.random() - 0.5) * 10
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stats Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-general mb-8 text-white">
              Deposite Your Crypto{' '}
              <span className="text-gradient">Earn Interest.</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Earn up to 12% APY on your cryptocurrency holdings with our secure 
              staking and DeFi yield farming strategies.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-crypto-green mb-2">
                  {currentStats.depositeCrypto}%
                </div>
                <div className="text-gray-400">Deposite Crypto</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-crypto-green mb-2">
                  {currentStats.earnInterest}%
                </div>
                <div className="text-gray-400">Earn Interest</div>
              </div>
            </div>

            <button className="glow-button px-8 py-4 rounded-xl text-crypto-dark font-semibold">
              Start Earning Now
            </button>
          </div>

          {/* Market Ticker */}
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Live Market Data</h3>
            
            <div className="space-y-4">
              {marketData.map((coin) => (
                <div
                  key={coin.symbol}
                  className="flex items-center justify-between p-4 bg-crypto-darker/50 rounded-xl hover:bg-crypto-darker/70 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-crypto-green to-crypto-green-light rounded-full flex items-center justify-center">
                      <span className="text-crypto-dark font-bold text-sm">
                        {coin.symbol.substring(0, 2)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">{coin.symbol}</div>
                      <div className="text-sm text-gray-400">{coin.name}</div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-bold">
                      ${coin.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <div className={`text-sm ${coin.change >= 0 ? 'text-crypto-green' : 'text-red-400'}`}>
                      {coin.change >= 0 ? '+' : ''}{coin.change.toFixed(2)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketData;
