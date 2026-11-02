import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { translations, type Language } from '../i18n/translations';
import { LanguageContext } from './useLanguage';

const STORAGE_KEY = 'language';

const getInitialLanguage = (): Language => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'ar') return saved;
  } catch {
    /* storage unavailable, fall back to default */
  }
  return 'en';
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.title = translations[language].meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', translations[language].meta.description);
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      /* ignore */
    }
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  }, []);

  const value = useMemo(
    () => ({ language, toggleLanguage, translations: translations[language] }),
    [language, toggleLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
