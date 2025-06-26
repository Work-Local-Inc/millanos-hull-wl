
import { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

const StickyOrderButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight / 3;
      const currentScrollY = window.scrollY;
      
      setIsVisible(currentScrollY > scrollThreshold);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);
    
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg transition-all duration-300 ease-in-out ${
      isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-2">
        <a 
          href="https://houseoflasagna.ca/?p=menu" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-base font-bold transition-colors text-center inline-flex items-center justify-center shadow-lg"
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          Order Now
        </a>
      </div>
    </div>
  );
};

export default StickyOrderButton;
