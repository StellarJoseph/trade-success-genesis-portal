import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
const placeholder = "/placeholder.svg";

const CryptoConsulting = () => (
  <div className="min-h-screen bg-[#0B0B23] text-white">
    <Helmet>
      <title>Crypto Consulting & Strategy | TradeSuccess</title>
      <meta name="description" content="One-on-one crypto strategy sessions. We help you analyze your portfolio, enter the market smartly, and design long-term profit strategies." />
      <meta name="keywords" content="crypto consulting, strategy session, portfolio analysis, profit strategy, TradeSuccess" />
    </Helmet>
    <Header />
    <main className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Crypto Consulting</span> <span className="text-[#73E212]">& Strategy</span>
          </h1>
          <img src={placeholder} alt="Crypto Consulting" className="mx-auto mb-8 w-full max-w-md rounded-2xl shadow-lg" />
          <p className="text-xl text-gray-300 mb-8">
            Book a one-on-one session with our experts. We’ll help you analyze your portfolio, enter the market smartly, and design a long-term strategy for consistent profits.
          </p>
          <Button className="!bg-[#73E212] !text-black hover:!bg-white hover:!text-[#73E212] font-semibold text-lg px-8 py-4 transition-all duration-300">
            Book a Strategy Session
          </Button>
        </div>
      </section>
      <section className="py-16 bg-[#131240] mt-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <img src={placeholder} alt="Strategy Session" className="w-full max-w-sm rounded-xl shadow-lg" />
          <div className="flex-1 text-left">
            <h2 className="text-3xl font-bold mb-4 text-[#73E212]">What You Get</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Personalized portfolio analysis</li>
              <li>Market entry and exit strategies</li>
              <li>Long-term profit planning</li>
              <li>Direct access to expert advisors</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default CryptoConsulting;