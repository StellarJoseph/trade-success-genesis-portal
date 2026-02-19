import React, { useEffect, useState } from 'react';

const CountdownCTA: React.FC = () => {
  // Countdown target: Jan 15, 2026 (UTC)
  const target = new Date('2026-01-15T00:00:00Z').getTime();
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime();
      const diff = Math.max(target - now, 0);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="rounded-xl p-8 bg-gradient-to-br from-[#131240] to-black text-center">
      <h2 className="text-3xl font-bold text-[#73E212] mb-4">Challenge Begins Soon — Countdown to Jan 15 2026</h2>
      <div className="text-4xl font-extrabold text-[#73E212] mb-6">{time}</div>
      <a href="https://wa.me/2347048251394" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#73E212] text-black px-8 py-3 rounded-full font-semibold shadow-lg">Reserve My Spot</a>
    </section>
  );
};

export default CountdownCTA;
