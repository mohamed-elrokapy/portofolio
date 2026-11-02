import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../contexts/useTheme';
import { useLanguage } from '../contexts/useLanguage';
import { useActiveSection } from '../hooks';

const sections = ['home', 'about', 'skills', 'projects', 'contact'] as const;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { toggleLanguage, translations: t } = useLanguage();
  const active = useActiveSection(sections);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const iconButton =
    'inline-flex h-10 w-10 items-center justify-center rounded border border-line text-ink transition-colors hover:border-accent hover:text-accent';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled || menuOpen ? 'border-line bg-bg/90 backdrop-blur' : 'border-transparent'
      }`}>
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight" dir="ltr">
          <span className="grid h-8 w-8 place-items-center rounded bg-accent font-mono text-xs font-medium text-accent-fg">
            ME
          </span>
          <span className="hidden sm:inline">Mohamed Elsayed</span>
        </a>

        <nav aria-label={t.nav.label} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  className={`rounded px-3 py-2 text-sm transition-colors hover:text-accent ${
                    active === id ? 'font-semibold text-accent' : 'text-muted'
                  }`}>
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex h-10 items-center justify-center rounded border border-line px-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            aria-label={t.nav.switchLanguageLabel}
            lang={t.nav.switchLanguage === 'English' ? 'en' : 'ar'}>
            {t.nav.switchLanguage}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className={iconButton}
            aria-label={theme === 'dark' ? t.nav.toLight : t.nav.toDark}>
            {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
          <button
            type="button"
            className={`${iconButton} md:hidden`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}>
            {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" aria-label={t.nav.label} className="border-t border-line bg-bg md:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-2 sm:px-8">
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active === id ? 'true' : undefined}
                  className={`block border-b border-line/60 py-3 text-base last:border-b-0 ${
                    active === id ? 'font-semibold text-accent' : 'text-ink'
                  }`}>
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
