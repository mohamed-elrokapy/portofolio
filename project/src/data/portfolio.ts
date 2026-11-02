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
  frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Redux Toolkit', 'HTML5 and CSS3', 'Responsive design'],
  backend: ['Python', 'FastAPI', 'Strapi', 'REST APIs', 'Firebase auth'],
  ops: ['Linux', 'Plesk', 'DNS (MX, SPF, DKIM, DMARC)', 'Docker', 'Vercel'],
  tooling: ['Git and GitHub', 'GitHub Actions', 'Postman', 'Jest', 'React Testing Library', 'VS Code'],
} as const;

export type ProjectKey = 'dns' | 'ecomStrapi' | 'ecomAdmin' | 'movie' | 'medical' | 'events' | 'realEstate' | 'currency' | 'calculator' | 'memes';

export interface Project {
  key: ProjectKey;
  stack: string[];
  code?: string;
  live?: string;
}

const gh = (repo: string) => `https://github.com/mohamed-elrokapy/${repo}`;

export const featuredProjects: Project[] = [
  {
    key: 'dns',
    stack: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'Docker', 'GitHub Actions'],
    code: gh('dns-email-health-checker'),
  },
  {
    key: 'ecomStrapi',
    stack: ['React', 'Strapi 5', 'Tailwind CSS', 'Firebase'],
    code: gh('e-commerce-with-dashboard'),
    live: 'https://e-commerce-with-dashboard-neon.vercel.app',
  },
  {
    key: 'ecomAdmin',
    stack: ['React', 'Tailwind CSS', 'React Router', 'Firebase'],
    code: gh('e-commerceWithDashboard'),
    live: 'https://e-commerce-with-dashboard.vercel.app',
  },
  {
    key: 'movie',
    stack: ['React', 'Redux Toolkit', 'Tailwind CSS', 'TMDB API'],
    code: gh('movieApp'),
    live: 'https://movie-app-one-wine-86.vercel.app',
  },
];

export const otherProjects: Project[] = [
  { key: 'medical', stack: ['Next.js', 'TypeScript', 'Redux Toolkit'], code: gh('medical_care'), live: 'https://medical-care-eta.vercel.app' },
  { key: 'events', stack: ['HTML', 'JavaScript', 'Brevo'], code: gh('work101'), live: 'https://work101.vercel.app' },
  { key: 'realEstate', stack: ['React', 'TypeScript', 'Tailwind CSS'], live: 'https://realstate-sable.vercel.app' },
  { key: 'currency', stack: ['JavaScript'], code: gh('currency-converter'), live: 'https://calculator-gie2.vercel.app' },
  { key: 'calculator', stack: ['JavaScript'], code: gh('calculator'), live: 'https://calculator-eait.vercel.app' },
  { key: 'memes', stack: ['JavaScript'], code: gh('100memes'), live: 'https://100memes-elyp.vercel.app' },
];
