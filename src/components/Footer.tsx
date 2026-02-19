const Footer = () => {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'AI Trading Bot', href: '/services' },
        { name: 'VIP Signals', href: '/services' },
        { name: 'Portfolio Management', href: '/services' },
        { name: 'Trade Challenge', href: '/services' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Market Analysis', href: '/analysis' },
        { name: 'Education', href: '/education' },
        { name: 'API Documentation', href: '/docs' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/support' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Live Chat', href: '#' },
        { name: 'Community', href: '/community' }
      ]
    }
  ];

  return (
    <footer className="border-t border-crypto-green/20 bg-crypto-darker/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750696761/TS_LOGO_juw9he.png" 
                alt="TradeSuccess.VIP Logo" 
                className="w-10 h-10"
              />
              <span className="text-xl font-bold font-general text-gradient">
                TradeSuccess.VIP
              </span>
            </div>
            
            <p className="text-gray-400 mb-6">
              Your premier destination for cryptocurrency trading, investment, and financial growth.
            </p>

            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Instagram', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-crypto-purple/50 rounded-lg flex items-center justify-center hover:bg-crypto-green hover:text-crypto-dark transition-colors"
                >
                  <span className="text-xs">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold font-general mb-4 text-white">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-crypto-green transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Short transparency line for ad approval / quick notice */}
        <div className="w-full text-center mt-6 mb-2">
          <p className="text-xs text-gray-400">For educational purposes only. Not financial advice. This site is not affiliated with Meta or Google.</p>
        </div>

        </div>{/* end .container */}

        {/* Full-width Disclaimer section */}
        <div className="w-full bg-transparent px-4 md:px-8 lg:px-16">
          <div className="max-w-[1400px] mx-auto py-8">
            <div className="text-sm text-gray-300 text-justify leading-relaxed">
              <h4 className="text-white font-semibold mb-2">Disclaimer:</h4>
              <p className="mb-2">The information provided on this website is for educational and informational purposes only and should not be construed as financial, investment, or trading advice. Trading or investing in cryptocurrencies carries a high level of risk and may not be suitable for every investor. You should carefully consider your experience level, investment objectives, and seek independent financial advice before acting on any information provided here.</p>

              <p className="mb-2">TradeSuccess.VIP does not guarantee profits, income, or specific results from participation in any of our programs or the use of our tools. Past performance is not indicative of future results.</p>

              <p className="mb-2">By using this website, you acknowledge and agree that TradeSuccess.VIP, its founders, and affiliates shall not be held liable for any direct or indirect financial losses or damages resulting from reliance on the content, products, or services provided.</p>

              <p className="mb-2">This site is not affiliated with, sponsored by, or endorsed by Meta Platforms Inc. (Facebook, Instagram), Google LLC, YouTube, Binance, Bybit, or any other financial or social media platform. All trademarks and logos are the property of their respective owners.</p>

              <p className="mb-0">Cryptocurrency education and services provided through this website are intended only for users in regions where such activities are lawful and compliant with local regulations.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-crypto-green/20 pt-8 mt-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 TradeSuccess.VIP. All rights reserved.
              </div>
              
              <div className="flex space-x-6 text-sm">
                <a href="/privacy" className="text-gray-400 hover:text-crypto-green transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-crypto-green transition-colors">
                  Terms of Service
                </a>
                <a href="/cookies" className="text-gray-400 hover:text-crypto-green transition-colors">
                  Cookie Policy
                </a>
                <a href="/disclaimer" className="text-gray-400 hover:text-crypto-green transition-colors">
                  Disclaimer
                </a>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
