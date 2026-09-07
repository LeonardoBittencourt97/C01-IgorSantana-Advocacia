'use client';

import { metrics } from '@/lib/constants';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function Numeros() {
  return (
    <section className="relative bg-bg-elevated py-24">
      <div className="divider-gold" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <ScrollReveal className="text-center mb-16 space-y-4">
          <p className="font-sans text-gold text-sm font-semibold uppercase tracking-[0.2em]">
            Nossos Números
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
            Resultados Que Falam por Si
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {metrics.map((m, i) => (
            <ScrollReveal key={m.label} delay={i * 0.15}>
              <AnimatedCounter
                target={m.value}
                suffix={m.suffix}
                prefix={m.prefix}
                label={m.label}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="divider-gold" />
    </section>
  );
}
