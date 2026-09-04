"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Shield,
  Link as LinkIcon,
  Lock,
  Clock,
  UserX,
  FileText,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Link: LinkIcon,
  Lock,
  Clock,
  UserX,
  FileText,
};

export default function AreasAtuacao() {
  return (
    <section className="relative bg-[var(--color-bg-card)] py-24 lg:py-32">
      {/* Top divider */}
      <div className="divider-gold absolute left-0 right-0 top-0" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <ScrollReveal>
            <span className="mb-4 inline-block font-sans text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Especialidades
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mt-4 font-serif text-4xl font-bold text-[var(--color-text-primary)] sm:text-5xl">
              Áreas de Atuação
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-[var(--color-text-secondary)]">
              Atuação completa em Direito do Trabalho, defendendo os direitos
              de trabalhadores em todas as etapas do processo.
            </p>
          </ScrollReveal>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Shield;
            return (
              <ScrollReveal key={service.slug} delay={0.1 + index * 0.08}>
                <Link
                  href={`/areas-de-atuacao#${service.slug}`}
                  className="group card-hover flex h-full flex-col gap-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-7 transition-all duration-300 hover:border-[var(--color-gold-dark)]/40 hover:shadow-[0_0_40px_rgba(200,164,78,0.06)]"
                >
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--color-gold-dark)]/20 bg-[var(--color-gold)]/5 transition-colors group-hover:border-[var(--color-gold)]/30 group-hover:bg-[var(--color-gold)]/10">
                    <Icon className="h-6 w-6 text-[var(--color-gold)]" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-3">
                    <h3 className="font-serif text-xl font-semibold text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-gold)]">
                      {service.title}
                    </h3>
                    <p className="font-sans text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 pt-2 font-sans text-xs font-medium uppercase tracking-wider text-[var(--color-text-muted)] transition-colors group-hover:text-[var(--color-gold)]">
                    Saiba mais
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.6}>
          <div className="mt-14 text-center">
            <Link
              href="/areas-de-atuacao"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-gold-dark)]/30 bg-transparent px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)] transition-all duration-300 hover:bg-[var(--color-gold)]/10 hover:border-[var(--color-gold)]"
            >
              Ver Todas as Áreas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
