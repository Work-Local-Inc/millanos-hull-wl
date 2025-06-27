
import { useState } from 'react';
import { Phone, Menu, X, ExternalLink, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  currentPage?: string;
}

const Header = ({ currentPage }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const siteInfo = {
    phone: "(613) 728-9700"
  };

  const navigationItems = [
    { name: 'About', path: '/about' },
    { name: 'Delivery Areas', path: '/delivery-areas', shortName: 'Delivery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Late Night Service', path: '/late-night-service', shortName: 'Late Night' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/560a134e-075e-40b0-bb51-290d54d753bb.png" 
              alt="House of Lasagna & Pizza Logo" 
              className="h-16 w-auto object-contain" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navigationItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path} 
                className={`font-medium transition-colors ${
                  currentPage === item.name.toLowerCase().replace(' ', '-')
                    ? 'text-red-600'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                <span className="lg:hidden">{item.shortName || item.name}</span>
                <span className="hidden lg:inline">{item.name}</span>
              </Link>
            ))}
            <a 
              href="https://www.instagram.com/h.o.l.ottawa/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-red-600 font-medium transition-colors items-center hidden lg:flex"
            >
              <Instagram className="h-4 w-4 mr-1" />
              Instagram
            </a>
            <a 
              href="https://houseoflasagna.ca/?p=menu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-red-600 hover:bg-red-700 text-white px-4 lg:px-6 py-2.5 rounded-lg font-semibold transition-colors inline-flex items-center shadow-md"
            >
              <ExternalLink className="h-4 w-4 mr-1 lg:mr-2" />
              <span className="lg:hidden">Order</span>
              <span className="hidden lg:inline">Order Menu</span>
            </a>
          </nav>

          {/* Phone Number - Desktop */}
          <div className="hidden md:flex items-center">
            <Phone className="h-4 w-4 text-red-600 mr-2" />
            <a 
              href={`tel:${siteInfo.phone}`} 
              className="text-lg font-bold text-red-600 hover:text-red-700 transition-colors"
            >
              {siteInfo.phone}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 focus:outline-none transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2 bg-white border-t border-gray-200">
              {navigationItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.path} 
                  className={`block px-3 py-2 font-medium rounded-md transition-colors ${
                    currentPage === item.name.toLowerCase().replace(' ', '-')
                      ? 'text-red-600 bg-red-50'
                      : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a 
                href="https://www.instagram.com/h.o.l.ottawa/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 font-medium rounded-md transition-colors flex items-center"
              >
                <Instagram className="h-4 w-4 mr-2" />
                Instagram
              </a>
              <a 
                href="https://houseoflasagna.ca/?p=menu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block mx-3 mt-3 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center shadow-md"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Order Menu
              </a>
              <div className="px-3 py-3 border-t border-gray-200 mt-4">
                <a 
                  href={`tel:${siteInfo.phone}`} 
                  className="flex items-center justify-center text-red-600 font-bold bg-red-50 py-2 px-4 rounded-lg hover:bg-red-100 transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  {siteInfo.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
