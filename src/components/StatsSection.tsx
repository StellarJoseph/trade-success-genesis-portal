import { useState, useEffect } from 'react';

const StatsSection = () => {
  const [counters, setCounters] = useState({
    users: 0,
    countries: 0,
    trades: 0,
    retention: 0,
    volume: 0
  });

  const finalValues = {
    users: 6800,
    countries: 19,
    trades: 980000,
    retention: 94,
    volume: 1200000
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => ({
        users: Math.min(prev.users + finalValues.users / steps, finalValues.users),
        countries: Math.min(prev.countries + finalValues.countries / steps, finalValues.countries),
        trades: Math.min(prev.trades + finalValues.trades / steps, finalValues.trades),
        retention: Math.min(prev.retention + finalValues.retention / steps, finalValues.retention),
        volume: Math.min(prev.volume + finalValues.volume / steps, finalValues.volume)
      }));
    }, stepDuration);

    setTimeout(() => {
      clearInterval(timer);
      setCounters(finalValues);
    }, duration);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M+';
    } else if (num >= 1000) {
      return Math.floor(num / 1000) + 'K+';
    }
    return num + '+';
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="plasma-border rounded-2xl p-1 md:p-2">
        {/* Dark green faded rectangle background */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
          <div className="w-11/12 h-5/6 bg-[#145c1b] opacity-40 rounded-3xl"></div>
          {/* Black overlay to fade out the gradient color */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="text-center animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-[#73E212] mb-2">
                {formatNumber(Math.floor(counters.users))}
              </div>
              <div className="text-white text-lg">Total Users</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-bold text-[#73E212] mb-2">
                {Math.floor(counters.countries)}+
              </div>
              <div className="text-white text-lg">Countries Served</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-bold text-[#73E212] mb-2">
                {formatNumber(Math.floor(counters.trades))}
              </div>
              <div className="text-white text-lg">Trades Executed</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl md:text-5xl font-bold text-[#8fff3f] mb-2 drop-shadow-lg">
                {Math.floor(counters.retention)}%
              </div>
              <div className="text-white text-lg">Client Retention Rate</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl md:text-5xl font-bold text-[#73E212] mb-2">
                ${formatNumber(Math.floor(counters.volume))}
              </div>
              <div className="text-white text-lg">Traded Volume</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
