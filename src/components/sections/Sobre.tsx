'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Award } from 'lucide-react';
import { company, experience, oabCommission } from '@/lib/constants';
import ScrollReveal from '@/components/ui/ScrollReveal';

const metaMetrics = [
  { value: '4+', label: 'Experiências' },
  { value: '100%', label: 'Dedicação' },
  { value: 'OAB/PR', label: 'Comissão' },
] as const;

export default function Sobre() {
  return (
    <section className="relative bg-bg py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Photo */}
        <ScrollReveal direction="left" className="relative mx-auto lg:mx-0">
          <div className="relative w-80 h-96 md:w-96 md:h-[28rem] rounded-2xl overflow-hidden border-2 border-gold/30 shadow-[0_0_60px_rgba(200,164,78,0.12)]">
            <Image
              src="/images/igor-foto.jpg"
              alt="Dr. Igor Santana"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 320px, 384px"
              priority
            />
          </div>
          {/* OAB badge */}
          <div className="absolute -bottom-3 -right-3 flex items-center gap-2 rounded-lg bg-bg-card border border-gold/30 px-4 py-2 shadow-lg">
            <Award className="w-5 h-5 text-gold" />
            <span className="font-sans text-xs font-semibold text-gold">{company.oab}</span>
          </div>
        </ScrollReveal>

        {/* Text */}
        <div className="space-y-6">
          <ScrollReveal>
            <p className="font-sans text-gold text-sm font-semibold uppercase tracking-[0.2em]">
              Sobre o Advogado
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
              Dr. Igor Santana
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-sans text-text-secondary leading-relaxed">
              {company.longDescription}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="rounded-xl border border-border bg-bg-card p-5 space-y-2">
              <h3 className="font-sans text-sm font-semibold text-gold uppercase tracking-wider">
                {oabCommission.title}
              </h3>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">
                {oabCommission.description}
              </p>
            </div>
          </ScrollReveal>

          {/* Metrics */}
          <ScrollReveal delay={0.4}>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {metaMetrics.map((m) => (
                <div key={m.label} className="text-center space-y-1">
                  <p className="font-serif text-2xl font-bold text-gold">{m.value}</p>
                  <p className="font-sans text-xs text-text-secondary uppercase tracking-wider">{m.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold hover:text-gold-light transition-colors mt-2"
            >
              Conheça minha trajetória completa
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
