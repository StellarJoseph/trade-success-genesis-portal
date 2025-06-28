import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { 
      name: 'Resources', 
      href: '#',
      submenu: [
        { name: 'FAQs', href: '/faq' },
        { name: 'Blog', href: '/blog' }
      ]
    },
    { 
      name: 'Shop', 
      href: '#',
      submenu: [
        { name: 'Advisory', href: '/consultancy' },
        { name: 'Courses', href: '/courses' },
        { name: 'Merch', href: '/merchandise' }
      ]
    },
    { name: 'Contact', href: '/contact' }
  ];

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-crypto-green/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://res.cloudinary.com/dt7mxnrxo/image/upload/v1750696761/TS_LOGO_juw9he.png" 
              alt="TradeSuccess.VIP Logo" 
              className="w-10 h-10"
            />
            <span className="text-xl font-bold font-general text-gradient">
              TradeSuccess.VIP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div>
                    <button
                      className="flex items-center space-x-1 text-white hover:text-crypto-green transition-colors duration-300 font-medium"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    <div 
                      className="absolute top-full left-0 mt-2 w-48 bg-crypto-darker border border-crypto-green/20 rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-white hover:text-crypto-green hover:bg-crypto-green/10 transition-colors duration-300"
                          onClick={closeDropdowns}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-white hover:text-crypto-green transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-crypto-green text-black hover:bg-crypto-green hover:text-crypto-dark">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="glow-button text-crypto-dark font-semibold">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-crypto-green/20">
            <nav className="flex flex-col space-y-4 mt-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full text-white hover:text-crypto-green transition-colors duration-300 font-medium"
                        onClick={() => handleDropdownToggle(item.name)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown size={16} className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-2 border-l border-crypto-green/20 pl-4">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block text-gray-300 hover:text-crypto-green transition-colors duration-300"
                              onClick={closeDropdowns}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-white hover:text-crypto-green transition-colors duration-300 font-medium"
                      onClick={closeDropdowns}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Link to="/login">
                  <Button variant="outline" className="w-full border-crypto-green text-black hover:bg-crypto-green hover:text-crypto-dark">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="w-full glow-button text-crypto-dark font-semibold">
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
