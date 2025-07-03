import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface LanguageState {
  currentLanguage: Language;
}

interface LanguageContextType extends LanguageState {
  toggleLanguage: () => void;
  setLanguage: (language: Language) => void;
}

type LanguageAction = 
  | { type: 'SET_LANGUAGE'; payload: Language }
  | { type: 'TOGGLE_LANGUAGE' };

const languageReducer = (state: LanguageState, action: LanguageAction): LanguageState => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { ...state, currentLanguage: action.payload };
    case 'TOGGLE_LANGUAGE':
      return { ...state, currentLanguage: state.currentLanguage === 'fr' ? 'en' : 'fr' };
    default:
      return state;
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getInitialLanguage = (): Language => {
  // Check localStorage first
  const savedLanguage = localStorage.getItem('milano-language') as Language;
  if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
    return savedLanguage;
  }
  
  // Default to French as requested
  return 'fr';
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(languageReducer, {
    currentLanguage: getInitialLanguage()
  });

  const toggleLanguage = () => {
    dispatch({ type: 'TOGGLE_LANGUAGE' });
  };

  const setLanguage = (language: Language) => {
    dispatch({ type: 'SET_LANGUAGE', payload: language });
  };

  // Save to localStorage whenever language changes
  useEffect(() => {
    localStorage.setItem('milano-language', state.currentLanguage);
  }, [state.currentLanguage]);

  return (
    <LanguageContext.Provider value={{
      ...state,
      toggleLanguage,
      setLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};