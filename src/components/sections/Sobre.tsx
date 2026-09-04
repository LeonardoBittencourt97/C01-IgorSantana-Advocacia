"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Briefcase, Scale } from "lucide-react";
import { EXPERIENCE, OAB_COMMISSION } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

const metrics = [
  {
    icon: Briefcase,
    value: `${EXPERIENCE.length}+`,
    label: "Experiências Profissionais",
  },
  {
    icon: Scale,
    value: "100%",
    label: "Dedicação ao Direito Trabalhista",
  },
  {
    icon: Award,
    value: "OAB/PR",
    label: OAB_COMMISSION.title.split("da ")[1]?.split(" da")[0] || "Comissão",
  },
];

export default function Sobre() {
  return (
    <section className="relative bg-[var(--color-bg)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Photo */}
          <ScrollReveal direction="left">
            <div className="relative mx-auto max-w-md lg:mx-0">
              {/* Gold border frame */}
              <div className="relative">
                <div className="absolute -inset-3 rounded-2xl border border-[var(--color-gold-dark)]/30" />
                <div className="absolute -inset-1 rounded-xl border border-[var(--color-gold)]/10" />
                <div className="relative overflow-hidden rounded-xl bg-[var(--color-bg-card)]">
                  <Image
                    src="/images/igor-foto.jpg"
                    alt="Dr. Igor Santana — Advogado Trabalhista"
                    width={500}
                    height={600}
                    className="h-auto w-full object-cover"
                    priority
                  />
                  {/* Subtle overlay gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/40 to-transparent" />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 rounded-lg border border-[var(--color-gold-dark)]/30 bg-[var(--color-bg-card)] px-5 py-3 shadow-lg lg:-right-8">
                <span className="font-serif text-sm font-semibold text-[var(--color-gold)]">
                  OAB/PR 128.723
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Text content */}
          <div className="flex flex-col gap-8">
            <ScrollReveal direction="right" delay={0.1}>
              <span className="inline-block font-sans text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
                Sobre o Advogado
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="font-serif text-4xl font-bold text-[var(--color-text-primary)] sm:text-5xl">
                Dr. Igor Santana
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex flex-col gap-5 text-[var(--color-text-secondary)]">
                <p className="font-sans text-lg leading-relaxed">
                  Advogado, sócio-proprietário do escritório Igor Santana
                  Advocacia, com atuação voltada ao{" "}
                  <span className="font-semibold text-[var(--color-text-primary)]">
                    Direito do Trabalho
                  </span>
                  .
                </p>
                <p className="font-sans text-lg leading-relaxed">
                  {OAB_COMMISSION.description}
                </p>
              </div>
            </ScrollReveal>

            {/* Metrics row */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="grid grid-cols-3 gap-4 pt-4">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex flex-col items-center gap-2 rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-bg-card)] p-4 text-center"
                  >
                    <metric.icon className="h-5 w-5 text-[var(--color-gold)]" />
                    <span className="font-serif text-xl font-bold text-[var(--color-text-primary)] sm:text-2xl">
                      {metric.value}
                    </span>
                    <span className="font-sans text-xs text-[var(--color-text-muted)]">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.5}>
              <Link
                href="/sobre"
                className="group inline-flex items-center gap-2 font-sans text-sm font-medium text-[var(--color-gold)] transition-colors hover:text-[var(--color-gold-light)]"
              >
                Conheça minha trajetória completa
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
