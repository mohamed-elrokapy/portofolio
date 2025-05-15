import React from "react";
import { Download, ChevronDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Hero: React.FC = () => {
  const { translations, language } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
        <div
          className={`w-full md:w-1/2 ${
            language === "ar" ? "order-1" : "order-none"
          }`}>
          <div className="space-y-6 max-w-xl mx-auto md:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
              {translations.hero.greeting}{" "}
              <span className="text-teal-600 dark:text-teal-400">
                {translations.hero.name}
              </span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {translations.hero.title}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              {translations.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="/Mohamed_Elrokapy_FrontEnd_Developer_CV.pdf"
                download="Mohamed_Elrokapy_FrontEnd_Developer_CV.pdf"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors">
                <Download size={18} />
                {translations.hero.download}
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-teal-600 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 font-medium rounded-lg transition-colors dark:border-teal-400 dark:text-teal-400">
                {translations.hero.contact}
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="relative mx-auto w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-teal-600 dark:bg-teal-500 rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute inset-4 bg-teal-600 dark:bg-teal-500 rounded-full opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                <img
                  src="/image (4).jpg"
                  alt="Mohamed El-Sayed"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a
          href="#about"
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md"
          aria-label="Scroll to About section">
          <ChevronDown size={24} className="text-teal-600 dark:text-teal-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
