import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="container mx-auto px-6 py-20 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 mb-6 text-sm text-gray-300">40-Day Precision Trading</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">The 40-Day Precision Trading Challenge</h1>
          <p className="text-lg text-gray-300 max-w-2xl mb-8">Finish 2025 Strong. Start 2026 Ahead. Daily exact-entry signals, defensive take-profits, and live guidance.</p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
            <a href="#join" className="inline-flex items-center justify-center bg-[#73E212] text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition transform hover:-translate-y-0.5">Join the Challenge</a>
            <a href="#learn" className="inline-flex items-center justify-center border border-[#232333] text-gray-300 px-6 py-3 rounded-full hover:border-[#87e64c] transition">Learn More</a>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-sm mx-auto lg:mx-0 text-center">
            <div>
              <div className="text-2xl font-bold text-white">40</div>
              <div className="text-sm text-gray-400">Days</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">AI</div>
              <div className="text-sm text-gray-400">Signals</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">Risk</div>
              <div className="text-sm text-gray-400">Managed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">Live</div>
              <div className="text-sm text-gray-400">Sessions</div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-full max-w-lg bg-[#100F1A] rounded-xl p-6 shadow-2xl transform hover:scale-101 transition">
            <div className="h-56 bg-gradient-to-br from-[#0b0b12] to-[#131240] rounded-lg flex items-center justify-center text-gray-500">[Animated Dashboard Placeholder]</div>
            <div className="mt-4 text-sm text-gray-400">Live dashboard preview — positions, P&L and alerts.</div>
          </div>
        </div>
      </div>

      {/* subtle background chart overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-transparent to-[#07102a]"></div>
    </header>
  );
};

export default Hero;
