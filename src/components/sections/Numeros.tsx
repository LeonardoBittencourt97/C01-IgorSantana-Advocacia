"use client";

import { METRICS } from "@/lib/constants";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Numeros() {
  return (
    <section className="relative bg-[var(--color-bg-elevated)] py-24 lg:py-32">
      {/* Top divider */}
      <div className="divider-gold absolute left-0 right-0 top-0" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <ScrollReveal>
            <span className="mb-4 inline-block font-sans text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Nossos Números
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mt-4 font-serif text-4xl font-bold text-[var(--color-text-primary)] sm:text-5xl">
              Resultados Que Falam por Si
            </h2>
          </ScrollReveal>
        </div>

        {/* Metrics row */}
        <div className="grid gap-12 sm:grid-cols-3">
          {METRICS.map((metric, index) => (
            <ScrollReveal key={metric.label} delay={0.2 + index * 0.15}>
              <AnimatedCounter
                target={metric.value}
                suffix={metric.suffix}
                prefix={metric.prefix}
                label={metric.label}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="divider-gold absolute bottom-0 left-0 right-0" />
    </section>
  );
}
