import { ArrowUpRight, ChevronDown, Github, Info } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';
import { caseStudies, privateDemos, profile, smallProjects, type CaseStudy } from '../data/portfolio';

const linkClass =
  'inline-flex items-center gap-1.5 rounded text-sm font-semibold text-accent underline-offset-4 hover:underline';

const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const { translations: t } = useLanguage();
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
      <span className="sr-only">({t.common.opensNewTab})</span>
    </a>
  );
};

const DetailList = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h5 className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">{title}</h5>
    <ul className="mt-3 list-disc space-y-2 ps-5 text-sm leading-relaxed text-muted marker:text-accent">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const CaseStudyCard = ({ study, index }: { study: CaseStudy; index: number }) => {
  const { translations: t } = useLanguage();
  const item = t.projects.items[study.key];
  const hero = index === 0;

  return (
    <li className={hero ? 'lg:col-span-2' : undefined}>
      <article
        className="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface"
        aria-labelledby={`cs-${study.key}`}>
        <figure className="border-b border-line bg-bg">
          <img
            src={study.image.src}
            width={study.image.width}
            height={study.image.height}
            alt={item.imageAlt}
            loading="lazy"
            decoding="async"
            className="h-auto w-full"
          />
        </figure>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
            <span aria-hidden="true">{String(index + 1).padStart(2, '0')} / </span>
            {t.projects.kinds[study.key]}
          </p>
          <h4 id={`cs-${study.key}`} className="mt-2 text-xl font-semibold">
            {item.name}
          </h4>
          <p className="mt-3 leading-relaxed text-muted">{item.problem}</p>

          <p className="mt-4 flex gap-2 rounded border border-line bg-bg p-3 text-sm leading-relaxed text-muted">
            <Info size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
            <span>{item.status}</span>
          </p>

          <ul className="mt-4 flex flex-wrap gap-2" dir="ltr" aria-label={t.projects.stack}>
            {study.stack.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>

          <p className="mt-4 text-sm text-muted">
            <span className="font-mono text-xs uppercase tracking-[0.14em]">{t.projects.checks}</span>{' '}
            <span dir="ltr" className="font-mono text-xs">
              {study.checks.join(' / ')}
            </span>
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            {study.live && (
              <ExternalLink href={study.live}>
                {t.projects.live}
                <ArrowUpRight size={15} aria-hidden="true" />
              </ExternalLink>
            )}
            <ExternalLink href={study.code}>
              <Github size={15} aria-hidden="true" />
              {t.projects.code}
            </ExternalLink>
            <ExternalLink href={study.ci}>
              {t.projects.ci}
              <ArrowUpRight size={15} aria-hidden="true" />
            </ExternalLink>
          </div>

          <details className="group mt-6 border-t border-line pt-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded text-sm font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
              {t.projects.caseStudy}
              <ChevronDown
                size={18}
                className="shrink-0 text-accent transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <div className={`mt-5 grid gap-6 ${hero ? 'lg:grid-cols-3' : ''}`}>
              <DetailList title={t.projects.built} items={item.built} />
              <DetailList title={t.projects.verified} items={item.verified} />
              <DetailList title={t.projects.limits} items={item.limits} />
            </div>
          </details>
        </div>
      </article>
    </li>
  );
};

const Projects = () => {
  const { translations: t } = useLanguage();

  return (
    <section id="projects" className="border-t border-line">
      <div className="section">
        <p className="eyebrow">02</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{t.projects.title}</h2>
        <p className="mt-4 max-w-3xl text-lg text-muted">{t.projects.intro}</p>

        <h3 className="mt-12 font-mono text-xs uppercase tracking-[0.18em] text-muted">{t.projects.featured}</h3>
        <ol className="mt-4 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.key} study={study} index={i} />
          ))}
        </ol>

        <h3 className="mt-16 font-mono text-xs uppercase tracking-[0.18em] text-muted">{t.projects.small}</h3>
        <p className="mt-2 max-w-2xl text-muted">{t.projects.smallIntro}</p>
        <ul className="mt-4 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3 sm:max-lg:[&>li:last-child:nth-child(odd)]:col-span-2 lg:[&>li:last-child:nth-child(3n+2)]:col-span-2">
          {smallProjects.map((project) => {
            const item = t.projects.smallItems[project.key];
            return (
              <li key={project.key} className="flex flex-col bg-bg p-5">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.text}</p>
                <p className="mt-3 font-mono text-xs text-muted" dir="ltr">
                  {project.stack}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <ExternalLink href={project.live}>
                    {t.projects.live}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </ExternalLink>
                  <ExternalLink href={project.code}>
                    <Github size={15} aria-hidden="true" />
                    {t.projects.code}
                  </ExternalLink>
                </div>
              </li>
            );
          })}
        </ul>

        <h3 className="mt-16 font-mono text-xs uppercase tracking-[0.18em] text-muted">{t.projects.more}</h3>
        <p className="mt-2 max-w-2xl text-muted">{t.projects.moreIntro}</p>
        <ul className="mt-4 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
          {privateDemos.map((project) => {
            const item = t.projects.moreItems[project.key];
            return (
              <li key={project.key} className="flex flex-col bg-bg p-5">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.text}</p>
                <p className="mt-3 font-mono text-xs text-muted" dir="ltr">
                  {project.stack.join(' / ')}
                </p>
                <div className="mt-4">
                  <ExternalLink href={project.live}>
                    {t.projects.liveSite}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </ExternalLink>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-10">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <Github size={16} aria-hidden="true" />
            {t.projects.github}
            <span className="sr-only">({t.common.opensNewTab})</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
