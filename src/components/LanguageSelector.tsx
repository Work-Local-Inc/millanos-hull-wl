import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSelector = () => {
  const { currentLanguage, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-sm font-medium hover:bg-gray-100 px-2 py-1 h-auto"
    >
      {currentLanguage === 'fr' ? (
        <span className="text-gray-600 hover:text-red-600">🇺🇸 EN</span>
      ) : (
        <span className="text-gray-600 hover:text-red-600">🇫🇷 FR</span>
      )}
    </Button>
  );
};

export default LanguageSelector;