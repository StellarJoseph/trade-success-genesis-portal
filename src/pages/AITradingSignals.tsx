import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';

const placeholder = "/placeholder.svg";

const AITradingSignals = () => (
  <div className="min-h-screen bg-[#0B0B23] text-white">
    <Helmet>
      <title>AI-Powered Trading Signals | TradeSuccess</title>
      <meta name="description" content="Get 5–7 profitable AI-powered crypto trading signals daily, including entry, stop loss, and take profit. Profit targets from 20% to 500%." />
      <meta name="keywords" content="AI trading signals, crypto signals, profitable signals, entry price, stop loss, take profit, TradeSuccess" />
    </Helmet>
    <Header />
    <main className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">AI-Powered</span> <span className="text-[#73E212]">Trading Signals</span>
          </h1>
          <img src={placeholder} alt="AI Trading Signals" className="mx-auto mb-8 w-full max-w-md rounded-2xl shadow-lg" />
          <p className="text-xl text-gray-300 mb-8">
            Receive 5–7 profitable signals daily, each with clear entry price, stop loss, and take profit levels. Our AI-driven system targets gains between <span className="text-[#73E212] font-bold">20%–500%</span> per trade, helping you maximize your crypto profits with confidence.
          </p>
          <Button className="!bg-[#73E212] !text-black hover:!bg-white hover:!text-[#73E212] font-semibold text-lg px-8 py-4 transition-all duration-300">
            Start Receiving Signals
          </Button>
        </div>
      </section>
      <section className="py-16 bg-[#131240] mt-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <img src={placeholder} alt="AI Signal Example" className="w-full max-w-sm rounded-xl shadow-lg" />
          <div className="flex-1 text-left">
            <h2 className="text-3xl font-bold mb-4 text-[#73E212]">How Our Signals Work</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>AI analyzes market data 24/7 for optimal entries</li>
              <li>Each signal includes entry, stop loss, and take profit</li>
              <li>Profit targets range from 20% to 500%</li>
              <li>Delivered instantly via our secure platform</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default AITradingSignals;