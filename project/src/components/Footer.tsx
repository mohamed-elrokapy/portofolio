import React from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">
              {language === 'en' ? (
                <>
                  &copy; {currentYear} Mohamed El-Sayed. All rights reserved.
                </>
              ) : (
                <>
                  &copy; {currentYear} محمد السيد. جميع الحقوق محفوظة.
                </>
              )}
            </p>
          </div>
          
          <div>
            <p className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
              {language === 'en' ? (
                <>
                  Made with <Heart size={16} className="text-red-500 fill-red-500" /> using React & Tailwind CSS
                </>
              ) : (
                <>
                  تم إنشاؤه بـ <Heart size={16} className="text-red-500 fill-red-500" /> باستخدام React و Tailwind CSS
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;