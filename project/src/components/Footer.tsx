import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';

const Footer = () => {
  const { translations: t } = useLanguage();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          &copy; {new Date().getFullYear()} {t.footer.rights}. {t.footer.built}
        </p>
        <a href="#home" className="inline-flex items-center gap-1.5 hover:text-accent">
          <ArrowUp size={14} aria-hidden="true" />
          {t.footer.top}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
