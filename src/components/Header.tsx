import { useState } from 'react';
import { Phone, Menu, X, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { restaurantConfig } from '@/config/restaurantConfig';

interface HeaderProps {
  currentPage?: string;
}

const Header = ({ currentPage }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              src={restaurantConfig.branding.logoPath} 
              alt="Milano Pizzeria Logo" 
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
          </nav>

          {/* Order Actions Group - Desktop */}
          <div className="hidden md:flex items-center bg-gray-50 rounded-lg p-2 space-x-3">
            <a 
              href={restaurantConfig.externalUrls.menuOrdering} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-red-600 hover:bg-red-700 text-white px-4 lg:px-6 py-2.5 rounded-lg font-semibold transition-colors inline-flex items-center shadow-md"
            >
              <ExternalLink className="h-4 w-4 mr-1 lg:mr-2" />
              <span className="lg:hidden">Order</span>
              <span className="hidden lg:inline">Order Menu</span>
            </a>
            <div className="flex items-center">
              <Phone className="h-4 w-4 text-red-600 mr-2" />
              <a 
                href={`tel:${restaurantConfig.phone}`} 
                className="text-lg font-bold text-red-600 hover:text-red-700 transition-colors"
              >
                {restaurantConfig.phone}
              </a>
            </div>
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
                href={restaurantConfig.externalUrls.menuOrdering} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block mx-3 mt-3 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center shadow-md"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Order Menu
              </a>
              <div className="px-3 py-3 border-t border-gray-200 mt-4">
                <a 
                  href={`tel:${restaurantConfig.phone}`} 
                  className="flex items-center justify-center text-red-600 font-bold bg-red-50 py-2 px-4 rounded-lg hover:bg-red-100 transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  {restaurantConfig.phone}
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
