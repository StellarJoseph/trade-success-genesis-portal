
const TrustBadges = () => {
  const partners = [
    { name: 'Binance', logo: 'B' },
    { name: 'Bybit', logo: 'By' },
    { name: 'CoinMarketCap', logo: 'CMC' },
    { name: 'MaestroBot', logo: 'MB' },
    { name: 'Solana', logo: 'SOL' },
    { name: 'USDT', logo: 'USDT' }
  ];

  return (
    <section className="py-16 border-y border-crypto-green/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-lg text-gray-400 mb-8">Trusted by Leading Crypto Platforms</h3>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="glass-card p-4 rounded-xl hover:border-crypto-green/40 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-crypto-green to-crypto-green-light rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-crypto-dark font-bold text-sm">{partner.logo}</span>
              </div>
              <div className="text-center mt-2 text-xs text-gray-400">{partner.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
