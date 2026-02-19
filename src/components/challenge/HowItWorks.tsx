import React from 'react';

const steps = [
  { title: 'Setup Accounts', desc: 'Create accounts and connect your tracker.' },
  { title: 'Receive Daily Signals', desc: 'Signals arrive via WhatsApp/Telegram.' },
  { title: 'Execute (Manual or Bot)', desc: 'Tap-to-execute or use our bot for automation.' },
  { title: 'Track Growth Over 40 Days', desc: 'Daily progress tracking and reviews.' }
];

const HowItWorks: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white text-center mb-8">How It Works</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
        {steps.map((s, idx) => (
          <div key={s.title} className="bg-[#131240] rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-[#0b0b12] mx-auto flex items-center justify-center text-[#87e64c] font-bold mb-4">{idx + 1}</div>
            <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
            <p className="text-gray-400 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
