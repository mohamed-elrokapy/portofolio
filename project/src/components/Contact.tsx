import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { translations, language } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | 'validation' | null;
    message: string;
  }>({ type: null, message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formState.name || !formState.email || !formState.message) {
      setStatus({
        type: 'validation',
        message: translations.contact.formError
      });
      return;
    }
    
    // Normally would send to a server, but for demo we'll simulate
    setIsSending(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      setStatus({
        type: 'success',
        message: translations.contact.messageSent
      });
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      
    } catch (error) {
      setStatus({
        type: 'error',
        message: translations.contact.messageError
      });
    } finally {
      setIsSending(false);
      
      // Clear status after 5 seconds
      setTimeout(() => {
        setStatus({ type: null, message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          {translations.contact.title}
        </h2>
        
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          {translations.contact.subtitle}
        </p>
        
        <div className={`flex flex-col md:flex-row gap-10 max-w-6xl mx-auto ${language === 'ar' ? 'md:flex-row-reverse' : ''}`}>
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md">
              {status.type && (
                <div 
                  className={`p-4 mb-6 rounded-lg ${
                    status.type === 'success' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                      : status.type === 'error' 
                        ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                  }`}
                >
                  {status.message}
                </div>
              )}
              
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {translations.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {translations.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {translations.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                  rows={5}
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSending}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 ${
                  isSending 
                    ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed' 
                    : 'bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700'
                } text-white font-medium rounded-lg transition-colors`}
              >
                {isSending ? (
                  <>
                    <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    {translations.contact.send}
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md h-full">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                {translations.contact.directContact}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-100 dark:bg-teal-900/40 rounded-lg text-teal-600 dark:text-teal-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {translations.contact.emailMe}
                    </h4>
                    <a 
                      href="mailto:mohamedrad2022@gmail.com" 
                      className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      mohamedrad2022@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-100 dark:bg-teal-900/40 rounded-lg text-teal-600 dark:text-teal-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {translations.contact.callMe}
                    </h4>
                    <a 
                      href="tel:+201203363707" 
                      className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      +20 1208207545
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-100 dark:bg-teal-900/40 rounded-lg text-teal-600 dark:text-teal-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {translations.contact.location}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Wardan Station, Giza, Egypt
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                  {translations.contact.socialProfiles}
                </h4>
                
                <div className="flex gap-3">
                  <a 
                    href="https://www.linkedin.com/in/mohamed-elsayed/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-200 dark:bg-gray-600 hover:bg-teal-100 dark:hover:bg-teal-900/40 rounded-full text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={20} />
                  </a>
                  
                  <a 
                    href="https://github.com/mohamedrad"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-200 dark:bg-gray-600 hover:bg-teal-100 dark:hover:bg-teal-900/40 rounded-full text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github size={20} />
                  </a>
                  
                  <a 
                    href="https://wa.me/201203363707"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-200 dark:bg-gray-600 hover:bg-teal-100 dark:hover:bg-teal-900/40 rounded-full text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="lucide lucide-message-circle"
                    >
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
