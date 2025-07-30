import { useState, useEffect } from 'react';

const NATIONAL_HOLDINGS = [
  { country: 'United States', amount: '$198B' },
  { country: 'China', amount: '$190B' },
  { country: 'United Kingdom', amount: '$61.2B' },
  { country: 'North Korea', amount: '$13.5B' },
  { country: 'Bhutan', amount: '$11.9B' },
  { country: 'El Salvador', amount: '$6.2B' },
];

const TOP_HOLDERS = [
  { country: 'India', people: '103 million people' },
  { country: 'China', people: '58 million people' },
  { country: 'United States', people: '45 million people' },
  { country: 'Vietnam', people: '20 million people' },
  { country: 'Brazil', people: '15 million people' },
  { country: 'Nigeria', people: '13 million people' },
];

// Helper functions for bar width
const getNationalBarWidth = (amount) => {
  // Remove $ and B, convert to number
  const num = parseFloat(amount.replace(/[$B]/g, ''));
  // Max is 198 (US)
  return `${(num / 198) * 100}%`;
};
const getHolderBarWidth = (people) => {
  // Remove ' million people', convert to number
  const num = parseFloat(people.replace(/[^\d.]/g, ''));
  // Max is 103 (India)
  return `${(num / 103) * 100}%`;
};

const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 768;

const CryptoHistorySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showNational, setShowNational] = useState(true);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('crypto-history');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Swapping animation logic
  useEffect(() => {
    if (!isVisible) return;
    const swapInterval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setShowNational((prev) => !prev);
        setFade(true);
      }, 500); // fade out, then swap, then fade in
    }, 9000);
    return () => clearInterval(swapInterval);
  }, [isVisible]);

  return (
    <section id="crypto-history" className="py-20 bg-black">
      <div className="container mx-auto px-2">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold font-general mb-6 text-white">
              Cryptocurrency Has{' '}
              <span className="text-gradient">Changed Lives & Nations</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              From humble beginnings to billion-dollar portfolios, cryptocurrency has created 
              generational wealth for those who saw its potential early. Today, even governments 
              are staking their future on it.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}> 
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Over the past decade, early adopters of crypto have turned modest investments 
                into life-changing fortunes. Entrepreneurs, students, institutions — people from 
                all walks of life are now financially free because they chose to act.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Now, entire nations are joining the revolution — allocating billions of dollars 
                into Bitcoin, Ethereum, and digital assets to secure their economic future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="glow-button text-crypto-dark font-semibold px-8 py-4 rounded-xl">
                  Join the Revolution
                </button>
                <button className="border border-crypto-green text-crypto-green hover:bg-crypto-green hover:text-crypto-dark px-8 py-4 rounded-xl transition-all duration-300">
                  See Success Stories
                </button>
              </div>
            </div>

            {/* Animated Swapping Stats */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="glass-card p-8 rounded-3xl min-h-[370px] flex flex-col justify-center items-center">
                <h3 className="text-2xl font-bold text-crypto-green mb-6 text-center">
                  {showNational ? 'Top Countries by National Crypto Holdings' : 'Top Countries by Number of Crypto Holders'}
                </h3>
                <div className={`w-full transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`} key={showNational ? 'national' : 'holders'}>
                  {showNational ? (
                    <ul className="space-y-4 w-full">
                      {NATIONAL_HOLDINGS.map((item, idx) => {
                        let displayCountry = item.country;
                        if (isMobile() && item.country === 'United States') displayCountry = 'U.S.A';
                        return (
                          <li key={item.country} className="flex items-center justify-between text-white text-lg md:text-xl flex-wrap">
                            <span className="flex items-center gap-3 w-auto md:flex-1">
                              <span className="w-8 h-8 flex items-center justify-center bg-crypto-green/20 rounded text-crypto-green font-bold text-base md:text-lg">{idx + 1}</span>
                              <span className="whitespace-nowrap md:truncate">{displayCountry}</span>
                            </span>
                            {/* Measurement Bar */}
                            <span className="mx-2 w-16 md:w-28">
                              <div className="w-full bg-gray-800 rounded-full h-2">
                                <div 
                                  className="bg-gradient-to-r from-crypto-green to-crypto-green-light h-2 rounded-full transition-all duration-1000"
                                  style={{ width: getNationalBarWidth(item.amount) }}
                                ></div>
                              </div>
                            </span>
                            <span className="text-crypto-green font-bold text-right min-w-[70px]">{item.amount}</span>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <ul className="space-y-4 w-full">
                      {TOP_HOLDERS.map((item, idx) => {
                        let displayCountry = item.country;
                        let displayPeople = item.people;
                        if (isMobile() && item.country === 'United States') displayCountry = 'U.S.A';
                        if (isMobile() && item.country === 'Vietnam') displayPeople = '20M People';
                        return (
                          <li key={item.country} className="flex items-center justify-between text-white text-lg md:text-xl flex-wrap">
                            <span className="flex items-center gap-3 w-auto md:flex-1">
                              <span className="w-8 h-8 flex items-center justify-center bg-crypto-green/20 rounded text-crypto-green font-bold text-base md:text-lg">{idx + 1}</span>
                              <span className="whitespace-nowrap md:truncate">{displayCountry}</span>
                            </span>
                            {/* Measurement Bar */}
                            <span className="mx-2 w-16 md:w-28">
                              <div className="w-full bg-gray-800 rounded-full h-2">
                                <div 
                                  className="bg-gradient-to-r from-crypto-green to-crypto-green-light h-2 rounded-full transition-all duration-1000"
                                  style={{ width: getHolderBarWidth(item.people) }}
                                ></div>
                              </div>
                            </span>
                            <span className="text-crypto-green font-bold text-right min-w-[70px]">{displayPeople}</span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoHistorySection;
