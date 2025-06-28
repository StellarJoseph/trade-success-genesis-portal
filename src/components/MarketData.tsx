import { useState, useEffect } from 'react';

const MarketData = () => {
  const [marketData, setMarketData] = useState([
    { symbol: 'BTC', name: 'Bitcoin', price: 0, change: 0, priceNGN: 0 },
    { symbol: 'ETH', name: 'Ethereum', price: 0, change: 0, priceNGN: 0 },
    { symbol: 'SOL', name: 'Solana', price: 0, change: 0, priceNGN: 0 },
    { symbol: 'USDT', name: 'Tether', price: 0, change: 0, priceNGN: 0 }
  ]);

  const [currentStats, setCurrentStats] = useState({
    depositCrypto: 1000,
    earnInterest: 15
  });

  const [isLoading, setIsLoading] = useState(true);

  const fetchCryptoData = async () => {
    try {
      // Fetch current prices
      const priceResponse = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,tether&vs_currencies=usd,ngn'
      );
      const priceData = await priceResponse.json();

      // Fetch 24h price change data
      const changeResponse = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,tether&vs_currencies=usd&include_24hr_change=true'
      );
      const changeData = await changeResponse.json();

      const updatedMarketData = [
        {
          symbol: 'BTC',
          name: 'Bitcoin',
          price: priceData.bitcoin?.usd || 0,
          change: changeData.bitcoin?.usd_24h_change || 0,
          priceNGN: priceData.bitcoin?.ngn || 0
        },
        {
          symbol: 'ETH',
          name: 'Ethereum',
          price: priceData.ethereum?.usd || 0,
          change: changeData.ethereum?.usd_24h_change || 0,
          priceNGN: priceData.ethereum?.ngn || 0
        },
        {
          symbol: 'SOL',
          name: 'Solana',
          price: priceData.solana?.usd || 0,
          change: changeData.solana?.usd_24h_change || 0,
          priceNGN: priceData.solana?.ngn || 0
        },
        {
          symbol: 'USDT',
          name: 'Tether',
          price: priceData.tether?.usd || 0,
          change: changeData.tether?.usd_24h_change || 0,
          priceNGN: priceData.tether?.ngn || 0
        }
      ];

      setMarketData(updatedMarketData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching crypto data:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptoData();
    
    // Update data every 30 seconds
    const interval = setInterval(fetchCryptoData, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stats Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-general mb-8 text-white">
              Deposit Your Crypto{' '}
              <br />
              <span className="text-gradient">Earn Interest.</span>
            </h2>
            
            <p className="text-xl text-white mb-8">
              Earn up to 180% APY on your cryptocurrency holdings with our secure trading, 
              staking and DeFi yield farming strategies.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#73E212] mb-2">
                  {currentStats.depositCrypto}
                </div>
                <div className="text-white font-medium">Deposit USDT</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#73E212] mb-2">
                  {currentStats.earnInterest}%
                </div>
                <div className="text-white font-medium">Earn Interest</div>
              </div>
            </div>

            <button className="glow-button px-8 py-4 rounded-xl text-black font-semibold">
              Start Earning Now
            </button>
          </div>

          {/* Market Ticker */}
          <div className="bg-gradient-to-br from-blue-900/80 to-blue-950/90 p-8 rounded-3xl border border-blue-700/30 shadow-2xl shadow-blue-900/20">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Live Market Data</h3>
            
            <div className="space-y-4">
              {marketData.map((coin) => (
                <div
                  key={coin.symbol}
                  className="flex items-center justify-between p-4 bg-crypto-darker/50 rounded-xl hover:bg-crypto-darker/70 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#73E212] to-[#73E212]/80 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">
                        {coin.symbol.substring(0, 2)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{coin.symbol}</div>
                      <div className="text-sm text-white/80 font-medium">{coin.name}</div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-bold text-white">
                      {isLoading ? (
                        <div className="animate-pulse bg-gray-600 h-6 w-20 rounded"></div>
                      ) : (
                        `$${coin.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                      )}
                    </div>
                    <div className={`text-sm font-semibold ${coin.change >= 0 ? 'text-[#73E212]' : 'text-red-400'}`}>
                      {isLoading ? (
                        <div className="animate-pulse bg-gray-600 h-4 w-16 rounded"></div>
                      ) : (
                        `${coin.change >= 0 ? '+' : ''}${coin.change.toFixed(2)}%`
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {isLoading && (
              <div className="text-center mt-4">
                <div className="text-sm text-white/90 font-medium">Loading live data...</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketData;
