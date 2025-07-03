import { fr } from './fr';
import { en } from './en';
import { Language } from '../contexts/LanguageContext';

export const translations = {
  fr,
  en
};

export type TranslationKey = keyof typeof fr;

export const useTranslation = (language: Language) => {
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if French translation is missing
        if (language === 'fr') {
          let fallbackValue: any = translations.en;
          for (const fallbackKey of keys) {
            if (fallbackValue && typeof fallbackValue === 'object' && fallbackKey in fallbackValue) {
              fallbackValue = fallbackValue[fallbackKey];
            } else {
              return key; // Return the key if no translation found
            }
          }
          return fallbackValue;
        }
        return key; // Return the key if no translation found
      }
    }
    
    return value || key;
  };

  return { t };
};