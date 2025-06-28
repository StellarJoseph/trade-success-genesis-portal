const TrustBadges = () => {
  const partners = [
    { name: 'Binance', logo: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750445328/binance_gmcr5w.jpg' },
    { name: 'Bybit', logo: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750445326/bybit_black_l4s5mp.png' },
    { name: 'MEXC', logo: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750445329/mexc-logo_ekvlay.png' },
    { name: 'Bull X', logo: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750445326/bullx_io_logo_sibuqz.jpg' },
    { name: 'Phantom', logo: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750445328/Phantom-Icon_Transparent_Purple_zfm5sw.png' },
    { name: 'MaestroBot', logo: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750445328/Maestro__logo_lrxqll.jpg' },
    { name: 'Coinbase', logo: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750445327/Coinbase_vuhg8y.png' },
    { name: 'KuCoin', logo: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750445327/Kucoin_Logo_ujbsey.webp' },
    { name: 'Bitget', logo: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750445326/Bitget_L_zirbgs.webp' },
    { name: 'Uniswap', logo: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750445330/Uniswap_Logo.svg1200px_dtcjzm.png' }
  ];

  // Duplicate the array for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 border-y border-crypto-green/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-lg text-gray-400 mb-8">
            Traded On Leading <br className="md:hidden" /> Crypto Platforms
          </h3>
        </div>

        <div className="relative">
          <div className="flex animate-scroll-infinite">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 mx-4 glass-card p-4 rounded-xl hover:border-crypto-green/40 transition-all duration-300 group opacity-60 hover:opacity-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-crypto-green/20 to-crypto-green-light/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-12 h-12 object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                  />
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
