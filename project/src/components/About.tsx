import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/useLanguage';
import { strengths } from '../data/portfolio';

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

        <h3 className="mt-16 text-xl font-semibold">{t.about.bringTitle}</h3>
        <p className="mt-2 text-muted">{t.about.bringIntro}</p>
        <ul className="mt-6 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
          {strengths.map((strength) => {
            const item = t.about.strengths[strength.key];
            return (
              <li key={strength.key} className="flex flex-col bg-bg p-6">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="mt-2 flex-1 leading-relaxed text-muted">{item.text}</p>
                <div className="mt-4">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{t.about.evidence}</p>
                  <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
                    {strength.evidence.map((e) => (
                      <li key={e.key}>
                        <a
                          href={e.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded text-sm font-semibold text-accent underline-offset-4 hover:underline">
                          {t.about.evidenceLinks[e.key as keyof typeof t.about.evidenceLinks]}
                          <ArrowUpRight size={14} aria-hidden="true" />
                          <span className="sr-only">({t.common.opensNewTab})</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default About;
