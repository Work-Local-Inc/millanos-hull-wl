
import { Link } from 'react-router-dom';
import { Phone, ArrowLeft } from 'lucide-react';

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
              src="/lovable-uploads/26f52876-1239-4976-9e98-cf5c07a9d1d3.png" 
              alt="House of Lasagna & Pizza Logo"
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 text-red-600 mr-2" />
            <a href={`tel:${phone}`} className="text-lg font-bold text-red-600 hover:text-red-700 transition-colors">
              {phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
