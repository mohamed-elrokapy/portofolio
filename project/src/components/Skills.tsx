import { useLanguage } from '../contexts/useLanguage';
import { skillGroups } from '../data/portfolio';

const order = ['frontend', 'backend', 'ops', 'tooling'] as const;

const Skills = () => {
  const { translations: t } = useLanguage();

  return (
    <section id="skills" className="border-t border-line">
      <div className="section">
        <p className="eyebrow">04</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{t.skills.title}</h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">{t.skills.intro}</p>

        <dl className="mt-10 divide-y divide-line border-y border-line">
          {order.map((key) => (
            <div key={key} className="grid gap-3 py-6 md:grid-cols-[14rem_1fr] md:gap-10">
              <dt className="font-semibold">{t.skills.groups[key]}</dt>
              <dd>
                <ul className="flex flex-wrap gap-2" dir="ltr">
                  {skillGroups[key].map((skill) => (
                    <li key={skill} className="chip !text-ink">
                      {skill}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Skills;
