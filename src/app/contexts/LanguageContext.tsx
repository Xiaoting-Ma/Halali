import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = {
  code: string;
  name: string;
  nativeName: string;
};

export const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia' },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
];

type LanguageContextType = {
  currentLanguage: Language;
  setLanguage: (code: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const setLanguage = (code: string) => {
    const language = languages.find((lang) => lang.code === code);
    if (language) {
      setCurrentLanguage(language);
      // Store in localStorage for persistence
      localStorage.setItem('halali-language', code);
      // Set document direction for RTL languages
      if (code === 'ar' || code === 'ur') {
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.dir = 'ltr';
      }
    }
  };

  // Initialize language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('halali-language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}