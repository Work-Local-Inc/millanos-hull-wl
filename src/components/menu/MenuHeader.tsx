
import { Link } from 'react-router-dom';
import { Phone, ArrowLeft, ExternalLink } from 'lucide-react';

interface MenuHeaderProps {
  businessName?: string;
  phone?: string;
}

export const MenuHeader = ({ businessName, phone }: MenuHeaderProps) => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-red-600 hover:text-red-700 mr-6 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-1" />
              Back
            </Link>
            <img 
              src="/lovable-uploads/560a134e-075e-40b0-bb51-290d54d753bb.png" 
              alt="House of Lasagna & Pizza Logo"
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://houseoflasagna.ca/?p=menu"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Order Online
            </a>
            {phone && (
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-red-600 mr-2" />
                <a href={`tel:${phone}`} className="text-lg font-bold text-red-600 hover:text-red-700 transition-colors">
                  {phone}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
