import { useLanguage } from '../contexts/useLanguage';

const jobOrder = ['flolabs', 'drcode', 'gooweb', 'freelance'] as const;

const About = () => {
  const { translations: t } = useLanguage();

  return (
    <section id="about" className="border-t border-line">
      <div className="section">
        <p className="eyebrow">01</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{t.about.title}</h2>

        <div className="mt-10 grid gap-12 md:grid-cols-[1.3fr_0.7fr] md:gap-16">
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>{t.about.intro}</p>
            <p>{t.about.outro}</p>
          </div>

          <dl className="h-fit space-y-5 rounded-lg border border-line bg-surface p-6">
            <h3 className="eyebrow !text-muted">{t.about.factsTitle}</h3>
            {(
              [
                [t.about.location, t.about.locationValue],
                [t.about.focus, t.about.focusValue],
                [t.about.languages, t.about.languagesValue],
              ] as const
            ).map(([label, value]) => (
              <div key={label}>
                <dt className="text-sm text-muted">{label}</dt>
                <dd className="mt-1 font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <h3 className="mt-16 text-xl font-semibold">{t.about.experience}</h3>
        <ol className="mt-6 divide-y divide-line border-y border-line">
          {jobOrder.map((key) => {
            const job = t.about.jobs[key];
            const period = key === 'flolabs' ? t.about.present : t.about.periods[key];
            return (
              <li key={key} className="grid gap-2 py-6 md:grid-cols-[14rem_1fr] md:gap-10">
                <p className="font-mono text-sm text-accent">{period}</p>
                <div>
                  <h4 className="font-semibold">
                    {job.role} <span className="font-normal text-muted">| {job.place}</span>
                  </h4>
                  <p className="mt-2 max-w-2xl leading-relaxed text-muted">{job.desc}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default About;
