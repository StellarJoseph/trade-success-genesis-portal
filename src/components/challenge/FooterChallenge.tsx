import React from 'react';

const FooterChallenge: React.FC = () => {
  return (
    <footer className="bg-black border-t border-[#222] mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <img src="https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750696761/TS_LOGO_juw9he.png" alt="logo" className="w-10 h-10" />
              <div>
                <div className="text-white font-semibold">TradeSuccess.VIP</div>
                <div className="text-gray-400 text-sm">Finish 2025 strong.</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://wa.me/2347048251394" className="bg-[#73E212] text-black px-4 py-2 rounded-full font-semibold">WhatsApp</a>
            <a href="/disclaimer" className="text-gray-400 text-sm hover:text-[#87e64c]">Disclaimer</a>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} TradeSuccess.VIP. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default FooterChallenge;
