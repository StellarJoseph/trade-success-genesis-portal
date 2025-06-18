
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-crypto-green/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-crypto-green to-crypto-green-light rounded-lg flex items-center justify-center">
              <span className="text-crypto-dark font-bold text-xl">T</span>
            </div>
            <span className="text-xl font-bold font-general text-gradient">
              TradeSuccess.VIP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white hover:text-crypto-green transition-colors duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-crypto-green text-crypto-green hover:bg-crypto-green hover:text-crypto-dark">
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
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-white hover:text-crypto-green transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Link to="/login">
                  <Button variant="outline" className="w-full border-crypto-green text-crypto-green hover:bg-crypto-green hover:text-crypto-dark">
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
