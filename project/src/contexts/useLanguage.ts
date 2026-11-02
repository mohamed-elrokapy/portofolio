import { createContext, useContext } from 'react';
import type { Language, Translations } from '../i18n/translations';

export interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  translations: Translations;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
