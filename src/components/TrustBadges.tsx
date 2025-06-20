
const TrustBadges = () => {
  const partners = [
    { name: 'Binance', logo: 'BIN' },
    { name: 'Bybit', logo: 'BY' },
    { name: 'MEXC', logo: 'MXC' },
    { name: 'CoinMarketCap', logo: 'CMC' },
    { name: 'Phantom', logo: 'PHM' },
    { name: 'MaestroBot', logo: 'MB' },
    { name: 'Coinbase', logo: 'CB' },
    { name: 'KuCoin', logo: 'KC' },
    { name: 'Bitget', logo: 'BG' },
    { name: 'Uniswap', logo: 'UNI' }
  ];

  // Duplicate the array for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 border-y border-crypto-green/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-lg text-gray-400 mb-8">Traded On Leading Crypto Platforms</h3>
        </div>

        <div className="relative">
          <div className="flex animate-scroll-infinite">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 mx-4 glass-card p-4 rounded-xl hover:border-crypto-green/40 transition-all duration-300 group opacity-60 hover:opacity-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-crypto-green/20 to-crypto-green-light/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-crypto-green font-bold text-xs">{partner.logo}</span>
                </div>
                <div className="text-center mt-2 text-xs text-gray-500">{partner.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
