
import { Link } from 'react-router-dom';
import { Phone, ArrowLeft } from 'lucide-react';

interface MenuCallToActionProps {
  phone?: string;
}

export const MenuCallToAction = ({ phone }: MenuCallToActionProps) => {
  return (
    <div className="bg-red-600 text-white rounded-lg p-8 text-center shadow-lg animate-fadeInUp">
      <h3 className="text-2xl font-bold mb-4">Ready to Order?</h3>
      <p className="text-lg mb-6 opacity-90">Call us now or visit our restaurant for the full experience</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href={`tel:${phone}`}
          className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
        >
          <Phone className="h-4 w-4 mr-2" />
          Call {phone}
        </a>
        <Link 
          to="/"
          className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};
