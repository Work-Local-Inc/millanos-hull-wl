
import { useEffect } from 'react';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Menu = () => {
  useEffect(() => {
    // Optional: Auto-redirect after a few seconds
    const timer = setTimeout(() => {
      window.open('https://houseoflasagna.ca/?p=menu', '_blank');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <Link to="/" className="inline-flex items-center text-red-600 hover:text-red-700 mb-6">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Browse Our Menu</h2>
            <p className="text-gray-600 mb-6">
              View our full menu and place your order through our secure ordering system
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-red-600 mb-6">
              <ExternalLink className="h-5 w-5" />
              <span>houseoflasagna.ca</span>
            </div>
            
            <a 
              href="https://houseoflasagna.ca/?p=menu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center mb-4"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              View Full Menu & Order
            </a>
            
            <p className="text-sm text-gray-500">
              You'll be redirected automatically in a few seconds, or 
              <a 
                href="https://houseoflasagna.ca/?p=menu" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-700 ml-1"
              >
                click here to order now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
