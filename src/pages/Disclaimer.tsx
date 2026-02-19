import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-[#73E212]/20">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link to="/">
                <Button variant="ghost" className="text-[#73E212] hover:text-[#73E212]/80">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <img 
                src="https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750696761/TS_LOGO_juw9he.png" 
                alt="TradeSuccess.VIP Logo" 
                className="h-8 w-auto"
              />
              <span className="text-[#73E212] font-bold text-lg">TradeSuccess.VIP</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-invert prose-lg max-w-none text-sm">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#73E212]">Disclaimer</h1>

          <div className="bg-black/40 border border-[#73E212]/20 rounded-lg p-6 mb-6">
            <p>The information provided on this website is for educational and informational purposes only and should not be construed as financial, investment, or trading advice. Trading or investing in cryptocurrencies carries a high level of risk and may not be suitable for every investor. You should carefully consider your experience level, investment objectives, and seek independent financial advice before acting on any information provided here.</p>

            <p className="mt-4">TradeSuccess.VIP does not guarantee profits, income, or specific results from participation in any of our programs or the use of our tools. Past performance is not indicative of future results.</p>

            <p className="mt-4">By using this website, you acknowledge and agree that TradeSuccess.VIP, its founders, and affiliates shall not be held liable for any direct or indirect financial losses or damages resulting from reliance on the content, products, or services provided.</p>

            <p className="mt-4">This site is not affiliated with, sponsored by, or endorsed by Meta Platforms Inc. (Facebook, Instagram), Google LLC, YouTube, Binance, or any other financial or social media platform. All trademarks and logos are the property of their respective owners.</p>

            <p className="mt-4">Cryptocurrency education and services provided through this website are intended only for users in regions where such activities are lawful and compliant with local regulations.</p>
          </div>

          <div className="text-center mt-6">
            <Link to="/">
              <Button className="bg-[#73E212] text-black hover:bg-[#73E212]/90">Return to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
