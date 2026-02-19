import React, { useEffect, useState } from 'react';
import './40DayChallenge.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UnifiedPricingCard from '@/components/UnifiedPricingCard';

const FortyDayChallenge: React.FC = () => {
  // Countdown target: Jan 15, 2026 (UTC)
  const target = new Date('2026-01-15T00:00:00Z').getTime();
  const [timeString, setTimeString] = useState('');
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const totalDuration = target - new Date().getTime();

    const tick = () => {
      const now = new Date().getTime();
      const distance = Math.max(target - now, 0);

      if (distance <= 0) {
        setTimeString('Challenge Starts Soon!');
        setPercent(100);
        return;
      }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeString(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      const elapsed = totalDuration - distance;
      const pct = Math.min((elapsed / totalDuration) * 100, 100);
      setPercent(isFinite(pct) ? pct : 0);
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* HERO: full-bleed hero with background, overlay and focused CTAs */}
      <section className="relative min-h-[72vh] md:min-h-screen bg-black">
        {/* background image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{ backgroundImage: "url('https://res.cloudinary.com/dt7mxnrxo/image/upload/v1767092556/Hero_iq8ln8.jpg')" }} aria-hidden="true"></div>

        {/* dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

        <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-[72vh] md:min-h-screen">
          <div className="max-w-3xl text-center lg:text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-black/40 mb-6 text-sm text-gray-300">40-Day Challenge • Limited Seats</div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white mb-4">Start 2026 Strong with The 40-Day Challenge</h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6">Powered by the Right Plan, Tools, and Strategy</p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4">
              <a href="https://wa.link/m3ghmo" className="bg-[#73E212] text-black px-8 py-3 rounded-full text-lg font-semibold glow-btn">Join via WhatsApp</a>
              <a href="#countdown" className="border border-[#2a2a3a] text-gray-300 px-6 py-3 rounded-full hover:border-[#73E212]">See Countdown</a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
              <div className="text-left">
                <div className="text-2xl font-bold text-white">40</div>
                <div className="text-sm text-gray-400">Days</div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">AI</div>
                <div className="text-sm text-gray-400">Signals</div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">Risk</div>
                <div className="text-sm text-gray-400">Managed</div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">%200</div>
                <div className="text-sm text-gray-400">profits</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Effortless Trading: exact entry + take profit control */}
      <section className="py-16 px-6 bg-[#07070a]" aria-labelledby="effortless-title">
        <div className="container mx-auto max-w-6xl">
          <h2 id="effortless-title" className="text-2xl md:text-3xl font-extrabold text-white mb-6 text-center">Effortless Trading — Clear Entries & Smart Take-Profit Control</h2>
          <p className="text-lg text-gray-300 mb-10 text-center max-w-3xl mx-auto leading-relaxed">We remove the guesswork by providing precise entry points, layered take-profit levels, and simple risk rules—so you can trade with confidence, even if you’re new.</p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-[#0b0b12] rounded-lg p-8 border border-transparent hover:border-[#2b2b3a]">
              <div className="flex items-start gap-4 mb-3">
                <span className="text-[#73E212] flex-shrink-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="#73E212" strokeWidth="1.5"/><path d="M12 7v5l3 3" stroke="#73E212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <h3 className="text-xl font-semibold text-white">Get Precision Entry Signals</h3>
              </div>
              <p className="text-gray-400">You’ll receive clear, precise trade entries designed to reduce guesswork and unnecessary losses. Every signal comes with a defined entry range, stop-loss, and multiple take-profit levels—so you always know when to enter, when to exit, and how to protect your capital.</p>
            </div>

            <div className="bg-[#0b0b12] rounded-lg p-8 border border-transparent hover:border-[#2b2b3a]">
              <div className="flex items-start gap-4 mb-3">
                <span className="text-[#73E212] flex-shrink-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18" stroke="#73E212" strokeWidth="1.5" strokeLinecap="round"/><path d="M6 8l3-3 3 3" stroke="#73E212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 16l3 3 3-3" stroke="#73E212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <h3 className="text-xl font-semibold text-white">Smart Take-Profit Strategy</h3>
              </div>
              <p className="text-gray-400">We don’t rely on one exit point. You’ll learn and follow a multi-level take-profit approach that allows you to lock in gains along the way while keeping part of your position open for bigger market moves. This helps you grow profits while reducing emotional decisions.</p>
            </div>

            <div className="bg-[#0b0b12] rounded-lg p-8 border border-transparent hover:border-[#2b2b3a]">
              <div className="flex items-start gap-4 mb-3">
                <span className="text-[#73E212] flex-shrink-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3 4 5 1-3 4 1 5-5-2-5 2 1-5-3-4 5-1 3-4z" stroke="#73E212" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none"/><path d="M12 11v5" stroke="#73E212" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="7" r="1" fill="#73E212"/></svg>
                </span>
                <h3 className="text-xl font-semibold text-white">Risk & Position Sizing Guidance</h3>
              </div>
              <p className="text-gray-400">You’ll be guided on how much to risk per trade using simple, easy-to-follow rules. This keeps losses small, protects your capital, and allows your account to grow steadily over the 40 days—without overtrading or gambling.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-[#07070a]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-white mb-6">What Is the 40-Day Challenge?</h2>
          <p className="text-lg text-gray-300 mb-4">The 40-Day Challenge is a guided trading program that combines AI-powered market precision with a disciplined, easy-to-follow trading system—designed to help you build consistency through small, controlled daily trades. It’s not about luck. It’s about following a proven process.</p>

          <p className="text-lg text-gray-300 mb-4">Each day, you’ll receive <span className="text-[#73E212] font-semibold">1–3 clear trading opportunities</span>, supported by <span className="text-[#73E212] font-semibold">Precision AI tools and simple, step-by-step trade directions</span>. You don’t need to analyze charts or figure things out on your own. If you can read and respond to messages on WhatsApp, you can participate.</p>

          <p className="text-lg text-gray-300 mb-4"><span className="text-[#73E212] font-semibold">No complex setup</span> and <span className="text-[#73E212] font-semibold">no prior trading experience required</span>. Your location or background doesn’t matter. The system is built to meet you where you are—and give you a clear structure to follow.</p>

          <p className="text-lg text-gray-300 mb-4">Trades are executed on <span className="text-[#73E212] font-semibold">Bybit (for futures/perpetual contracts)</span> and <span className="text-[#73E212] font-semibold">Telegram (for memecoin trades)</span>. On some days, trades may happen on just one platform; on other days, we may trade on both. Either way, the platforms are <span className="text-[#73E212] font-semibold">easy to use, secure, and reliable</span>—and we guide you every step of the way.</p>

          <p className="text-lg text-gray-300 mb-4">You can participate using your <span className="text-[#73E212] font-semibold">smartphone, tablet, or computer</span>, whichever is most convenient for you. We also offer <span className="text-[#73E212] font-semibold">merchant support</span>, helping members buy crypto, sell profits, and move funds safely. If you’re new, we’ll guide you through <span className="text-[#73E212] font-semibold">account creation, wallet setup, and funding</span>, making the entire process simple and stress-free.</p>

          <p className="text-lg text-gray-300">The goal is simple: <span className="text-[#73E212] font-semibold">clarity, consistency, and measurable progress</span> over 40 focused days.</p>
        </div>
      </section>

      {/* Daily Live Trading Sessions */}
      <section id="sessions" className="py-16 px-6 bg-[#060616]" aria-labelledby="sessions-title">
        <div className="container mx-auto max-w-6xl">
          <h2 id="sessions-title" className="text-3xl font-bold text-white mb-4 text-center">Daily Live Trading Sessions</h2>
          <p className="text-lg text-gray-300 mb-8 text-center max-w-3xl mx-auto">Join live sessions where trades are explained and executed together. Watch the process, ask questions, and learn how to follow the signals in real time.</p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-[#0b0b12] rounded-lg p-8">
              <div className="flex items-start gap-4 mb-3">
                <span className="text-[#73E212] flex-shrink-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="#73E212" strokeWidth="1.5"/><path d="M12 8v5l3 2" stroke="#73E212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <h3 className="text-lg font-semibold text-white mb-0">Morning Setup</h3>
              </div>
              <p className="text-gray-400">Market context, bias, and the top 1–3 setups to watch for the day.</p>
            </div>

            <div className="bg-[#0b0b12] rounded-lg p-8">
              <div className="flex items-start gap-4 mb-3">
                <span className="text-[#73E212] flex-shrink-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" stroke="#73E212" strokeWidth="1.5" strokeLinecap="round"/><path d="M7 8l3-3 3 3" stroke="#73E212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M11 16l3-3 3 3" stroke="#73E212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <h3 className="text-lg font-semibold text-white mb-0">Live Execution</h3>
              </div>
              <p className="text-gray-400">Trades executed with clear entry, stop and multi-level take-profits — join in and execute along with the team.</p>
            </div>

            <div className="bg-[#0b0b12] rounded-lg p-8">
              <div className="flex items-start gap-4 mb-3">
                <span className="text-[#73E212] flex-shrink-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="16" rx="2" stroke="#73E212" strokeWidth="1.5"/><path d="M8 8h8" stroke="#73E212" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 12h8" stroke="#73E212" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </span>
                <h3 className="text-lg font-semibold text-white mb-0">Post-Trade Review</h3>
              </div>
              <p className="text-gray-400">Short debriefs explaining what worked, the logic, and what we’ll do next.</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="https://wa.link/m3ghmo" className="inline-block bg-[#73E212] text-black px-8 py-3 rounded-full text-lg font-semibold glow-btn">Join Live Sessions</a>
          </div>
        </div>
      </section>

      {/* COUNTDOWN */}
      <section id="countdown" className="py-20 px-6 bg-[#09092E] text-center">
        <div className="container mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold text-[#73E212] mb-6">Challenge Begins Soon — Countdown to Jan 15 2026</h2>
          <div className="text-5xl font-bold mb-6">{timeString}</div>
          <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden mb-4">
            <div className="h-4 bg-[#73E212] transition-all" style={{ width: `${percent}%` }}></div>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://wa.link/botvzs" target="_blank" rel="noopener noreferrer" role="button" aria-label="Secure your spot on WhatsApp" className="inline-block bg-[#73E212] text-black px-8 py-3 rounded-full text-lg font-semibold glow-btn mb-2">Secure your spot</a>
            <div className="text-sm text-gray-400">Limited availability</div>
          </div>
        </div>
      </section>

      {/* Trading Access Plans (from homepage) - show only 40-Day Challenge on this page and copy VIP Signals style */}
      <UnifiedPricingCard excludePlans={["VIP Signals", "Trading Bot"]} copyStyleFrom={{ "40-Day Challenge": "VIP Signals" }} centerSingleOnly={true} />

      {/* WHY JOIN — Full-width Landing Section */}
      <section id="join" className="py-24 px-6 bg-[#000000] text-white">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mx-auto max-w-[720px]">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Why You Must Join the 40-Day Challenge</h2>
            <p className="text-lg text-gray-300">This challenge is about more than trading. It’s about building clarity, confidence, and momentum—so you can finish the year strong and step into the next one with direction.</p>
          </div>

          {/* Benefits Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#100F1A] rounded-[16px] p-6 transition-shadow hover:shadow-[0_8px_30px_rgba(99,222,16,0.06)] ring-1 ring-transparent hover:ring-[#63DE10]/20">
              <div className="relative w-full pb-[56.25%] bg-[#0f0e14] rounded-[12px] mb-4 flex items-center justify-center text-sm text-gray-400">Image placeholder — upload later</div>
              <h4 className="text-lg font-semibold text-white mb-2">More Control Over Your Money</h4>
              <div className="h-1 w-12 rounded bg-[#63DE10] bg-opacity-90 mb-3"></div>
              <p className="text-gray-300">Learn how to approach the market with structure and discipline, helping you make smarter financial decisions instead of emotional ones.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#100F1A] rounded-[16px] p-6 transition-shadow hover:shadow-[0_8px_30px_rgba(99,222,16,0.06)] ring-1 ring-transparent hover:ring-[#63DE10]/20">
              <div className="relative w-full pb-[56.25%] bg-[#0f0e14] rounded-[12px] mb-4 flex items-center justify-center text-sm text-gray-400">Image placeholder — upload later</div>
              <h4 className="text-lg font-semibold text-white mb-2">Small Wins That Add Up</h4>
              <div className="h-1 w-12 rounded bg-[#63DE10] bg-opacity-90 mb-3"></div>
              <p className="text-gray-300">Daily, controlled trades designed to build momentum over time—without overwhelm or unnecessary risk.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#100F1A] rounded-[16px] p-6 transition-shadow hover:shadow-[0_8px_30px_rgba(99,222,16,0.06)] ring-1 ring-transparent hover:ring-[#63DE10]/20">
              <div className="relative w-full pb-[56.25%] bg-[#0f0e14] rounded-[12px] mb-4 flex items-center justify-center text-sm text-gray-400">Image placeholder — upload later</div>
              <h4 className="text-lg font-semibold text-white mb-2">A Better Quality of Life</h4>
              <div className="h-1 w-12 rounded bg-[#63DE10] bg-opacity-90 mb-3"></div>
              <p className="text-gray-300">As confidence and stability grow, you gain the freedom to plan, upgrade, and enjoy life with less stress.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#100F1A] rounded-[16px] p-6 transition-shadow hover:shadow-[0_8px_30px_rgba(99,222,16,0.06)] ring-1 ring-transparent hover:ring-[#63DE10]/20">
              <div className="relative w-full pb-[56.25%] bg-[#0f0e14] rounded-[12px] mb-4 flex items-center justify-center text-sm text-gray-400">Image placeholder — upload later</div>
              <h4 className="text-lg font-semibold text-white mb-2">Show Up Stronger for the People Who Matter</h4>
              <div className="h-1 w-12 rounded bg-[#63DE10] bg-opacity-90 mb-3"></div>
              <p className="text-gray-300">Improved financial direction allows you to support your family, contribute more, and be present without constant pressure.</p>
            </div>

            {/* Card 5 */}
            <div className="bg-[#100F1A] rounded-[16px] p-6 transition-shadow hover:shadow-[0_8px_30px_rgba(99,222,16,0.06)] ring-1 ring-transparent hover:ring-[#63DE10]/20">
              <div className="relative w-full pb-[56.25%] bg-[#0f0e14] rounded-[12px] mb-4 flex items-center justify-center text-sm text-gray-400">Image placeholder — upload later</div>
              <h4 className="text-lg font-semibold text-white mb-2">You’re Not Doing This Alone</h4>
              <div className="h-1 w-12 rounded bg-[#63DE10] bg-opacity-90 mb-3"></div>
              <p className="text-gray-300">Join a focused community working toward the same goal—growth, accountability, and shared progress.</p>
            </div>

            {/* Card 6 */}
            <div className="bg-[#100F1A] rounded-[16px] p-6 transition-shadow hover:shadow-[0_8px_30px_rgba(99,222,16,0.06)] ring-1 ring-transparent hover:ring-[#63DE10]/20">
              <div className="relative w-full pb-[56.25%] bg-[#0f0e14] rounded-[12px] mb-4 flex items-center justify-center text-sm text-gray-400">Image placeholder — upload later</div>
              <h4 className="text-lg font-semibold text-white mb-2">Confidence, Discipline, and Direction</h4>
              <div className="h-1 w-12 rounded bg-[#63DE10] bg-opacity-90 mb-3"></div>
              <p className="text-gray-300">Beyond trading, you build habits that carry into other areas of life: focus, patience, and self-belief.</p>
            </div>
          </div>

          {/* Closing Emotional Block */}
          <div className="mt-12 text-center mx-auto max-w-[800px]">
            <h3 className="text-2xl font-bold mb-4">This Is More Than a Challenge — It’s a Reset</h3>
            <p className="text-gray-300 mb-4">Most people don’t fail because they lack effort. They fail because they lack clarity, structure, and guidance.</p>
            <p className="text-gray-300 mb-4">The 40-Day Challenge is built for those who are tired of guessing, tired of slow or inconsistent growth, and tired of watching time pass without real results.</p>
            <p className="text-gray-300 mb-4">Over 40 days, you’re not just following trades—you’re joining a clear system, a daily process, and a community that keeps you on track even when motivation dips. What transforms isn’t just your trading—it’s how you make decisions, stay disciplined, and take decisive action. Send a DM on WhatsApp to discuss your financial goals and see how the 40-Day Challenge can help you achieve them.</p>
            <div className="text-[#63DE10] font-semibold">This could be your turning point.</div>
            <p className="text-gray-300 mb-4">Send a DM on WhatsApp to discuss your financial goals and see how the 40-Day Challenge can help you achieve them.</p>

            {/* CTA */}
            <div className="mt-8">
              <a href="https://wa.link/m3ghmo" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#63DE10] text-black px-8 py-3 rounded-full text-lg font-semibold transform transition hover:scale-105 shadow-[0_8px_30px_rgba(99,222,16,0.12)]">Send a DM on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* Learn to Trade Crypto */}
      <section id="learn" className="py-20 px-6 bg-[#000000] text-center" aria-labelledby="learn-title">
        <div className="container mx-auto max-w-4xl">
          <h3 id="learn-title" className="text-3xl font-bold mb-4 text-[#87e64c]">Learn to Trade Crypto — Practical, Hands-On</h3>
          <p className="text-lg text-gray-300 mb-6">Short, actionable lessons that teach the exact process we use: reading structure, entry timing, take-profit layering and risk control.</p>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="text-left">
              <h4 className="text-lg font-semibold text-white">Core Lessons</h4>
              <p className="text-gray-300 mt-2">Chart structure, trend, and setups simplified into repeatable rules.</p>
            </div>
            <div className="text-left">
              <h4 className="text-lg font-semibold text-white">Signal Execution</h4>
              <p className="text-gray-300 mt-2">How to execute signals with exact entry and protective stops.</p>
            </div>
            <div className="text-left">
              <h4 className="text-lg font-semibold text-white">Community & Q&A</h4>
              <p className="text-gray-300 mt-2">Live feedback loops and post-trade breakdowns to accelerate learning.</p>
            </div>
          </div>

          <a href="https://wa.link/m3ghmo" className="bg-[#73E212] text-black px-10 py-4 rounded-full text-lg font-semibold glow-btn">Join the Challenge</a>
          <p className="text-sm mt-6 text-gray-500">Join the program and follow the process — one clear trade at a time.</p>
        </div>
      </section>

      <Footer />

      {/* page styles intentionally omitted here; use global CSS / tailwind */}
    </div>
  );
};

export default FortyDayChallenge;
