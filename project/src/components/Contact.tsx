import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import type { ReactNode } from 'react';
import { useLanguage } from '../contexts/useLanguage';
import { profile } from '../data/portfolio';

interface Row {
  icon: ReactNode;
  label: string;
  text: string;
  href?: string;
  external?: boolean;
}

const Contact = () => {
  const { translations: t } = useLanguage();

  const rows: Row[] = [
    { icon: <Phone size={18} />, label: t.contact.phone, text: profile.phone, href: profile.phoneHref },
    { icon: <MessageCircle size={18} />, label: t.contact.whatsapp, text: profile.phone, href: profile.whatsapp, external: true },
    { icon: <Linkedin size={18} />, label: t.contact.linkedin, text: 'mohamed-elrokapy', href: profile.linkedin, external: true },
    { icon: <Github size={18} />, label: t.contact.github, text: 'mohamed-elrokapy', href: profile.github, external: true },
    { icon: <MapPin size={18} />, label: t.contact.location, text: t.contact.locationValue },
  ];

  return (
    <section id="contact" className="border-t border-line bg-surface/50">
      <div className="section">
        <p className="eyebrow">04</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{t.contact.title}</h2>
        <p className="mt-4 text-xl font-medium">{t.contact.lead}</p>
        <p className="mt-2 max-w-2xl text-lg text-muted">{t.contact.sub}</p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex max-w-full items-center gap-3 break-all rounded border border-accent px-5 py-4 text-lg font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-fg sm:text-2xl"
          dir="ltr">
          <Mail size={22} aria-hidden="true" className="shrink-0" />
          {profile.email}
        </a>

        <ul className="mt-12 divide-y divide-line border-y border-line">
          {rows.map((row) => (
            <li key={row.label} className="flex items-center gap-4 py-4">
              <span className="text-accent" aria-hidden="true">
                {row.icon}
              </span>
              <span className="w-28 shrink-0 text-sm text-muted">{row.label}</span>
              {row.href ? (
                <a
                  href={row.href}
                  {...(row.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="min-w-0 break-words font-medium underline-offset-4 hover:text-accent hover:underline"
                  dir="ltr">
                  {row.text}
                  {row.external && <span className="sr-only"> ({t.common.opensNewTab})</span>}
                </a>
              ) : (
                <span className="font-medium">{row.text}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
