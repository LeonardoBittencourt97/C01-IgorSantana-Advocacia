import Link from 'next/link';
import { Scale, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { COMPANY, SOCIALS, NAV_ITEMS } from '@/lib/constants';

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
} as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {/* Col 1 — Logo & Tagline */}
          <div className="space-y-4">
            <Link href="/" className="group inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 transition-colors group-hover:border-gold/50">
                <Scale className="h-4.5 w-4.5 text-gold" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg leading-tight font-semibold text-text-primary">
                  {COMPANY.shortName}
                </span>
                <span className="text-[10px] leading-tight tracking-wider uppercase text-text-muted">
                  {COMPANY.tagline}
                </span>
              </div>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-text-secondary">
              Defendemos os direitos dos trabalhadores com transparência, ética e excelência.
            </p>
          </div>

          {/* Col 2 — Links Rápidos */}
          <div>
            <h3 className="mb-4 font-serif text-sm font-semibold uppercase tracking-wider text-text-primary">
              Links Rápidos
            </h3>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary transition-colors duration-200 hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contato */}
          <div>
            <h3 className="mb-4 font-serif text-sm font-semibold uppercase tracking-wider text-text-primary">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`tel:${COMPANY.phone.replace(/\D/g, '')}`}
                  className="text-sm text-text-secondary transition-colors hover:text-gold"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={COMPANY.mapsRoutesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary transition-colors hover:text-gold"
                >
                  {COMPANY.address.full}
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text-muted transition-all duration-200 hover:border-gold/40 hover:bg-gold/10 hover:text-gold"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-text-muted">
            &copy; {currentYear} {COMPANY.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-text-muted">{COMPANY.oab}</p>
        </div>
      </div>
    </footer>
  );
}
