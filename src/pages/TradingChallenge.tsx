import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
const placeholder = "/placeholder.svg";

const TradingChallenge = () => (
  <div className="min-h-screen bg-[#0B0B23] text-white">
    <Helmet>
      <title>Trading Challenge (40-Day Profit Plan) | TradeSuccess</title>
      <meta name="description" content="Join our 40-day trading challenge: one expert signal per day, aiming for 2200%–4000% profit growth. Are you ready for the challenge?" />
      <meta name="keywords" content="trading challenge, 40-day profit plan, expert signal, profit growth, TradeSuccess" />
    </Helmet>
    <Header />
    <main className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Trading Challenge</span> <span className="text-[#73E212]">(40-Day Profit Plan)</span>
          </h1>
          <img src={placeholder} alt="Trading Challenge" className="mx-auto mb-8 w-full max-w-md rounded-2xl shadow-lg" />
          <p className="text-xl text-gray-300 mb-8">
            Take part in our signature 40-day challenge! Receive one expert signal per day and aim for <span className="text-[#73E212] font-bold">2200%–4000%</span> profit growth. Are you ready to transform your trading journey?
          </p>
          <Button className="!bg-[#73E212] !text-black hover:!bg-white hover:!text-[#73E212] font-semibold text-lg px-8 py-4 transition-all duration-300">
            Join the Challenge
          </Button>
        </div>
      </section>
      <section className="py-16 bg-[#131240] mt-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <img src={placeholder} alt="Challenge Format" className="w-full max-w-sm rounded-xl shadow-lg" />
          <div className="flex-1 text-left">
            <h2 className="text-3xl font-bold mb-4 text-[#73E212]">Challenge Format</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>40 days, 1 expert signal per day</li>
              <li>Daily support and performance tracking</li>
              <li>Goal: 2200%–4000% profit growth</li>
              <li>Community leaderboard and rewards</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default TradingChallenge;