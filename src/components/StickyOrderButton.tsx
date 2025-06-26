
import { ExternalLink } from 'lucide-react';

const StickyOrderButton = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <a 
          href="https://houseoflasagna.ca/?p=menu" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg text-lg font-bold transition-colors text-center inline-flex items-center justify-center shadow-lg"
        >
          <ExternalLink className="h-5 w-5 mr-2" />
          Order Now
        </a>
      </div>
    </div>
  );
};

export default StickyOrderButton;
