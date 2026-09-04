import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Scale, BookOpen, Briefcase, GraduationCap, Quote } from "lucide-react";
import { COMPANY, EXPERIENCE, EDUCATION, OAB_COMMISSION, SEO } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Sobre",
  description: `Conheça o Dr. ${COMPANY.shortName}, advogado trabalhista em Curitiba. ${COMPANY.longDescription}`,
  openGraph: {
    title: `Sobre | ${COMPANY.name}`,
    description: `Conheça o Dr. ${COMPANY.shortName}, advogado trabalhista em Curitiba.`,
    url: `${SEO.url}/sobre`,
    images: [{ url: SEO.ogImage, width: 1200, height: 630, alt: `Dr. ${COMPANY.shortName} — ${COMPANY.name}` }],
  },
  alternates: {
    canonical: "/sobre",
  },
};

export default function SobrePage() {
  return (
    <section className="min-h-screen bg-bg">
      {/* ─── Hero ─── */}
      <div className="relative overflow-hidden border-b border-border pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-gold-glow),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <ScrollReveal>
            <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Sobre" }]} />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              Sobre{" "}
              <span className="text-gradient-gold">Dr. Igor Santana</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-dark" />
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary">
              Advogado trabalhista comprometido com a justiça e a defesa dos direitos dos trabalhadores brasileiros.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ─── Bio + Foto ─── */}
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Foto */}
          <ScrollReveal direction="left">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-gold/20 via-transparent to-gold-dark/20 blur-sm" />
              <div className="relative overflow-hidden rounded-xl border-2 border-gold/30 p-2">
                <Image
                  src="/images/igor-foto.jpg"
                  alt={`Dr. ${COMPANY.shortName} — ${COMPANY.tagline}`}
                  width={600}
                  height={750}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-lg border border-border bg-bg-card px-4 py-2 shadow-lg">
                <span className="text-sm font-medium text-gold">{COMPANY.oab}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Bio */}
          <div className="space-y-6">
            <ScrollReveal direction="right">
              <h2 className="font-serif text-3xl font-bold text-text-primary sm:text-4xl">
                Quem é o <span className="text-gradient-gold">Dr. Igor Santana</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <p className="text-lg leading-relaxed text-text-secondary">
                {COMPANY.longDescription}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <p className="text-lg leading-relaxed text-text-secondary">
                Sua atuação é pautada por valores fundamentais que orientam cada decisão e cada orientação jurídica prestada aos seus clientes.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { icon: Scale, label: "Ética" },
                  { icon: BookOpen, label: "Transparência" },
                  { icon: Briefcase, label: "Excelência" },
                ].map((value, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 rounded-lg border border-border bg-bg-card p-4 text-center transition-colors hover:border-gold/30">
                    <value.icon className="h-6 w-6 text-gold" />
                    <span className="text-sm font-medium text-text-primary">{value.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* ─── OAB Commission ─── */}
      <div className="border-y border-border bg-bg-card">
        <div className="mx-auto max-w-5xl px-4 py-20">
          <ScrollReveal>
            <div className="rounded-2xl border border-gold/20 bg-bg p-8 sm:p-12 glow-gold">
              <div className="flex items-start gap-6">
                <div className="hidden shrink-0 sm:flex">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10">
                    <Scale className="h-7 w-7 text-gold" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-bold text-text-primary sm:text-3xl">
                    <span className="text-gradient-gold">Comissão OAB/PR</span>
                  </h2>
                  <h3 className="text-lg font-semibold text-gold">{OAB_COMMISSION.title}</h3>
                  <p className="text-lg leading-relaxed text-text-secondary">
                    {OAB_COMMISSION.description}
                  </p>
                  <div className="flex items-center gap-3 rounded-lg border border-border-subtle bg-bg-elevated p-4">
                    <Quote className="h-5 w-5 shrink-0 text-gold/60" />
                    <p className="italic text-text-secondary">
                      &ldquo;A advocacia vai além do processo — é um compromisso com a transformação social e o desenvolvimento sustentável do trabalho.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ─── Educação ─── */}
      <div className="mx-auto max-w-5xl px-4 py-20">
        <ScrollReveal>
          <div className="text-center">
            <GraduationCap className="mx-auto h-8 w-8 text-gold" />
            <h2 className="mt-4 font-serif text-3xl font-bold text-text-primary sm:text-4xl">
              <span className="text-gradient-gold">Formação Acadêmica</span>
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-dark" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-bg-card p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                <GraduationCap className="h-6 w-6 text-gold" />
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-xl font-bold text-text-primary">
                  {EDUCATION.degree}
                </h3>
                <p className="text-gold">{EDUCATION.institution}</p>
              </div>
            </div>

            <div className="divider-gold my-6" />

            <ul className="space-y-3">
              {EDUCATION.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span className="text-text-secondary leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>

      {/* ─── Experiência ─── */}
      <div className="border-y border-border bg-bg-card">
        <div className="mx-auto max-w-5xl px-4 py-20">
          <ScrollReveal>
            <div className="text-center">
              <Briefcase className="mx-auto h-8 w-8 text-gold" />
              <h2 className="mt-4 font-serif text-3xl font-bold text-text-primary sm:text-4xl">
                <span className="text-gradient-gold">Experiência Profissional</span>
              </h2>
              <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-dark" />
              <p className="mx-auto mt-4 max-w-xl text-text-secondary">
                Trajetória construída com dedicação e compromisso com a excelência jurídica.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative mt-14">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 hidden w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent sm:left-8 md:block" />

            <div className="space-y-8">
              {EXPERIENCE.map((exp, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="group relative rounded-2xl border border-border bg-bg p-6 transition-all hover:border-gold/30 sm:pl-20 card-hover md:pl-20">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-6 hidden h-4 w-4 rounded-full border-2 border-gold bg-bg transition-all group-hover:scale-125 group-hover:bg-gold md:block" style={{ left: "calc(2rem - 8px)" }} />

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-2">
                        <h3 className="font-serif text-xl font-bold text-text-primary group-hover:text-gold transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-gold font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-start gap-1 sm:items-end sm:text-right">
                        <span className="rounded-full border border-border bg-bg-elevated px-3 py-1 text-xs font-medium text-text-secondary">
                          {exp.period}
                        </span>
                        <span className="text-xs text-text-muted">{exp.location}</span>
                      </div>
                    </div>

                    <div className="divider-gold my-4" />

                    <p className="text-text-secondary leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── CTA Final ─── */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-gold-glow),transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-bold text-text-primary sm:text-4xl">
              Precisa de um advogado trabalhista?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-lg text-text-secondary">
              Entre em contato e descubra como podemos ajudá-lo a garantir seus direitos.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-3.5 font-semibold text-bg transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
              >
                Fale Conosco
              </Link>
              <Link
                href={`https://wa.me/${COMPANY.phoneFormatted}?text=${encodeURIComponent(COMPANY.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-gold/30 bg-transparent px-8 py-3.5 font-semibold text-gold transition-all hover:border-gold hover:bg-gold/10"
              >
                WhatsApp
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
