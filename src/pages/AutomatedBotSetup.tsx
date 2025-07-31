import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';

const placeholder = "/placeholder.svg";

const AutomatedBotSetup = () => (
  <div className="min-h-screen bg-[#0B0B23] text-white">
    <Helmet>
      <title>Automated Trading Bot Setup | TradeSuccess</title>
      <meta name="description" content="We configure and integrate reliable trading bots with your preferred exchange (Binance, Bybit, etc.) for automated, stress-free crypto trading." />
      <meta name="keywords" content="automated trading, trading bot setup, crypto bot, Binance, Bybit, TradeSuccess" />
    </Helmet>
    <Header />
    <main className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Automated</span> <span className="text-[#73E212]">Trading Bot Setup</span>
          </h1>
          <img src={placeholder} alt="Automated Trading Bot" className="mx-auto mb-8 w-full max-w-md rounded-2xl shadow-lg" />
          <p className="text-xl text-gray-300 mb-8">
            We set up and integrate reliable trading bots with your favorite exchanges like Binance and Bybit. Enjoy hands-free, automated trading with expert configuration and ongoing support.
          </p>
          <Button className="!bg-[#73E212] !text-black hover:!bg-white hover:!text-[#73E212] font-semibold text-lg px-8 py-4 transition-all duration-300">
            Automate My Trading
          </Button>
        </div>
      </section>
      <section className="py-16 bg-[#131240] mt-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <img src={placeholder} alt="Bot Integration" className="w-full max-w-sm rounded-xl shadow-lg" />
          <div className="flex-1 text-left">
            <h2 className="text-3xl font-bold mb-4 text-[#73E212]">How It Works</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>We recommend and configure the best bots for your needs</li>
              <li>Integration with Binance, Bybit, and more</li>
              <li>Ongoing monitoring and support</li>
              <li>Automated trading, 24/7</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default AutomatedBotSetup;