export const profile = {
  email: 'mohamedrad2022@gmail.com',
  phone: '+20 127 038 0822',
  phoneHref: 'tel:+201270380822',
  whatsapp: 'https://wa.me/201270380822',
  github: 'https://github.com/mohamed-elrokapy',
  linkedin: 'https://linkedin.com/in/mohamed-elrokapy',
  cv: '/Mohammed_Elrokapy_FrontEnd_Developer_CV.pdf',
};

export const heroStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Python',
  'FastAPI',
  'Strapi',
  'Linux',
  'Plesk',
  'DNS',
];

export const skillGroups = {
  frontend: [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript (ES6+)',
    'Tailwind CSS',
    'Material UI',
    'Shadcn UI',
    'Redux Toolkit',
    'TanStack Query',
    'React Hook Form',
    'Framer Motion',
    'Responsive design',
  ],
  backend: ['Python', 'FastAPI', 'Django', 'Strapi', 'REST APIs', 'JWT, OAuth, NextAuth', 'PostgreSQL and SQL'],
  ops: ['Linux', 'Plesk', 'DNS (MX, SPF, DKIM, DMARC)', 'SSL', 'Docker', 'Vercel', 'Railway', 'Hostinger', 'Dynadot'],
  tooling: ['Git and GitHub', 'GitHub Actions', 'Jest', 'Vitest', 'pytest', 'React Testing Library', 'Postman', 'Lighthouse'],
} as const;

const gh = (repo: string) => `https://github.com/mohamed-elrokapy/${repo}`;
const ci = (repo: string) => `${gh(repo)}/actions`;

export type CaseStudyKey = 'dns' | 'ecomStrapi' | 'ecomAdmin' | 'foodStore' | 'movie' | 'medical';

export interface CaseStudy {
  key: CaseStudyKey;
  image: { src: string; width: number; height: number };
  stack: string[];
  /** Checks that run in the repository's GitHub Actions workflow. */
  checks: string[];
  code: string;
  ci: string;
  live?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    key: 'dns',
    image: { src: '/projects/dns-checker.webp', width: 1400, height: 674 },
    stack: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'Docker', 'Caddy', 'GitHub Actions'],
    checks: ['pytest', 'Lint', 'Frontend build', 'Docker smoke test'],
    code: gh('dns-email-health-checker'),
    ci: ci('dns-email-health-checker'),
  },
  {
    key: 'ecomStrapi',
    image: { src: '/projects/ecommerce-strapi.webp', width: 1200, height: 750 },
    stack: ['React', 'Vite', 'Strapi 5', 'Tailwind CSS', 'Vitest'],
    checks: ['Lint', 'Vitest', 'Build'],
    code: gh('e-commerce-with-dashboard'),
    ci: ci('e-commerce-with-dashboard'),
    live: 'https://e-commerce-with-dashboard-neon.vercel.app',
  },
  {
    key: 'ecomAdmin',
    image: { src: '/projects/ecommerce-admin.webp', width: 1200, height: 750 },
    stack: ['React', 'React Router', 'React Hook Form', 'Tailwind CSS', 'Firebase (optional)', 'Vitest'],
    checks: ['Lint', 'Vitest', 'Build'],
    code: gh('e-commerceWithDashboard'),
    ci: ci('e-commerceWithDashboard'),
    live: 'https://e-commerce-with-dashboard.vercel.app',
  },
  {
    key: 'foodStore',
    image: { src: '/projects/food-store.webp', width: 1200, height: 750 },
    stack: ['Next.js 15', 'Convex', 'Clerk', 'Stripe', 'Upstash', 'Tailwind CSS'],
    checks: ['Lint', 'Build'],
    code: gh('next_e_commerce'),
    ci: ci('next_e_commerce'),
    live: 'https://next-e-commerce-virid-chi.vercel.app',
  },
  {
    key: 'movie',
    image: { src: '/projects/movie-app.webp', width: 1200, height: 750 },
    stack: ['React', 'Vite', 'Redux Toolkit', 'React Router', 'Tailwind CSS', 'TMDB API'],
    checks: ['Lint', 'Build'],
    code: gh('movieApp'),
    ci: ci('movieApp'),
    live: 'https://movie-app-one-wine-86.vercel.app',
  },
  {
    key: 'medical',
    image: { src: '/projects/medical-care.webp', width: 1200, height: 750 },
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Hook Form', 'Zod', 'Redux Toolkit'],
    checks: ['Lint', 'Typecheck', 'Build'],
    code: gh('medical_care'),
    ci: ci('medical_care'),
    live: 'https://medical-care-eta.vercel.app',
  },
];

export type SmallKey =
  | 'calculator'
  | 'currency'
  | 'timer'
  | 'weather'
  | 'bgColor'
  | 'clock'
  | 'counter'
  | 'memes'
  | 'events'
  | 'flags'
  | 'signin';

export interface SmallProject {
  key: SmallKey;
  stack: string;
  code: string;
  live: string;
}

export const smallProjects: SmallProject[] = [
  { key: 'calculator', stack: 'HTML, CSS, JavaScript', code: gh('calculator'), live: 'https://calculator-eait.vercel.app' },
  { key: 'currency', stack: 'HTML, CSS, JavaScript', code: gh('currency-converter'), live: 'https://calculator-gie2.vercel.app' },
  { key: 'bgColor', stack: 'HTML, CSS, JavaScript', code: gh('bgColor'), live: 'https://bg-color-1l17.vercel.app' },
  { key: 'timer', stack: 'HTML, CSS, JavaScript', code: gh('timer'), live: 'https://timer-orcin-two.vercel.app' },
  { key: 'weather', stack: 'HTML, CSS, JavaScript', code: gh('weatherApp'), live: 'https://weather-app-kohl-five-16.vercel.app' },
  { key: 'clock', stack: 'HTML, CSS, JavaScript', code: gh('simpleClock'), live: 'https://simple-clock-phi.vercel.app' },
  { key: 'counter', stack: 'HTML, CSS, JavaScript', code: gh('simpleCounter'), live: 'https://simple-counter-delta-three.vercel.app' },
  { key: 'memes', stack: 'HTML, CSS, JavaScript', code: gh('100memes'), live: 'https://100memes-elyp.vercel.app' },
  { key: 'events', stack: 'HTML, CSS, JavaScript', code: gh('events'), live: 'https://events1-theta.vercel.app' },
  { key: 'flags', stack: 'HTML, CSS, JavaScript', code: gh('simpleCountriesFlages'), live: 'https://simple-countries-flages.vercel.app' },
  { key: 'signin', stack: 'HTML, CSS, JavaScript', code: gh('simpleSignin_RegisterPages'), live: 'https://simple-countries-flages-k12l.vercel.app' },
];

export type PrivateKey = 'interviews' | 'realEstate' | 'nutrition';

export interface PrivateDemo {
  key: PrivateKey;
  stack: string[];
  live: string;
}

/** Public live sites whose source repositories are private. Only the live link is shown. */
export const privateDemos: PrivateDemo[] = [
  {
    key: 'interviews',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'React Router'],
    live: 'https://webinterviews.vercel.app',
  },
  {
    key: 'realEstate',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    live: 'https://realstate-sable.vercel.app',
  },
  {
    key: 'nutrition',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Radix UI'],
    live: 'https://balanza2.vercel.app',
  },
];

export type JobKey = 'flolabsOps' | 'flolabsIntern' | 'freelance' | 'drcode' | 'gooweb';
export const jobOrder: JobKey[] = ['flolabsOps', 'flolabsIntern', 'freelance', 'drcode', 'gooweb'];

export type StrengthKey = 'fullstack' | 'ops' | 'quality' | 'docs';

export interface Strength {
  key: StrengthKey;
  evidence: { key: string; href: string }[];
}

export const strengths: Strength[] = [
  {
    key: 'fullstack',
    evidence: [
      { key: 'dnsRepo', href: gh('dns-email-health-checker') },
      { key: 'strapiRepo', href: gh('e-commerce-with-dashboard') },
    ],
  },
  {
    key: 'ops',
    evidence: [
      { key: 'dnsRepo', href: gh('dns-email-health-checker') },
      { key: 'dnsArch', href: `${gh('dns-email-health-checker')}/blob/main/docs/ARCHITECTURE.md` },
    ],
  },
  {
    key: 'quality',
    evidence: [
      { key: 'dnsCi', href: ci('dns-email-health-checker') },
      { key: 'shopCi', href: ci('e-commerceWithDashboard') },
      { key: 'portfolioCi', href: ci('portofolio') },
    ],
  },
  {
    key: 'docs',
    evidence: [
      { key: 'credits', href: `${gh('next_e_commerce')}#credits-and-origin` },
      { key: 'limits', href: `${gh('dns-email-health-checker')}#limitations` },
    ],
  },
];
