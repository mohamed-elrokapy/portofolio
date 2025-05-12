import React from 'react';
import { User, MapPin, Mail, Phone, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { translations, language } = useLanguage();
  
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {translations.about.title}
          </h2>
          
          <div className={`flex flex-col md:flex-row gap-8 ${language === 'ar' ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/3">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {translations.about.personalInfo}
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <User size={18} className="text-teal-600 dark:text-teal-400" />
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 block">
                        {translations.about.fullName}
                      </span>
                      <span>Mohamed El-Sayed Abdelmajeed Elrokeby</span>
                    </div>
                  </li>
                  
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <Calendar size={18} className="text-teal-600 dark:text-teal-400" />
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 block">
                        {translations.about.age}
                      </span>
                      <span>30 {translations.about.years}</span>
                    </div>
                  </li>
                  
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <MapPin size={18} className="text-teal-600 dark:text-teal-400" />
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 block">
                        {translations.about.location}
                      </span>
                      <span>Wardan Station, Giza, Egypt</span>
                    </div>
                  </li>
                  
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <Mail size={18} className="text-teal-600 dark:text-teal-400" />
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 block">
                        {translations.about.email}
                      </span>
                      <a href="mailto:mohamedrad2022@gmail.com" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                        mohamedrad2022@gmail.com
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <Phone size={18} className="text-teal-600 dark:text-teal-400" />
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 block">
                        {translations.about.phone}
                      </span>
                      <a href="tel:+201203363707" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                        +20 120 336 3707
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {translations.about.bio}
                </h3>
                
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>{translations.about.bioText1}</p>
                  <p>{translations.about.bioText2}</p>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                    {translations.about.languages}
                  </h4>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>{translations.about.arabic}</span>
                        <span>{translations.about.native}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div className="bg-teal-600 dark:bg-teal-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>{translations.about.english}</span>
                        <span>B2-C1</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div className="bg-teal-600 dark:bg-teal-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              {translations.about.experience}
            </h3>
            
            <div className="space-y-8">
              <div className="relative border-l-2 border-teal-600 dark:border-teal-400 pl-8 pb-2">
                <div className="absolute w-4 h-4 bg-teal-600 dark:bg-teal-400 rounded-full -left-[9px] top-0"></div>
                <div className="mb-1 text-sm text-teal-600 dark:text-teal-400 font-medium">2023 - {translations.about.present}</div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">{translations.about.freelancer}</h4>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  {translations.about.freelancerDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;