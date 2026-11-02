import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';
import { heroStack, profile } from '../data/portfolio';

const Hero = () => {
  const { translations: t } = useLanguage();

  return (
    <section id="home" className="mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 md:pb-24 md:pt-36">
      <div className="grid items-center gap-12 md:grid-cols-[1.25fr_0.75fr] md:gap-16">
        <div>
          <p className="text-xl font-semibold">{t.hero.name}</p>
          <p className="eyebrow mt-1">{t.hero.eyebrow}</p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {t.hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{t.hero.description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#projects" className="btn-primary">
              {t.hero.viewProjects}
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href={profile.cv} download className="btn-ghost">
              <Download size={16} aria-hidden="true" />
              {t.hero.download}
            </a>
            <a href="#contact" className="btn-ghost">
              {t.hero.contact}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub (${t.common.opensNewTab})`}
              className="inline-flex h-10 w-10 items-center justify-center rounded border border-line text-muted transition-colors hover:border-accent hover:text-accent">
              <Github size={18} aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn (${t.common.opensNewTab})`}
              className="inline-flex h-10 w-10 items-center justify-center rounded border border-line text-muted transition-colors hover:border-accent hover:text-accent">
              <Linkedin size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <figure className="mx-auto w-full max-w-xs md:max-w-none">
          <div className="relative">
            <div aria-hidden="true" className="absolute -bottom-3 -end-3 h-full w-full rounded-lg bg-accent/15" />
            <img
              src="/avatar.jpg"
              alt={t.hero.photoAlt}
              width={960}
              height={917}
              className="relative aspect-[4/5] w-full rounded-lg border border-line bg-surface object-cover object-[38%_30%]"
            />
          </div>
        </figure>
      </div>

      <div className="mt-16 border-t border-line pt-6 md:mt-20">
        <p className="eyebrow !text-muted">{t.hero.stackLabel}</p>
        <ul className="mt-4 flex flex-wrap gap-2" dir="ltr">
          {heroStack.map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
