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
    { name: 'Uniswap', logo: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750445330/Uniswap_Logo.svg1200px_dtcjzm.png' },
    { name: 'Bloom Bot', logo: 'https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750445475/Bool_Bot_sfjgvc.avif' }
  ];

  // Duplicate the array for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 border-y border-[#73E212]/20 overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Traded On Leading <span className="text-[#73E212]">Crypto Platforms</span>
          </h3>
          <p className="text-[#73E212]/70 text-lg">
            Seamlessly integrated with the world's most trusted exchanges
          </p>
        </div>

        <div className="relative">
          <div className="flex animate-scroll-infinite">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 mx-6 glass-card p-6 rounded-2xl hover:border-[#73E212]/60 transition-all duration-300 group opacity-70 hover:opacity-100 hover:scale-105"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-[#73E212]/10 to-[#73E212]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden border border-[#73E212]/20">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                  />
                </div>
                <div className="text-center mt-4 text-sm md:text-base font-medium text-[#73E212]/80 group-hover:text-[#73E212] transition-colors duration-300">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
