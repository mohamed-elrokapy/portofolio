import { ArrowUpRight, Github } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';
import { featuredProjects, otherProjects, profile, type Project } from '../data/portfolio';

const linkClass =
  'inline-flex items-center gap-1.5 rounded text-sm font-semibold text-accent underline-offset-4 hover:underline';

const ProjectLinks = ({ project }: { project: Project }) => {
  const { translations: t } = useLanguage();
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {project.live && (
        <a href={project.live} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {t.projects.live}
          <ArrowUpRight size={15} aria-hidden="true" />
          <span className="sr-only">({t.common.opensNewTab})</span>
        </a>
      )}
      {project.code && (
        <a href={project.code} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <Github size={15} aria-hidden="true" />
          {t.projects.code}
          <span className="sr-only">({t.common.opensNewTab})</span>
        </a>
      )}
    </div>
  );
};

const Projects = () => {
  const { translations: t } = useLanguage();

  return (
    <section id="projects" className="border-t border-line">
      <div className="section">
        <p className="eyebrow">03</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{t.projects.title}</h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">{t.projects.intro}</p>

        <h3 className="mt-12 font-mono text-xs uppercase tracking-[0.18em] text-muted">{t.projects.featured}</h3>
        <ol className="mt-4 divide-y divide-line border-y border-line">
          {featuredProjects.map((project, i) => {
            const item = t.projects.items[project.key];
            return (
              <li key={project.key} className="grid gap-4 py-8 md:grid-cols-[3rem_1fr_16rem] md:gap-8">
                <span className="font-mono text-sm text-accent" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4 className="text-xl font-semibold">{item.name}</h4>
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted">{item.description}</p>
                  <div className="mt-5">
                    <ProjectLinks project={project} />
                    {!project.live && (
                      <p className="mt-2 text-sm text-muted">{t.projects.noLive}</p>
                    )}
                  </div>
                </div>
                <ul className="flex flex-wrap content-start gap-2 md:justify-end" dir="ltr" aria-label={t.projects.stack}>
                  {project.stack.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>

        <h3 className="mt-16 font-mono text-xs uppercase tracking-[0.18em] text-muted">{t.projects.more}</h3>
        <ul className="mt-4 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => {
            const item = t.projects.items[project.key];
            return (
              <li key={project.key} className="flex flex-col bg-bg p-5">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>
                <p className="mt-3 font-mono text-xs text-muted" dir="ltr">
                  {project.stack.join(' / ')}
                </p>
                <div className="mt-4">
                  <ProjectLinks project={project} />
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
