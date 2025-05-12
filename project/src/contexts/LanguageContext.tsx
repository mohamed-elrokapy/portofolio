import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define translations for both languages
const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hi, I am',
      name: 'Mohamed El-Sayed',
      title: 'Frontend Developer',
      description: 'Passionate about creating responsive, user-friendly web experiences with modern technologies.',
      download: 'Download CV',
      contact: 'Contact Me'
    },
    about: {
      title: 'About Me',
      personalInfo: 'Personal Information',
      fullName: 'Full Name',
      age: 'Age',
      years: 'years',
      location: 'Location',
      email: 'Email',
      phone: 'Phone',
      bio: 'Biography',
      bioText1: 'I am a frontend developer with a passion for creating beautiful, responsive websites. With 1 year of experience as a freelancer, I focus on building user-friendly interfaces using modern technologies.',
      bioText2: 'I continuously improve my skills by learning new technologies and keeping up with the latest web development trends. My goal is to create websites that are not only visually appealing but also function flawlessly.',
      languages: 'Languages',
      arabic: 'Arabic',
      english: 'English',
      native: 'Native',
      experience: 'Experience',
      present: 'Present',
      freelancer: 'Freelance Frontend Developer',
      freelancerDesc: 'Working on various web development projects, creating responsive websites and applications using modern frontend technologies including HTML, CSS, JavaScript, React, and Tailwind CSS.'
    },
    skills: {
      title: 'Technical Skills',
      frontend: 'Frontend Development',
      design: 'Design & Layout',
      tools: 'Tools & Workflows',
      backend: 'Backend Basics',
      keySkills: 'Key Skills'
    },
    projects: {
      title: 'Projects Portfolio',
      viewAll: 'View All',
      featured: 'Featured',
      technologies: 'Technologies Used',
      viewProject: 'View Project',
      viewCode: 'View Code',
      loading: 'Loading projects...',
      error: 'Error loading projects',
      noProjects: 'No projects available at this time'
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Feel free to contact me through any of these platforms',
      name: 'Your Name',
      email: 'Your Email',
      message: 'Your Message',
      send: 'Send Message',
      or: 'OR',
      directContact: 'Contact me directly',
      socialProfiles: 'Social Profiles',
      emailMe: 'Email Me',
      callMe: 'Call Me',
      location: 'Location',
      messageSent: 'Message sent successfully!',
      messageError: 'Error sending message',
      formError: 'Please fill in all fields correctly'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عني',
      skills: 'المهارات',
      projects: 'المشاريع',
      contact: 'التواصل'
    },
    hero: {
      greeting: 'مرحباً، أنا',
      name: 'محمد السيد',
      title: 'مطور واجهات أمامية',
      description: 'شغوف بإنشاء تجارب ويب سهلة الاستخدام ومتجاوبة باستخدام التقنيات الحديثة.',
      download: 'تحميل السيرة الذاتية',
      contact: 'تواصل معي'
    },
    about: {
      title: 'نبذة عني',
      personalInfo: 'معلومات شخصية',
      fullName: 'الاسم الكامل',
      age: 'العمر',
      years: 'سنة',
      location: 'الموقع',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      bio: 'السيرة الذاتية',
      bioText1: 'أنا مطور واجهات أمامية شغوف بإنشاء مواقع ويب جميلة ومتجاوبة. مع خبرة سنة واحدة كعامل مستقل، أركز على بناء واجهات سهلة الاستخدام باستخدام التقنيات الحديثة.',
      bioText2: 'أقوم بتحسين مهاراتي باستمرار من خلال تعلم تقنيات جديدة ومواكبة أحدث اتجاهات تطوير الويب. هدفي هو إنشاء مواقع ويب ليست جذابة بصرياً فحسب، بل تعمل أيضاً بشكل مثالي.',
      languages: 'اللغات',
      arabic: 'العربية',
      english: 'الإنجليزية',
      native: 'اللغة الأم',
      experience: 'الخبرة',
      present: 'الحاضر',
      freelancer: 'مطور واجهات أمامية مستقل',
      freelancerDesc: 'العمل على مشاريع تطوير ويب متنوعة، وإنشاء مواقع وتطبيقات ويب متجاوبة باستخدام تقنيات الواجهات الأمامية الحديثة بما في ذلك HTML وCSS وJavaScript وReact وTailwind CSS.'
    },
    skills: {
      title: 'المهارات التقنية',
      frontend: 'تطوير الواجهات الأمامية',
      design: 'التصميم والتخطيط',
      tools: 'الأدوات وسير العمل',
      backend: 'أساسيات الخلفية',
      keySkills: 'المهارات الرئيسية'
    },
    projects: {
      title: 'محفظة المشاريع',
      viewAll: 'عرض الكل',
      featured: 'المميزة',
      technologies: 'التقنيات المستخدمة',
      viewProject: 'عرض المشروع',
      viewCode: 'عرض الكود',
      loading: 'جاري تحميل المشاريع...',
      error: 'خطأ في تحميل المشاريع',
      noProjects: 'لا توجد مشاريع متاحة في الوقت الحالي'
    },
    contact: {
      title: 'تواصل معي',
      subtitle: 'لا تتردد في التواصل معي من خلال أي من هذه المنصات',
      name: 'اسمك',
      email: 'بريدك الإلكتروني',
      message: 'رسالتك',
      send: 'إرسال الرسالة',
      or: 'أو',
      directContact: 'تواصل معي مباشرة',
      socialProfiles: 'الملفات الاجتماعية',
      emailMe: 'راسلني',
      callMe: 'اتصل بي',
      location: 'الموقع',
      messageSent: 'تم إرسال الرسالة بنجاح!',
      messageError: 'خطأ في إرسال الرسالة',
      formError: 'يرجى ملء جميع الحقول بشكل صحيح'
    }
  }
};

// Define types
type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  translations: typeof translations.en;
}

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
    // Update document direction for RTL support
    document.documentElement.dir = language === 'en' ? 'rtl' : 'ltr';
    document.documentElement.lang = language === 'en' ? 'ar' : 'en';
  };

  // Set initial direction
  React.useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    toggleLanguage,
    translations: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};