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

        <div className="border-t border-crypto-green/20 pt-8 mt-12">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
