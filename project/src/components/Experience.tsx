import { useLanguage } from '../contexts/useLanguage';
import { jobOrder } from '../data/portfolio';

const Experience = () => {
  const { translations: t } = useLanguage();
  const e = t.experience;

  return (
    <section id="experience" className="border-t border-line bg-surface/50">
      <div className="section">
        <p className="eyebrow">03</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{e.title}</h2>

        <ol className="mt-10 divide-y divide-line border-y border-line">
          {jobOrder.map((key) => {
            const job = e.jobs[key];
            return (
              <li key={key} className="grid gap-3 py-8 md:grid-cols-[14rem_1fr] md:gap-10">
                <p className="font-mono text-sm text-accent">{job.period}</p>
                <div>
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="mt-1 text-muted">
                    {job.org} <span aria-hidden="true">/</span> {job.place}
                  </p>
                  <ul className="mt-4 max-w-3xl list-disc space-y-2 ps-5 leading-relaxed text-muted marker:text-accent">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>

        <h3 className="mt-12 text-lg font-semibold">{e.educationTitle}</h3>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 ps-5 leading-relaxed text-muted marker:text-accent">
          {e.education.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
