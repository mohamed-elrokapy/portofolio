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
    projects: 'Projects',
    experience: 'Experience',
    skills: 'Skills',
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
      'I am a self-taught developer (since 2023) who started on the front end with React and Next.js and moved toward the full stack: APIs in Python and FastAPI, content backends in Strapi, and the Linux, Plesk and DNS work that gets a site online and keeps its mail deliverable.',
    outro:
      'My most recent side project, a DNS and email health checker, came straight out of that hosting work. I like tools that make a routine operations task quicker to check, and READMEs that say plainly what was and was not verified.',
    factsTitle: 'At a glance',
    location: 'Location',
    locationValue: 'Giza, Egypt',
    focus: 'Focus',
    focusValue: 'Full-stack, DevOps and Linux',
    languages: 'Languages',
    languagesValue: 'Arabic (native), English (B2 to C1), German (A1)',
    bringTitle: 'What I bring',
    bringIntro: 'Each point links to something you can open and check.',
    evidence: 'Evidence',
    strengths: {
      fullstack: {
        title: 'Full-stack delivery',
        text: 'React and Next.js front ends connected to real back ends: FastAPI with a Next.js interface, and a Strapi 5 API behind a storefront and admin dashboard. Shipped to Vercel and, for the DNS tool, packaged with Docker.',
      },
      ops: {
        title: 'DNS, email and hosting operations',
        text: 'Day to day at FloLabs: Plesk, Dynadot DNS, SSL, mailboxes and mailbox migration, deliverability troubleshooting. I turned the recurring MX, SPF, DKIM and DMARC checks into a tool.',
      },
      quality: {
        title: 'Tests and CI discipline',
        text: 'Every repository in the featured work runs GitHub Actions for lint and build, and tests where there is real logic: pytest with a coverage gate, Vitest for cart totals, tables and validation.',
      },
      docs: {
        title: 'Honest documentation',
        text: 'READMEs list what was verified, what was not, which data is demo data, known limitations, tutorial credits and where AI assistance was used.',
      },
    },
    evidenceLinks: {
      dnsRepo: 'DNS checker repository',
      strapiRepo: 'Strapi storefront repository',
      dnsArch: 'DNS checker design notes',
      dnsCi: 'DNS checker CI runs',
      shopCi: 'Shop CI runs',
      portfolioCi: 'This portfolio CI runs',
      credits: 'Tutorial credits in a README',
      limits: 'Limitations section in a README',
    },
  },
  experience: {
    title: 'Experience',
    present: 'present',
    jobs: {
      flolabsOps: {
        role: 'Technical Operations Associate, Full-Stack Developer and DevOps',
        org: 'FloLabs',
        place: 'Remote',
        period: 'Apr 2026 to present',
        bullets: [
          'Support full-stack web development, technical operations, DevOps workflows and Linux troubleshooting across company websites and platforms, including Strapi content backends and production issues.',
          'Work with Plesk, Dynadot, DNS, SSL, mailboxes, server-side configuration, Vercel, GitHub and structured Git-based deployment workflows.',
          'Help with website migrations, hosting setup, email infrastructure configuration, deliverability troubleshooting, mailbox migration, documentation and task tracking.',
          'Work with operations and cross-functional teams on AI, robotics, software and web projects.',
        ],
      },
      flolabsIntern: {
        role: 'Full-Stack Developer Intern',
        org: 'FloLabs',
        place: 'Remote',
        period: 'Dec 2025 to Mar 2026',
        bullets: [
          'Contributed to development, design and operations tasks on real website and product workflows in a remote, international team.',
          'Helped with front-end implementation, UI polish, CMS-connected pages, debugging and Git-based updates.',
        ],
      },
      freelance: {
        role: 'Freelance Web Developer',
        org: 'Private projects',
        place: 'Remote',
        period: '2024 to present',
        bullets: [
          'Built landing pages, business websites, responsive interfaces and self-managed projects with React, Next.js, TypeScript and Tailwind CSS.',
          'Handled forms, CMS-connected pages, front-end fixes, deployment, hosting setup, domain configuration and production issues.',
        ],
      },
      drcode: {
        role: 'Front-End Developer',
        org: 'Dr.Code1',
        place: 'Giza, Egypt',
        period: 'Sep 2025 to Nov 2025',
        bullets: [
          'Built responsive web interfaces with React, Next.js, TypeScript, Tailwind CSS, Material UI and Shadcn UI in sprint-based team workflows.',
          'Took part in reusable component development, documentation, debugging and code reviews.',
        ],
      },
      gooweb: {
        role: 'Front-End Developer',
        org: 'Gooweb',
        place: 'Giza, Egypt',
        period: 'Aug 2024 to May 2025',
        bullets: [
          'Developed landing pages and e-commerce interfaces in React and Next.js with responsive, user-focused design.',
          'Worked inside a team delivery and deployment process, including code reviews.',
        ],
      },
    },
    educationTitle: 'Education and learning',
    education: [
      'Bachelor of Law (ongoing), Helwan University, Cairo, 2022 to present',
      'Self-taught web developer, 2023 to present: React, Next.js, TypeScript and modern front-end tooling',
      'ITI courses, 2025: NoSQL databases and MongoDB, Database fundamentals',
    ],
  },
  skills: {
    title: 'Skills',
    intro: 'What I use and what I am comfortable owning, grouped by where it sits in a project.',
    groups: {
      frontend: 'Front end',
      backend: 'Back end and APIs',
      ops: 'Linux and operations',
      tooling: 'Tooling and testing',
    },
  },
  projects: {
    title: 'Projects',
    intro:
      'Six case studies, then smaller work. Each one says what I built, what I verified and what is still limited. READMEs in the repositories also say where AI assistance was used and where a project follows a tutorial.',
    featured: 'Case studies',
    small: 'Smaller projects',
    smallIntro: 'Single-purpose pages in plain HTML, CSS and JavaScript. Each has a live page and its source.',
    more: 'More live demos',
    moreIntro: 'These sites are public but their source repositories are private, so only the live link is shown.',
    stack: 'Stack',
    live: 'Live demo',
    liveSite: 'Live site',
    code: 'Source',
    ci: 'CI runs',
    caseStudy: 'Read the case study',
    built: 'What I built',
    verified: 'What I verified',
    limits: 'Honest limitations',
    checks: 'CI checks',
    github: 'All repositories on GitHub',
    kinds: {
      dns: 'Full-stack tool',
      ecomStrapi: 'Full-stack, CMS backend',
      ecomAdmin: 'Front end with admin area',
      foodStore: 'Next.js, third-party services',
      movie: 'Front end, public API',
      medical: 'Demo site, fictional content',
    },
    items: {
      dns: {
        name: 'DNS and email health checker',
        problem:
          'Mail that fails SPF, DKIM or DMARC ends up in spam, and the causes are small DNS mistakes that are hard to see. This tool checks a domain and explains each problem and its fix.',
        status:
          'No hosted demo: it needs the API running. The screenshots were taken against a local demo DNS zone, not real domains.',
        imageAlt:
          'Two result screens of the checker. On the left a weak demo domain shows MX passing, SPF failing and DKIM and DMARC as warnings. On the right a broken demo domain in dark mode shows MX, SPF and DMARC failing.',
        built: [
          'A FastAPI service that runs read-only MX, SPF, DKIM and DMARC lookups and returns pass, warning or fail for each, with the reason and the fix.',
          'SPF lookup budget counted through include and redirect (limit 10), DKIM key size and revoked key checks, DMARC policy checks.',
          'A Next.js and TypeScript interface, Docker Compose with Caddy serving the app and API on one origin, input validation and per-client rate limiting.',
          'An offline demo DNS server with three made-up domains, so the whole thing runs without internet access.',
        ],
        verified: [
          'A backend test suite (97 tests according to the README) with a 90% coverage gate. The real dnspython adapter is tested against a local DNS server, including NXDOMAIN, SERVFAIL and an unreachable server.',
          'GitHub Actions runs lint, tests, the frontend build and a Docker smoke test. The latest run on the main branch was green when I wrote this.',
        ],
        limits: [
          'DKIM selectors cannot be listed through DNS. The tool tries ten common selectors plus the ones you give it, so "not found" is a warning, not proof.',
          'SPF is analysed, not evaluated for a specific IP address. No MTA-STS, DANE, BIMI or blocklist checks yet.',
          'The rate limiter is in memory and per process. Several replicas would need a shared store.',
          'Written with AI assistance (Claude, Anthropic) at my direction. No users, production data or company code are involved.',
        ],
      },
      ecomStrapi: {
        name: 'Eldopal: storefront and dashboard with Strapi',
        problem: 'A small shop where catalogue content and user roles live in a CMS instead of a hard-coded list.',
        status:
          'The live site runs in browser-only demo mode (data in localStorage). Strapi mode needs a backend you run yourself.',
        imageAlt: 'Eldopal storefront home page with a hero, a short menu list and featured items with placeholder images.',
        built: [
          'A React and Vite storefront: menu with search and sorting kept in the URL, product pages, cart, validated checkout form, sign in, sign up and profile.',
          'An admin dashboard at /admin with products and users tables (search, sortable columns, pagination), product add, edit and delete, and role changes.',
          'A Strapi 5 backend in the same repository with a product collection, users-permissions roles and seed scripts.',
          'Moved user accounts from a Firebase database that held plain-text passwords to Strapi accounts, and added a demo mode with PBKDF2-hashed passwords.',
        ],
        verified: [
          'Lint, Vitest unit tests and a production build run in GitHub Actions.',
          'Drove demo mode in headless Chromium at 1280 and 390 px wide with no console errors.',
          'Ran Strapi locally on SQLite and exercised the front-end client against it: product CRUD, register, sign in, role changes and permission errors.',
        ],
        limits: [
          'Checkout is a simulation: no payment, stored orders or emails.',
          'Not verified: PostgreSQL, the Railway start script and the Vercel deployment.',
          'Strapi usernames are unique and the full name is used as one, so two people with the same name cannot both register.',
        ],
      },
      ecomAdmin: {
        name: 'Sufra: storefront and admin dashboard',
        problem: 'A food shop with separate customer and admin experiences that anyone can try without a server.',
        status: 'The live site runs in browser-only demo mode. Firebase mode needs your own Firebase project.',
        imageAlt: 'Sufra admin dashboard with summary cards, a price chart by product and a list of latest products.',
        built: [
          'A React 18 storefront with Router 7 and React Hook Form: menu search and sorting, cart, checkout validation, sign in, sign up and profile.',
          'A role-guarded admin area with summary cards, a price chart, products and users tables, and add, edit and delete with a confirm dialog.',
          'A pluggable backend: browser-only demo mode, or Firebase Auth and Firestore. Hard-coded Firebase config was removed from the source.',
        ],
        verified: [
          'Lint, Vitest unit tests (cart totals, table search, sorting and pagination, validation, the demo backend including password hashing) and a build run in GitHub Actions.',
          'Drove demo mode in headless Chromium at 1280 and 390 px wide: checkout, role guard on /admin, product create and delete, with no console errors.',
        ],
        limits: [
          'Firebase mode has not been run against a real Firebase project.',
          'In Firebase mode the admin role is a Firestore field, which is only meaningful with security rules. None are included.',
          'Checkout is a simulation. Demo data lives in the browser, so it is not shared or secure.',
        ],
      },
      foodStore: {
        name: 'Foodaty: food-menu store',
        problem: 'A pancake and waffle menu store with accounts, one-off purchases and a monthly or yearly subscription page.',
        status:
          'Live at the link, but the purchase flows were not tested end to end. It follows a tutorial structure, see the credits.',
        imageAlt: 'Foodaty landing page with the headline "When you are home, find your best taste" and fallback image tiles.',
        built: [
          'A Next.js 15 App Router app on Convex (database and functions), Clerk (auth), Stripe (checkout, billing portal, webhooks), Upstash (rate limit) and React Email templates.',
          'Re-themed the catalogue as a food menu and rebuilt the UI. The menu falls back to a bundled list with a notice when Convex is not configured.',
          'Fixed schema and Stripe bugs, and added a missing Pro-plan checkout function (unverified).',
        ],
        verified: [
          'Lint and build run in GitHub Actions.',
          'Landing, menu, Pro and 404 pages were rendered at 1280 and 390 px wide with no horizontal overflow, using a local copy with Clerk stubbed.',
        ],
        limits: [
          'Credit: the structure follows a public Convex, Clerk and Stripe course-platform tutorial. I do not claim the overall design as original.',
          'Not run: sign-in, checkout, Stripe webhooks, billing portal, Convex queries and emails.',
          'Some copy and route names (such as /courses) still come from the tutorial. No automated tests.',
        ],
      },
      movie: {
        name: 'Movies App',
        problem: 'Browse and search movies and TV series with data from the TMDB API.',
        status:
          'The deployed site needs a TMDB token set on the host and may show an error or no data until it is. The screenshot uses mock data.',
        imageAlt: 'Movies App home page with a dark hero for a placeholder film and a row of placeholder posters.',
        built: [
          'React 18, Vite, Redux Toolkit and React Router 7: popular and now-playing lists, a keyboard-accessible search combobox, detail pages with cast, crew, reviews, media and recommendations, person, season and episode pages.',
          'Moved a TMDB bearer token that was hard-coded in eight source files into an environment variable, and removed unused dependencies. The README reports the production JS bundle going from about 1.29 MB to about 376 KB.',
          'Fixed broken behaviour such as links to /series/[object Object], a wrong latest season and crew that never rendered, and added skeleton loaders and retryable error states.',
        ],
        verified: [
          'Lint and build run in GitHub Actions.',
          'Pages were loaded in headless Chromium at 1280 and 390 px wide against hand-made mock API responses, including error and slow-response states, with no console errors.',
        ],
        limits: [
          'Not verified against the live TMDB API or EmailJS.',
          'VITE_ variables are bundled into the client, so the token is visible to visitors. A read-only token or a small proxy is needed.',
          'No automated tests.',
        ],
      },
      medical: {
        name: 'Medical Care: sample clinic site',
        problem: 'A demo clinic website that shows an accessible layout and an appointment-request form.',
        status:
          'Demo site with fictional content. It is not a real clinic and nothing on it is medical advice.',
        imageAlt: 'Medical Care home page with the headline "Healthcare that starts with a clear, calm conversation" and a demo notice.',
        built: [
          'A Next.js 13 App Router site (static export) in TypeScript and Tailwind CSS with home, about and programs pages.',
          'An appointment-request form with React Hook Form and Zod validation. It makes no network request and shows an on-screen summary held in memory.',
          'Self-hosted fonts and plain, honest placeholder content instead of invented doctors or statistics.',
        ],
        verified: [
          'Lint, typecheck and build run in GitHub Actions.',
          'Served the static export and exercised the pages and form with Playwright at 1280 and 390 px wide: validation errors, the success view, no console errors and no horizontal overflow.',
        ],
        limits: [
          'No backend, so no real booking, email or persistence. No dark mode.',
          'No automated tests. Accessibility was reviewed by hand and by keyboard, not with a screen reader or an audit tool.',
        ],
      },
    },
    smallItems: {
      calculator: {
        name: 'Calculator',
        text: 'Keyboard-friendly calculator without eval(). Rounds floating-point noise (0.1 + 0.2 shows 0.3) and handles division by zero.',
      },
      currency: {
        name: 'Currency converter',
        text: 'About 150 currencies from ExchangeRate-API with loading, error and retry states and 10-minute caching.',
      },
      bgColor: {
        name: 'Background colour changer',
        text: 'Picks a page colour from presets, a picker or hex input, and chooses black or white text by WCAG contrast. The colour maths has unit tests.',
      },
      timer: {
        name: 'Timer',
        text: 'Stopwatch with start, pause, resume and reset. It measures time from timestamps, so it does not drift in a background tab.',
      },
      weather: {
        name: 'Weather app',
        text: 'Current weather by city from OpenWeather. It needs a free API key in config.js, so the live page may ask for one.',
      },
      clock: {
        name: 'Clock',
        text: 'Analog and digital clock with a 12 or 24 hour toggle that is remembered between visits.',
      },
      counter: {
        name: 'Counter',
        text: 'A minimal increment and decrement counter. An early practice project, kept as it was.',
      },
      memes: {
        name: '100 memes',
        text: 'Type a number from 1 to 100 to see that Imgflip meme template. API failures show a message and a retry button.',
      },
      events: {
        name: 'Event registration page',
        text: 'One-page event landing with a registration form. The form is a demo: it validates but sends nothing.',
      },
      flags: {
        name: 'Country flags',
        text: 'Seven flags with English and Arabic names, filter buttons and lazy-loaded images with set dimensions.',
      },
      signin: {
        name: 'Sign-in and sign-up pages',
        text: 'Two forms with inline validation. Demo only: there is no server, and passwords are never stored or sent.',
      },
    },
    moreItems: {
      interviews: {
        name: 'Frontend Interview Hub',
        text: 'A searchable bank of about 2,000 frontend interview questions across HTML, CSS, JavaScript and React, filterable by difficulty and tag, with an English and Arabic interface and a theme toggle.',
      },
      realEstate: {
        name: 'Real estate listings',
        text: 'Bilingual (Arabic and English, RTL) property listings with search, a reservation modal and an admin page to add and edit listings. All data is mock data.',
      },
      nutrition: {
        name: 'Balanza Nutrition store',
        text: 'Bilingual nutrition-store front end with shop, cart, wishlist, checkout and an admin area. It started from a Figma Make export. All data is mock data and the admin login is a front-end demo.',
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
    projects: 'المشاريع',
    experience: 'الخبرة',
    skills: 'المهارات',
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
      'مطور تعلمت بنفسي منذ 2023، بدأت بالواجهات الأمامية بـ React وNext.js ثم اتجهت إلى الـ Full-stack: واجهات برمجية بـ Python وFastAPI، وأنظمة محتوى بـ Strapi، وأعمال Linux وPlesk وDNS التي تضع الموقع على الإنترنت وتبقي بريده سليما.',
    outro:
      'أحدث مشاريعي الجانبية، أداة فحص DNS والبريد الإلكتروني، خرجت مباشرة من عمل الاستضافة هذا. أحب الأدوات التي تجعل فحص مهمة تشغيلية متكررة أسرع، وملفات README التي تقول بوضوح ما الذي جرى التحقق منه وما الذي لم يجر.',
    factsTitle: 'لمحة سريعة',
    location: 'الموقع',
    locationValue: 'الجيزة، مصر',
    focus: 'التركيز',
    focusValue: 'Full-stack وDevOps وLinux',
    languages: 'اللغات',
    languagesValue: 'العربية (لغة أم)، الإنجليزية (B2 إلى C1)، الألمانية (A1)',
    bringTitle: 'ما أقدمه',
    bringIntro: 'كل نقطة مرتبطة بشيء يمكنك فتحه والتحقق منه.',
    evidence: 'الدليل',
    strengths: {
      fullstack: {
        title: 'تسليم Full-stack',
        text: 'واجهات React وNext.js متصلة بخلفيات حقيقية: FastAPI مع واجهة Next.js، وواجهة Strapi 5 خلف متجر ولوحة إدارة. منشورة على Vercel، وأداة DNS مغلفة بـ Docker.',
      },
      ops: {
        title: 'تشغيل DNS والبريد والاستضافة',
        text: 'عملي اليومي في FloLabs: Plesk وDNS عبر Dynadot وSSL وصناديق البريد ونقلها واستكشاف مشاكل وصول الرسائل. حولت فحوصات MX وSPF وDKIM وDMARC المتكررة إلى أداة.',
      },
      quality: {
        title: 'الاختبارات وانضباط CI',
        text: 'كل مستودع في الأعمال المختارة يشغل GitHub Actions للفحص والبناء، ويشغل اختبارات حيث يوجد منطق حقيقي: pytest مع حد أدنى للتغطية، وVitest لإجماليات السلة والجداول والتحقق.',
      },
      docs: {
        title: 'توثيق صادق',
        text: 'ملفات README تذكر ما جرى التحقق منه وما لم يجر، وأي بيانات هي بيانات تجريبية، والقيود المعروفة، ونسب الدروس التعليمية، ومواضع الاستعانة بالذكاء الاصطناعي.',
      },
    },
    evidenceLinks: {
      dnsRepo: 'مستودع أداة DNS',
      strapiRepo: 'مستودع متجر Strapi',
      dnsArch: 'ملاحظات تصميم أداة DNS',
      dnsCi: 'تشغيلات CI لأداة DNS',
      shopCi: 'تشغيلات CI للمتجر',
      portfolioCi: 'تشغيلات CI لهذا الموقع',
      credits: 'نسب الدرس التعليمي في README',
      limits: 'قسم القيود في README',
    },
  },
  experience: {
    title: 'الخبرة',
    present: 'الآن',
    jobs: {
      flolabsOps: {
        role: 'مساعد عمليات تقنية، ومطور Full-stack وDevOps',
        org: 'FloLabs',
        place: 'عن بعد',
        period: 'أبريل 2026 حتى الآن',
        bullets: [
          'دعم تطوير الويب Full-stack والعمليات التقنية وسير عمل DevOps واستكشاف مشاكل Linux عبر مواقع الشركة ومنصاتها، بما في ذلك أنظمة المحتوى Strapi ومشاكل بيئة الإنتاج.',
          'العمل مع Plesk وDynadot وDNS وSSL وصناديق البريد وإعدادات الخادم وVercel وGitHub وسير نشر منظم قائم على Git.',
          'المساعدة في نقل المواقع وإعداد الاستضافة وضبط بنية البريد واستكشاف مشاكل وصول الرسائل ونقل صناديق البريد والتوثيق ومتابعة المهام.',
          'العمل مع فرق العمليات والفرق المتعددة التخصصات على مشاريع الذكاء الاصطناعي والروبوتات والبرمجيات والويب.',
        ],
      },
      flolabsIntern: {
        role: 'متدرب مطور Full-stack',
        org: 'FloLabs',
        place: 'عن بعد',
        period: 'ديسمبر 2025 إلى مارس 2026',
        bullets: [
          'المساهمة في مهام التطوير والتصميم والعمليات على مواقع ومنتجات حقيقية ضمن فريق دولي عن بعد.',
          'المساعدة في تنفيذ الواجهات الأمامية وتحسين مظهرها والصفحات المتصلة بنظام إدارة المحتوى وتصحيح الأخطاء وتحديثات Git.',
        ],
      },
      freelance: {
        role: 'مطور ويب مستقل',
        org: 'مشاريع خاصة',
        place: 'عن بعد',
        period: '2024 حتى الآن',
        bullets: [
          'بناء صفحات هبوط ومواقع أعمال وواجهات متجاوبة ومشاريع ذاتية بـ React وNext.js وTypeScript وTailwind CSS.',
          'التعامل مع النماذج والصفحات المتصلة بنظام إدارة المحتوى وإصلاحات الواجهة والنشر وإعداد الاستضافة وضبط النطاقات ومشاكل بيئة الإنتاج.',
        ],
      },
      drcode: {
        role: 'مطور واجهات أمامية',
        org: 'Dr.Code1',
        place: 'الجيزة، مصر',
        period: 'سبتمبر 2025 إلى نوفمبر 2025',
        bullets: [
          'بناء واجهات ويب متجاوبة بـ React وNext.js وTypeScript وTailwind CSS وMaterial UI وShadcn UI ضمن سباقات عمل جماعية.',
          'المشاركة في تطوير مكونات قابلة لإعادة الاستخدام والتوثيق وتصحيح الأخطاء ومراجعات الكود.',
        ],
      },
      gooweb: {
        role: 'مطور واجهات أمامية',
        org: 'Gooweb',
        place: 'الجيزة، مصر',
        period: 'أغسطس 2024 إلى مايو 2025',
        bullets: [
          'تطوير صفحات هبوط وواجهات تجارة إلكترونية بـ React وNext.js بتصميم متجاوب يركز على المستخدم.',
          'العمل ضمن عملية تسليم ونشر جماعية تشمل مراجعات الكود.',
        ],
      },
    },
    educationTitle: 'التعليم والتعلم',
    education: [
      'بكالوريوس الحقوق (مستمر)، جامعة حلوان، القاهرة، 2022 حتى الآن',
      'مطور ويب متعلم ذاتيا، 2023 حتى الآن: React وNext.js وTypeScript وأدوات الواجهات الحديثة',
      'دورات ITI، 2025: قواعد بيانات NoSQL وMongoDB، وأساسيات قواعد البيانات',
    ],
  },
  skills: {
    title: 'المهارات',
    intro: 'ما أستخدمه وما أستطيع تحمل مسؤوليته، مرتبا حسب موقعه في المشروع.',
    groups: {
      frontend: 'الواجهة الأمامية',
      backend: 'الخلفية وواجهات API',
      ops: 'Linux والتشغيل',
      tooling: 'الأدوات والاختبارات',
    },
  },
  projects: {
    title: 'المشاريع',
    intro:
      'ست دراسات حالة، ثم أعمال أصغر. كل واحدة تذكر ما بنيته وما تحققت منه وما لا يزال محدودا. وتذكر ملفات README في المستودعات أيضا مواضع الاستعانة بالذكاء الاصطناعي والمشاريع التي تتبع درسا تعليميا.',
    featured: 'دراسات حالة',
    small: 'مشاريع أصغر',
    smallIntro: 'صفحات لغرض واحد بـ HTML وCSS وJavaScript خالصة. لكل منها صفحة مباشرة وكود مصدري.',
    more: 'عروض مباشرة أخرى',
    moreIntro: 'هذه المواقع عامة لكن مستودعاتها خاصة، لذلك يظهر الرابط المباشر فقط.',
    stack: 'التقنيات',
    live: 'النسخة المباشرة',
    liveSite: 'الموقع المباشر',
    code: 'الكود',
    ci: 'تشغيلات CI',
    caseStudy: 'اقرأ دراسة الحالة',
    built: 'ما بنيته',
    verified: 'ما تحققت منه',
    limits: 'القيود بصراحة',
    checks: 'فحوصات CI',
    github: 'كل المستودعات على GitHub',
    kinds: {
      dns: 'أداة Full-stack',
      ecomStrapi: 'Full-stack مع خلفية CMS',
      ecomAdmin: 'واجهة أمامية مع لوحة إدارة',
      foodStore: 'Next.js مع خدمات خارجية',
      movie: 'واجهة أمامية مع API عامة',
      medical: 'موقع تجريبي بمحتوى خيالي',
    },
    items: {
      dns: {
        name: 'أداة فحص DNS والبريد الإلكتروني',
        problem:
          'الرسائل التي تفشل في SPF أو DKIM أو DMARC تصل إلى البريد المزعج، وأسبابها أخطاء صغيرة في DNS يصعب رؤيتها. تفحص هذه الأداة النطاق وتشرح كل مشكلة وطريقة إصلاحها.',
        status:
          'لا توجد نسخة مستضافة لأنها تحتاج إلى تشغيل الـ API. أُخذت لقطات الشاشة على منطقة DNS تجريبية محلية، وليس على نطاقات حقيقية.',
        imageAlt:
          'شاشتا نتائج للأداة. على اليسار نطاق تجريبي ضعيف: MX ناجح وSPF فاشل وDKIM وDMARC تحذيران. على اليمين نطاق تجريبي معطوب بالوضع الداكن: MX وSPF وDMARC فاشلة.',
        built: [
          'خدمة FastAPI تجري استعلامات MX وSPF وDKIM وDMARC للقراءة فقط وتعيد نجاحا أو تحذيرا أو فشلا لكل فحص مع السبب والإصلاح.',
          'حساب حد استعلامات SPF عبر include وredirect (الحد 10)، وفحص حجم مفتاح DKIM والمفاتيح الملغاة، وفحص سياسة DMARC.',
          'واجهة Next.js وTypeScript، وDocker Compose مع Caddy يقدم التطبيق والـ API من أصل واحد، مع التحقق من المدخلات وتحديد معدل الطلبات لكل عميل.',
          'خادم DNS تجريبي يعمل دون إنترنت بثلاثة نطاقات مختلقة، فيعمل كل شيء بلا اتصال.',
        ],
        verified: [
          'مجموعة اختبارات للخلفية (97 اختبارا بحسب README) مع حد تغطية 90%. تُختبر محول dnspython الحقيقي مقابل خادم DNS محلي، بما في ذلك NXDOMAIN وSERVFAIL وخادم لا يمكن الوصول إليه.',
          'تشغل GitHub Actions الفحص والاختبارات وبناء الواجهة واختبار دخان لـ Docker. كان آخر تشغيل على الفرع الرئيسي ناجحا وقت كتابة هذا.',
        ],
        limits: [
          'لا يمكن سرد محددات DKIM عبر DNS. تجرب الأداة عشرة محددات شائعة مع ما تدخله، لذلك "غير موجود" تحذير وليس إثباتا.',
          'يُحلل SPF ولا يُقيَّم لعنوان IP محدد. لا توجد بعد فحوصات MTA-STS وDANE وBIMI والقوائم السوداء.',
          'محدد المعدل في الذاكرة ولكل عملية. تعدد النسخ يحتاج إلى مخزن مشترك.',
          'كُتبت بمساعدة الذكاء الاصطناعي (Claude من Anthropic) بتوجيه مني. لا يوجد مستخدمون ولا بيانات إنتاج ولا كود شركة.',
        ],
      },
      ecomStrapi: {
        name: 'متجر Eldopal ولوحة إدارة مع Strapi',
        problem: 'متجر صغير يعيش فيه محتوى الكتالوج وأدوار المستخدمين في نظام إدارة محتوى بدل قائمة مكتوبة في الكود.',
        status:
          'الموقع المباشر يعمل في وضع تجريبي داخل المتصفح فقط (البيانات في localStorage). وضع Strapi يحتاج إلى خلفية تشغلها بنفسك.',
        imageAlt: 'الصفحة الرئيسية لمتجر Eldopal بعنوان رئيسي وقائمة قصيرة وعناصر مميزة بصور بديلة.',
        built: [
          'واجهة متجر بـ React وVite: قائمة مع بحث وترتيب محفوظين في الرابط، وصفحات المنتجات، والسلة، ونموذج دفع مع تحقق، وتسجيل الدخول وإنشاء الحساب والملف الشخصي.',
          'لوحة إدارة في /admin بجدولي المنتجات والمستخدمين (بحث وأعمدة قابلة للترتيب وتقسيم صفحات)، وإضافة المنتجات وتعديلها وحذفها، وتغيير الأدوار.',
          'خلفية Strapi 5 في المستودع نفسه بمجموعة منتجات وأدوار users-permissions وسكربتات بيانات أولية.',
          'نقلت الحسابات من قاعدة Firebase كانت تحفظ كلمات المرور نصا صريحا إلى حسابات Strapi، وأضفت وضعا تجريبيا بكلمات مرور مجزأة بـ PBKDF2.',
        ],
        verified: [
          'يشغل GitHub Actions الفحص واختبارات Vitest وبناء الإنتاج.',
          'جربت الوضع التجريبي في Chromium بلا واجهة بعرض 1280 و390 بكسل دون أخطاء في الـ console.',
          'شغلت Strapi محليا على SQLite وجربت عميل الواجهة عليه: إنشاء المنتجات وقراءتها وتعديلها وحذفها، والتسجيل، وتسجيل الدخول، وتغيير الأدوار، وأخطاء الصلاحيات.',
        ],
        limits: [
          'الدفع محاكاة: لا مدفوعات ولا طلبات محفوظة ولا رسائل بريد.',
          'لم يُتحقق من PostgreSQL ولا من سكربت التشغيل على Railway ولا من نشر Vercel.',
          'اسم المستخدم في Strapi فريد ويُستخدم الاسم الكامل له، فلا يستطيع شخصان بالاسم نفسه التسجيل معا.',
        ],
      },
      ecomAdmin: {
        name: 'متجر Sufra ولوحة إدارة',
        problem: 'متجر طعام بتجربتين منفصلتين للعميل والمشرف، يمكن لأي شخص تجربته دون خادم.',
        status: 'الموقع المباشر يعمل في وضع تجريبي داخل المتصفح فقط. وضع Firebase يحتاج مشروع Firebase خاصا بك.',
        imageAlt: 'لوحة إدارة Sufra ببطاقات ملخص ومخطط أسعار حسب المنتج وقائمة بأحدث المنتجات.',
        built: [
          'واجهة متجر بـ React 18 وRouter 7 وReact Hook Form: بحث وترتيب في القائمة، والسلة، والتحقق في صفحة الدفع، وتسجيل الدخول وإنشاء الحساب والملف الشخصي.',
          'منطقة إدارة محمية بالأدوار ببطاقات ملخص ومخطط أسعار وجدولي المنتجات والمستخدمين، وإضافة وتعديل وحذف مع نافذة تأكيد.',
          'خلفية قابلة للتبديل: وضع تجريبي داخل المتصفح، أو Firebase Auth وFirestore. أُزيلت إعدادات Firebase المكتوبة في الكود.',
        ],
        verified: [
          'يشغل GitHub Actions الفحص واختبارات Vitest (إجماليات السلة وبحث الجداول وترتيبها وتقسيمها والتحقق والخلفية التجريبية بما فيها تجزئة كلمات المرور) والبناء.',
          'جربت الوضع التجريبي في Chromium بلا واجهة بعرض 1280 و390 بكسل: الدفع وحماية /admin وإنشاء المنتجات وحذفها، دون أخطاء في الـ console.',
        ],
        limits: [
          'لم يُشغل وضع Firebase على مشروع Firebase حقيقي.',
          'في وضع Firebase دور المشرف حقل في Firestore، ولا قيمة له إلا مع قواعد أمان، وهي غير مضمنة.',
          'الدفع محاكاة. بيانات الوضع التجريبي في المتصفح، فلا تُشارَك ولا تُؤمَّن.',
        ],
      },
      foodStore: {
        name: 'متجر Foodaty لقائمة الطعام',
        problem: 'متجر لقائمة فطائر وويفل بحسابات ومشتريات منفردة وصفحة اشتراك شهري أو سنوي.',
        status:
          'مباشر عند الرابط، لكن مسارات الشراء لم تُختبر من البداية إلى النهاية. يتبع بنية درس تعليمي، انظر النسب أدناه.',
        imageAlt: 'الصفحة الرئيسية لـ Foodaty بعنوان "When you are home, find your best taste" وبلاطات صور بديلة.',
        built: [
          'تطبيق Next.js 15 بـ App Router على Convex (قاعدة البيانات والدوال) وClerk (المصادقة) وStripe (الدفع وبوابة الفوترة وwebhooks) وUpstash (تحديد المعدل) وقوالب React Email.',
          'أعدت تصميم الكتالوج كقائمة طعام وأعدت بناء الواجهة. تعود القائمة إلى قائمة مضمنة مع تنبيه عندما لا يكون Convex مضبوطا.',
          'أصلحت أخطاء المخطط وStripe، وأضفت دالة دفع خطة Pro المفقودة (غير مُتحقق منها).',
        ],
        verified: [
          'يشغل GitHub Actions الفحص والبناء.',
          'عُرضت صفحات الرئيسية والقائمة وPro و404 بعرض 1280 و390 بكسل دون تمرير أفقي، باستخدام نسخة محلية تستبدل Clerk بمحاكاة.',
        ],
        limits: [
          'نسب: البنية تتبع درسا عاما لمنصة دورات بـ Convex وClerk وStripe. لا أدعي أن التصميم العام من ابتكاري.',
          'لم يُشغل: تسجيل الدخول والدفع وwebhooks الخاصة بـ Stripe وبوابة الفوترة واستعلامات Convex ورسائل البريد.',
          'بعض النصوص وأسماء المسارات (مثل /courses) ما زالت من الدرس. لا توجد اختبارات آلية.',
        ],
      },
      movie: {
        name: 'Movies App',
        problem: 'تصفح الأفلام والمسلسلات والبحث فيها ببيانات من TMDB API.',
        status:
          'الموقع المنشور يحتاج إلى رمز TMDB مضبوط على الاستضافة، وقد يعرض خطأ أو لا يعرض بيانات حتى يُضبط. لقطة الشاشة ببيانات تجريبية.',
        imageAlt: 'الصفحة الرئيسية لتطبيق Movies App بواجهة داكنة لفيلم بديل وصف من الملصقات البديلة.',
        built: [
          'React 18 وVite وRedux Toolkit وReact Router 7: قوائم الشائع وما يعرض الآن، ومربع بحث يعمل بلوحة المفاتيح، وصفحات تفاصيل بالممثلين والطاقم والمراجعات والوسائط والتوصيات، وصفحات الأشخاص والمواسم والحلقات.',
          'نقلت رمز TMDB الذي كان مكتوبا في ثمانية ملفات إلى متغير بيئة، وأزلت اعتماديات غير مستخدمة. يذكر README أن حزمة JS للإنتاج انخفضت من نحو 1.29 ميجابايت إلى نحو 376 كيلوبايت.',
          'أصلحت سلوكا معطوبا مثل روابط /series/[object Object] وموسم أخير خاطئ وطاقم لا يظهر، وأضفت هياكل تحميل وحالات خطأ قابلة لإعادة المحاولة.',
        ],
        verified: [
          'يشغل GitHub Actions الفحص والبناء.',
          'حُملت الصفحات في Chromium بلا واجهة بعرض 1280 و390 بكسل مقابل ردود API تجريبية مصنوعة يدويا، بما فيها حالات الخطأ والاستجابة البطيئة، دون أخطاء في الـ console.',
        ],
        limits: [
          'لم يُتحقق منه مقابل TMDB الحقيقي ولا EmailJS.',
          'متغيرات VITE_ تُضمَّن في العميل، فالرمز ظاهر للزوار. يلزم رمز للقراءة فقط أو وسيط صغير.',
          'لا توجد اختبارات آلية.',
        ],
      },
      medical: {
        name: 'موقع عيادة تجريبي (Medical Care)',
        problem: 'موقع عيادة تجريبي يعرض تخطيطا سهل الوصول ونموذجا لطلب موعد.',
        status:
          'موقع تجريبي بمحتوى خيالي. ليس عيادة حقيقية ولا شيء فيه نصيحة طبية.',
        imageAlt: 'الصفحة الرئيسية لـ Medical Care بعنوان "Healthcare that starts with a clear, calm conversation" وتنبيه بأنه موقع تجريبي.',
        built: [
          'موقع Next.js 13 بـ App Router (تصدير ثابت) بـ TypeScript وTailwind CSS بصفحات الرئيسية ونبذة والبرامج.',
          'نموذج طلب موعد بتحقق React Hook Form وZod. لا يرسل أي طلب شبكة ويعرض ملخصا على الشاشة محفوظا في الذاكرة.',
          'خطوط مستضافة ذاتيا ومحتوى بديل صريح بدل أطباء أو إحصاءات مختلقة.',
        ],
        verified: [
          'يشغل GitHub Actions الفحص وفحص الأنواع والبناء.',
          'قدمت التصدير الثابت وجربت الصفحات والنموذج بـ Playwright بعرض 1280 و390 بكسل: أخطاء التحقق وعرض النجاح، دون أخطاء في الـ console ودون تمرير أفقي.',
        ],
        limits: [
          'لا خلفية، فلا حجز حقيقي ولا بريد ولا حفظ بيانات. لا وضع داكن.',
          'لا اختبارات آلية. روجعت إمكانية الوصول يدويا وبلوحة المفاتيح، وليس بقارئ شاشة أو أداة فحص.',
        ],
      },
    },
    smallItems: {
      calculator: {
        name: 'آلة حاسبة',
        text: 'آلة حاسبة تعمل بلوحة المفاتيح دون eval(). تقرّب أخطاء الفاصلة العائمة (0.1 + 0.2 تظهر 0.3) وتتعامل مع القسمة على صفر.',
      },
      currency: {
        name: 'محول العملات',
        text: 'نحو 150 عملة من ExchangeRate-API مع حالات تحميل وخطأ وإعادة محاولة وتخزين مؤقت لعشر دقائق.',
      },
      bgColor: {
        name: 'مغير لون الخلفية',
        text: 'يختار لون الصفحة من ألوان جاهزة أو منتقي أو إدخال hex، ويختار النص الأسود أو الأبيض بحسب تباين WCAG. حسابات الألوان لها اختبارات وحدة.',
      },
      timer: {
        name: 'مؤقت',
        text: 'ساعة إيقاف بتشغيل وإيقاف مؤقت واستئناف وإعادة ضبط. تقيس الزمن من الطوابع الزمنية فلا ينحرف في تبويب خلفي.',
      },
      weather: {
        name: 'تطبيق الطقس',
        text: 'الطقس الحالي لمدينة من OpenWeather. يحتاج إلى مفتاح API مجاني في config.js، فقد تطلب الصفحة المباشرة مفتاحا.',
      },
      clock: {
        name: 'ساعة',
        text: 'ساعة تناظرية ورقمية بتبديل بين نظام 12 و24 ساعة يُحفظ بين الزيارات.',
      },
      counter: {
        name: 'عداد',
        text: 'عداد بسيط بزيادة ونقصان. مشروع تدريب مبكر تُرك كما هو.',
      },
      memes: {
        name: '100 ميم',
        text: 'اكتب رقما من 1 إلى 100 لترى قالب الميم المرتب بهذا الرقم من Imgflip. تظهر رسالة وزر إعادة محاولة عند فشل الـ API.',
      },
      events: {
        name: 'صفحة تسجيل فعالية',
        text: 'صفحة هبوط لفعالية بنموذج تسجيل. النموذج تجريبي: يتحقق من المدخلات ولا يرسل شيئا.',
      },
      flags: {
        name: 'أعلام الدول',
        text: 'سبعة أعلام بأسماء بالإنجليزية والعربية وأزرار تصفية وصور تُحمَّل عند الحاجة بأبعاد محددة.',
      },
      signin: {
        name: 'صفحتا تسجيل الدخول وإنشاء الحساب',
        text: 'نموذجان بتحقق فوري. تجريبي فقط: لا خادم، ولا تُحفظ كلمات المرور ولا تُرسل.',
      },
    },
    moreItems: {
      interviews: {
        name: 'Frontend Interview Hub',
        text: 'بنك قابل للبحث بنحو 2,000 سؤال مقابلات للواجهات الأمامية في HTML وCSS وJavaScript وReact، مع تصفية بالصعوبة والوسم، وواجهة بالإنجليزية والعربية وتبديل للثيم.',
      },
      realEstate: {
        name: 'عقارات',
        text: 'عرض عقارات ثنائي اللغة (عربي وإنجليزي مع RTL) مع بحث ونافذة حجز وصفحة إدارة لإضافة العقارات وتعديلها. كل البيانات تجريبية.',
      },
      nutrition: {
        name: 'متجر Balanza Nutrition',
        text: 'واجهة متجر تغذية ثنائية اللغة بالمتجر والسلة والمفضلة والدفع ومنطقة إدارة. بدأت من تصدير Figma Make. كل البيانات تجريبية وتسجيل دخول المشرف عرض تجريبي في الواجهة.',
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
