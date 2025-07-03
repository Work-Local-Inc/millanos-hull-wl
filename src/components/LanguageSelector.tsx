import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSelector = () => {
  const { currentLanguage, toggleLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleLanguage}
        className="text-sm font-medium hover:bg-gray-100 px-2 py-1 h-auto"
      >
        <span className={`mr-1 ${currentLanguage === 'fr' ? 'font-bold text-red-600' : 'text-gray-500'}`}>
          🇫🇷 FR
        </span>
        <span className="text-gray-300">|</span>
        <span className={`ml-1 ${currentLanguage === 'en' ? 'font-bold text-red-600' : 'text-gray-500'}`}>
          🇺🇸 EN
        </span>
      </Button>
    </div>
  );
};

export default LanguageSelector;