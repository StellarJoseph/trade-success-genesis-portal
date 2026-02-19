import React, { useState } from 'react';

const faqs = [
  {
    q: 'Do I need trading experience?',
    a: 'No experience is needed. The 40-Day Challenge was designed especially for beginners, while still supporting intermediate and advanced traders. We remove the confusion in the crypto market and give you a simple, clear structure to follow every day. Instead of spending months studying charts, you get guided steps that shorten your learning curve and help you move from confusion to clarity and from clarity to consistent profit.'
  },
  {
    q: 'Do I need any special software?',
    a: 'No special software is required. Everything works through simple tools you already use: WhatsApp for communication, Telegram for the trading bot, and Bybit for executing Futures trades. When a memecoin signal is announced, you execute it through the Telegram bot. When a Futures signal is announced, you place the trade on Bybit. Setup is simple, and we provide complete onboarding videos to guide you through everything.'
  },
  {
    q: 'What if I\'m busy or have a full-time job?',
    a: 'The challenge is designed for busy people. Daily actions take only a few minutes. We recommend turning on priority alerts on WhatsApp or Telegram so you don\'t miss notifications.'
  },
  {
    q: 'Is this crypto trading?',
    a: 'Yes, but simplified. You don\'t need to research charts or study coins. All analysis is done using Precision AI tools and proven trading strategies. Your role is to follow instructions, remain consistent for 40 days, and watch your progress grow.'
  },
  {
    q: 'Is this safe?',
    a: 'Yes. You maintain full control over your account at all times. Nothing is traded for you. You execute every trade yourself. We do have a separate assisted portfolio management service for investors who want full hands-off management, but the 40-Day Challenge is completely hands-on so you learn and grow.'
  },
  {
    q: 'How many trades per day?',
    a: 'You will receive 1 to 3 simple trades or trade directions daily. Each one contributes to hitting the overall 40-day target of 400%+ cumulative growth.'
  },
  {
    q: 'What is the goal of the challenge?',
    a: 'The goal is to help you build consistency, structure, and momentum toward your financial goals. In simple terms: we want to help you finally start making real money from the crypto market without confusion.'
  },
  {
    q: 'Is this a get-rich-quick system?',
    a: 'No. The challenge is based on discipline, structure, realistic growth, and consistent steps. Results can be impressive, but they come from following proven strategies and staying focused — not from shortcuts or hype.'
  },
  {
    q: 'Can I join from any country?',
    a: 'Yes. Anyone with a phone and internet connection can join, regardless of country.'
  },
  {
    q: 'How much capital do I need?',
    a: 'You can start with any capital you\'re comfortable with. We trade in USDT and Solana, based on real dollar value. Whether you start with $50, $100, or more, the system works the same. Some trades will win and some will lose — that\'s normal — but our long-term strategy is designed to keep you in a positive net result.'
  },
  {
    q: 'What makes this different from other programs?',
    a: 'We combine Precision AI tools, advanced analysis bots, real trading experience, clear financial management structure, simple guided actions, and a strong support community. The result is a system that makes trading accessible and profitable for anyone.'
  },
  {
    q: 'What happens if I miss a day?',
    a: 'You can continue the next day without pressure. However, do not rush to enter late trades. If you discover a signal late, ask an admin if it\'s still valid before executing.'
  },
  {
    q: 'Will I receive help if I get confused?',
    a: 'Yes. Our community managers and support team are available to guide you, answer questions, and help you stay on track throughout the challenge.'
  },
  {
    q: 'Does this require long-term commitment?',
    a: 'No. This is a 40-day experience you complete at your own pace. After the challenge, you may choose to join our full trading community for long-term support and continued growth.'
  },
  {
    q: 'What do I get after joining?',
    a: 'You get everything you need to succeed, including access to a focused private community, daily trade signals and directions, account setup guides, risk management support, Precision AI tools, direct guidance, daily accountability, and a clear, structured map to consistent progress.'
  }
];


const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section>
      <h2 className="text-3xl font-bold text-white text-center mb-8">Got Questions? We’ve Got You.</h2>
      <div className="space-y-3 max-w-4xl mx-auto">
        {faqs.map((f, i) => (
          <div key={i} className="bg-[#100F1A] rounded-xl p-4">
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left flex justify-between items-center">
              <span className="text-white font-semibold">{f.q}</span>
              <span className="text-gray-400">{open === i ? '-' : '+'}</span>
            </button>
            {open === i && <div className="mt-3 text-gray-300 text-sm">{f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
