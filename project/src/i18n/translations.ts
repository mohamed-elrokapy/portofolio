export const en = {
  meta: {
    title: 'Mohamed Elsayed Abdelmohsen | Full-stack developer',
    description:
      'Portfolio of Mohamed Elsayed Abdelmohsen, a full-stack developer in Giza, Egypt. React, Next.js, TypeScript, Python/FastAPI, Strapi and Linux hosting.',
  },
  nav: {
    label: 'Main navigation',
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    toLight: 'Switch to light mode',
    toDark: 'Switch to dark mode',
    switchLanguage: 'العربية',
    switchLanguageLabel: 'Switch to Arabic',
  },
  hero: {
    eyebrow: 'Full-stack developer, Giza, Egypt',
    name: 'Mohamed Elsayed Abdelmohsen',
    headline: 'I build web apps, then host and keep them running.',
    description:
      'React, Next.js and TypeScript on the front end. Python with FastAPI and Strapi on the back end. Linux, Plesk and DNS when it is time to deploy. Currently working with FloLabs.',
    viewProjects: 'View projects',
    download: 'Download CV',
    contact: 'Get in touch',
    stackLabel: 'Day to day',
    photoAlt: 'Portrait of Mohamed Elsayed Abdelmohsen',
  },
  about: {
    title: 'About',
    intro:
      'I started as a front-end developer, building interfaces with React and Next.js, and moved toward the full stack: APIs in Python and FastAPI, content backends in Strapi, and the Linux, Plesk and DNS work that gets a site online and keeps its mail deliverable.',
    outro:
      'My most recent side project, a DNS and email health checker, came straight out of that hosting work. I like tools that make a routine operations task quicker to check.',
    factsTitle: 'At a glance',
    location: 'Location',
    locationValue: 'Giza, Egypt',
    focus: 'Focus',
    focusValue: 'Full-stack, Linux and hosting',
    languages: 'Languages',
    languagesValue: 'Arabic (native), English (B2 to C1), German (A1)',
    experience: 'Experience',
    present: 'Present',
    jobs: {
      flolabs: {
        role: 'Technical Operations Associate',
        place: 'FloLabs',
        desc: 'Work on websites, Strapi content backends, and hosting and DNS administration with Plesk.',
      },
      drcode: {
        role: 'Frontend Developer Intern',
        place: 'Dr.Code1, Giza (on-site)',
        desc: 'Building responsive web applications with React and Next.js, TypeScript and Tailwind CSS in Agile sprints, with Git workflows and code reviews.',
      },
      gooweb: {
        role: 'Frontend Developer Intern',
        place: 'Gooweb, Giza (hybrid)',
        desc: 'Built e-commerce platforms and landing pages with Next.js and React, and took part in code reviews.',
      },
      freelance: {
        role: 'Freelance developer',
        place: 'Self-employed',
        desc: 'Websites and web applications with React, Next.js and Tailwind CSS.',
      },
    },
    periods: {
      flolabs: '',
      drcode: 'Sep 2025 to present',
      gooweb: 'Aug 2024 to May 2025',
      freelance: '2023 to present',
    },
  },
  skills: {
    title: 'Skills',
    intro: 'What I use and what I am comfortable owning, grouped by where it sits in a project.',
    groups: {
      frontend: 'Front end',
      backend: 'Back end and APIs',
      ops: 'Linux and operations',
      tooling: 'Tooling',
    },
  },
  projects: {
    title: 'Projects',
    intro: 'Four repositories I would point a reviewer to first, then smaller work.',
    featured: 'Selected work',
    more: 'Smaller projects',
    stack: 'Stack',
    live: 'Live demo',
    code: 'Source',
    noLive: 'No hosted demo',
    github: 'All repositories on GitHub',
    items: {
      dns: {
        name: 'DNS and email health checker',
        description:
          'Checks the MX, SPF, DKIM and DMARC records of a domain. A Python FastAPI service behind a Next.js interface, packaged with Docker and tested in GitHub Actions. Built from the mail and DNS problems I handle while administering hosting.',
      },
      ecomStrapi: {
        name: 'E-commerce with Strapi dashboard',
        description:
          'A React storefront that reads products and user accounts from a Strapi 5 API. The Strapi project lives in the same repository, so catalogue content is managed from the Strapi admin panel instead of a hard-coded list.',
      },
      ecomAdmin: {
        name: 'E-commerce with admin dashboard',
        description:
          'A React shop with separate user and admin layouts: product cards, cart, checkout page and an admin area to add, edit and delete products. Uses a JSON mock backend and Firebase for authentication.',
      },
      movie: {
        name: 'Movie and series browser',
        description:
          'Browse and search movies and TV series with data from the TMDB API. React with Redux Toolkit for state and React Router for navigation.',
      },
      medical: {
        name: 'Medical care site',
        description: 'A multi-page healthcare site with an appointment form, built with Next.js, TypeScript and Redux Toolkit.',
      },
      events: {
        name: 'Green Land event page',
        description: 'Landing page for a nature event, built with HTML, JavaScript and Tailwind CSS, using Brevo for email.',
      },
      realEstate: {
        name: 'Real estate app',
        description: 'A property listing front end built with React, TypeScript and Tailwind CSS.',
      },
      currency: {
        name: 'Currency converter',
        description: 'Converts between currencies using an exchange rate API. Vanilla JavaScript.',
      },
      calculator: {
        name: 'Calculator',
        description: 'A responsive calculator in vanilla JavaScript.',
      },
      memes: {
        name: '100 memes',
        description: 'A grid of memes loaded from the Imgflip API. Vanilla JavaScript.',
      },
    },
  },
  contact: {
    title: 'Contact',
    lead: 'Open to full-stack, DevOps and Linux roles.',
    sub: 'The quickest way to reach me is email. I read WhatsApp and LinkedIn messages too.',
    email: 'Email',
    phone: 'Phone',
    whatsapp: 'WhatsApp',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    location: 'Location',
    locationValue: 'Giza, Egypt',
  },
  footer: {
    rights: 'Mohamed Elsayed Abdelmohsen',
    built: 'Built with React, TypeScript and Tailwind CSS.',
    top: 'Back to top',
  },
  common: {
    opensNewTab: 'opens in a new tab',
  },
};

export type Translations = typeof en;

export const ar: Translations = {
  meta: {
    title: 'محمد السيد عبد المحسن | مطور Full-stack',
    description:
      'الموقع الشخصي لمحمد السيد عبد المحسن، مطور Full-stack في الجيزة، مصر. React وNext.js وTypeScript وPython/FastAPI وStrapi واستضافة Linux.',
  },
  nav: {
    label: 'التنقل الرئيسي',
    home: 'الرئيسية',
    about: 'نبذة',
    skills: 'المهارات',
    projects: 'المشاريع',
    contact: 'التواصل',
    openMenu: 'فتح القائمة',
    closeMenu: 'إغلاق القائمة',
    toLight: 'التبديل إلى الوضع الفاتح',
    toDark: 'التبديل إلى الوضع الداكن',
    switchLanguage: 'English',
    switchLanguageLabel: 'التبديل إلى الإنجليزية',
  },
  hero: {
    eyebrow: 'مطور Full-stack، الجيزة، مصر',
    name: 'محمد السيد عبد المحسن',
    headline: 'أبني تطبيقات الويب، ثم أستضيفها وأتابع تشغيلها.',
    description:
      'React وNext.js وTypeScript في الواجهة الأمامية. وPython مع FastAPI وStrapi في الخلفية. وLinux وPlesk وDNS عند النشر. أعمل حاليا مع FloLabs.',
    viewProjects: 'عرض المشاريع',
    download: 'تحميل السيرة الذاتية',
    contact: 'تواصل معي',
    stackLabel: 'أدواتي اليومية',
    photoAlt: 'صورة شخصية لمحمد السيد عبد المحسن',
  },
  about: {
    title: 'نبذة',
    intro:
      'بدأت مطور واجهات أمامية أبني الواجهات بـ React وNext.js، ثم اتجهت إلى الـ Full-stack: واجهات برمجية بـ Python وFastAPI، وأنظمة محتوى بـ Strapi، وأعمال Linux وPlesk وDNS التي تضع الموقع على الإنترنت وتبقي بريده سليما.',
    outro:
      'أحدث مشاريعي الجانبية، أداة فحص DNS والبريد الإلكتروني، خرجت مباشرة من عمل الاستضافة هذا. أحب الأدوات التي تجعل فحص مهمة تشغيلية متكررة أسرع.',
    factsTitle: 'لمحة سريعة',
    location: 'الموقع',
    locationValue: 'الجيزة، مصر',
    focus: 'التركيز',
    focusValue: 'Full-stack وLinux والاستضافة',
    languages: 'اللغات',
    languagesValue: 'العربية (لغة أم)، الإنجليزية (B2 إلى C1)، الألمانية (A1)',
    experience: 'الخبرة',
    present: 'الحاضر',
    jobs: {
      flolabs: {
        role: 'مساعد عمليات تقنية',
        place: 'FloLabs',
        desc: 'العمل على مواقع الويب وأنظمة المحتوى Strapi وإدارة الاستضافة وDNS عبر Plesk.',
      },
      drcode: {
        role: 'متدرب مطور واجهات أمامية',
        place: 'Dr.Code1، الجيزة (حضوري)',
        desc: 'بناء تطبيقات ويب متجاوبة بـ React وNext.js وTypeScript وTailwind CSS ضمن سباقات Agile، مع Git ومراجعات الكود.',
      },
      gooweb: {
        role: 'متدرب مطور واجهات أمامية',
        place: 'Gooweb، الجيزة (هجين)',
        desc: 'بناء منصات تجارة إلكترونية وصفحات هبوط بـ Next.js وReact، والمشاركة في مراجعات الكود.',
      },
      freelance: {
        role: 'مطور مستقل',
        place: 'عمل حر',
        desc: 'مواقع وتطبيقات ويب بـ React وNext.js وTailwind CSS.',
      },
    },
    periods: {
      flolabs: '',
      drcode: 'سبتمبر 2025 حتى الآن',
      gooweb: 'أغسطس 2024 إلى مايو 2025',
      freelance: '2023 حتى الآن',
    },
  },
  skills: {
    title: 'المهارات',
    intro: 'ما أستخدمه وما أستطيع تحمل مسؤوليته، مرتبا حسب موقعه في المشروع.',
    groups: {
      frontend: 'الواجهة الأمامية',
      backend: 'الخلفية وواجهات API',
      ops: 'Linux والتشغيل',
      tooling: 'الأدوات',
    },
  },
  projects: {
    title: 'المشاريع',
    intro: 'أربعة مستودعات أرشحها للمراجع أولا، ثم أعمال أصغر.',
    featured: 'أعمال مختارة',
    more: 'مشاريع أصغر',
    stack: 'التقنيات',
    live: 'النسخة المباشرة',
    code: 'الكود',
    noLive: 'لا توجد نسخة مستضافة',
    github: 'كل المستودعات على GitHub',
    items: {
      dns: {
        name: 'أداة فحص DNS والبريد الإلكتروني',
        description:
          'تفحص سجلات MX وSPF وDKIM وDMARC لأي نطاق. خدمة Python FastAPI خلف واجهة Next.js، مغلفة بـ Docker ومختبرة عبر GitHub Actions. بُنيت من مشاكل البريد وDNS التي أتعامل معها أثناء إدارة الاستضافة.',
      },
      ecomStrapi: {
        name: 'متجر إلكتروني مع لوحة Strapi',
        description:
          'واجهة متجر بـ React تقرأ المنتجات وحسابات المستخدمين من واجهة Strapi 5. مشروع Strapi موجود في المستودع نفسه، فتُدار محتويات الكتالوج من لوحة Strapi بدل قائمة مكتوبة في الكود.',
      },
      ecomAdmin: {
        name: 'متجر إلكتروني مع لوحة إدارة',
        description:
          'متجر React بواجهتين منفصلتين للمستخدم والمشرف: بطاقات المنتجات والسلة وصفحة الدفع ولوحة لإضافة المنتجات وتعديلها وحذفها. يستخدم خلفية JSON تجريبية وFirebase للمصادقة.',
      },
      movie: {
        name: 'متصفح الأفلام والمسلسلات',
        description:
          'تصفح الأفلام والمسلسلات والبحث فيها ببيانات من TMDB API. React مع Redux Toolkit لإدارة الحالة وReact Router للتنقل.',
      },
      medical: {
        name: 'موقع الرعاية الطبية',
        description: 'موقع رعاية صحية متعدد الصفحات مع نموذج حجز موعد، مبني بـ Next.js وTypeScript وRedux Toolkit.',
      },
      events: {
        name: 'صفحة فعالية Green Land',
        description: 'صفحة هبوط لفعالية بيئية، مبنية بـ HTML وJavaScript وTailwind CSS، وتستخدم Brevo للبريد.',
      },
      realEstate: {
        name: 'تطبيق عقارات',
        description: 'واجهة لعرض العقارات مبنية بـ React وTypeScript وTailwind CSS.',
      },
      currency: {
        name: 'محول العملات',
        description: 'يحول بين العملات باستخدام واجهة أسعار الصرف. JavaScript خالص.',
      },
      calculator: {
        name: 'آلة حاسبة',
        description: 'آلة حاسبة متجاوبة بـ JavaScript خالص.',
      },
      memes: {
        name: '100 ميم',
        description: 'شبكة ميمز تُحمّل من Imgflip API. JavaScript خالص.',
      },
    },
  },
  contact: {
    title: 'التواصل',
    lead: 'متاح لوظائف Full-stack وDevOps وLinux.',
    sub: 'أسرع طريقة للوصول إلي هي البريد الإلكتروني، وأقرأ رسائل واتساب ولينكدإن أيضا.',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    whatsapp: 'واتساب',
    linkedin: 'لينكدإن',
    github: 'GitHub',
    location: 'الموقع',
    locationValue: 'الجيزة، مصر',
  },
  footer: {
    rights: 'محمد السيد عبد المحسن',
    built: 'مبني بـ React وTypeScript وTailwind CSS.',
    top: 'العودة للأعلى',
  },
  common: {
    opensNewTab: 'يفتح في تبويب جديد',
  },
};

export const translations = { en, ar };
export type Language = keyof typeof translations;
