
import { useState, useEffect } from 'react';

const CryptoHistorySection = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section id="crypto-history" className="py-20 bg-black">
      <div className="container mx-auto px-4">
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

            {/* Visual Element */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="glass-card p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-crypto-green mb-6 text-center">
                  Top Countries with Crypto Holdings
                </h3>
                <div className="space-y-4">
                  {[
                    { country: "United States", amount: "$5.1B", percentage: 100 },
                    { country: "China", amount: "$4.2B", percentage: 82 },
                    { country: "Germany", amount: "$3.1B", percentage: 61 },
                    { country: "El Salvador", amount: "$2.8B", percentage: 55 },
                    { country: "Switzerland", amount: "$2.3B", percentage: 45 },
                    { country: "Singapore", amount: "$1.9B", percentage: 37 }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-6 bg-crypto-green/20 rounded flex items-center justify-center">
                          <span className="text-xs text-crypto-green font-bold">{index + 1}</span>
                        </div>
                        <span className="text-white font-medium">{item.country}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-32 bg-gray-800 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-crypto-green to-crypto-green-light h-2 rounded-full transition-all duration-1000"
                            style={{ width: isVisible ? `${item.percentage}%` : '0%' }}
                          ></div>
                        </div>
                        <span className="text-crypto-green font-bold text-sm min-w-16">{item.amount}</span>
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

export default CryptoHistorySection;
