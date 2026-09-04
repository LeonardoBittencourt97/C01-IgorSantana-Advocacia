"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Link as LinkIcon,
  Lock,
  Clock,
  UserX,
  FileText,
  Check,
  Phone,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SERVICES, COMPANY } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Link: LinkIcon,
  Lock,
  Clock,
  UserX,
  FileText,
};

export default function AreasDeAtuacao() {
  const whatsappUrl = `https://wa.me/${COMPANY.phoneFormatted}?text=${encodeURIComponent(COMPANY.whatsappMessage)}`;

  return (
    <>
      {/* ═══ Hero ═══ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-card/30 to-bg" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-[120px]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Especialização
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
              Áreas de{" "}
              <span className="text-gradient-gold">Atuação</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
              Atuação completa em Direito do Trabalho. Cada área é tratada com
              profundidade técnica, dedicação e compromisso com os direitos dos
              trabalhadores.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Divider ═══ */}
      <div className="divider-gold max-w-5xl mx-auto" />

      {/* ═══ Services ═══ */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-20 md:space-y-32">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] ?? FileText;
            const isEven = index % 2 === 0;

            return (
              <article
                key={service.slug}
                id={service.slug}
                className="scroll-mt-32"
              >
                <div
                  className={`flex flex-col gap-12 lg:gap-16 items-center ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* ── Icon & Visual ── */}
                  <ScrollReveal
                    direction={isEven ? "left" : "right"}
                    className="flex-1 flex justify-center"
                  >
                    <div className="relative group">
                      {/* Glow ring */}
                      <div className="absolute inset-0 rounded-2xl bg-gold/5 blur-xl group-hover:bg-gold/10 transition-colors duration-500" />
                      <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl border border-gold/20 bg-bg-card flex items-center justify-center group-hover:border-gold/40 transition-colors duration-500">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gold/10 rounded-full blur-2xl scale-150" />
                          <Icon
                            size={64}
                            className="text-gold relative z-10"
                            strokeWidth={1.5}
                          />
                        </div>
                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/30 rounded-tl-2xl" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/30 rounded-br-2xl" />
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* ── Content ── */}
                  <div className="flex-1 space-y-6">
                    <ScrollReveal direction={isEven ? "right" : "left"}>
                      <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold/70">
                        {String(index + 1).padStart(2, "0")} /{" "}
                        {String(SERVICES.length).padStart(2, "0")}
                      </p>
                    </ScrollReveal>

                    <ScrollReveal
                      direction={isEven ? "right" : "left"}
                      delay={0.05}
                    >
                      <h2 className="font-serif text-3xl md:text-4xl font-semibold">
                        {service.title}
                      </h2>
                    </ScrollReveal>

                    <ScrollReveal
                      direction={isEven ? "right" : "left"}
                      delay={0.1}
                    >
                      <p className="text-text-secondary text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </ScrollReveal>

                    <ScrollReveal
                      direction={isEven ? "right" : "left"}
                      delay={0.15}
                    >
                      <ul className="space-y-3 pt-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-text-primary"
                          >
                            <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center">
                              <Check size={12} className="text-gold" />
                            </span>
                            <span className="text-text-secondary">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </ScrollReveal>

                    <ScrollReveal
                      direction={isEven ? "right" : "left"}
                      delay={0.2}
                    >
                      <div className="pt-4">
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Link
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-gold border border-gold/30 px-6 py-3 rounded-lg font-medium transition-all hover:border-gold hover:bg-gold/5"
                          >
                            <Phone size={16} />
                            Consultar sobre esta área
                          </Link>
                        </motion.div>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>

                {/* ── Separator ── */}
                {index < SERVICES.length - 1 && (
                  <ScrollReveal delay={0.1}>
                    <div className="divider-gold mt-16 md:mt-24 max-w-2xl mx-auto" />
                  </ScrollReveal>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-card/50 to-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Não encontrou sua área?
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
              Entre em{" "}
              <span className="text-gradient-gold">contato</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Cada caso é único. Entre em contato para uma avaliação
              personalizada do seu caso. Atendemos em todo o Brasil com ética,
              transparência e compromisso.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-lg font-medium text-lg transition-shadow hover:shadow-[0_0_30px_rgba(37,211,102,0.3)]"
                >
                  <Phone size={20} />
                  Falar com um advogado
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-3 border border-gold/30 text-gold px-8 py-4 rounded-lg font-medium text-lg transition-all hover:border-gold hover:bg-gold/5"
                >
                  Formulário de Contato
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
