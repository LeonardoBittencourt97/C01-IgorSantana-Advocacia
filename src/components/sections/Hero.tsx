"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Scale, ChevronDown } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[var(--color-bg)]">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Radial glow behind the scale */}
        <div className="absolute right-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(200,164,78,0.06)_0%,transparent_70%)]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(200,164,78,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,164,78,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Text content */}
          <div className="flex flex-col gap-8">
            <ScrollReveal direction="left" delay={0.1}>
              <span className="inline-block font-sans text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
                {COMPANY.tagline}
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl xl:text-8xl">
                Advocacia
                <br />
                <span className="text-gradient-gold">Trabalhista</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.35}>
              <p className="max-w-xl font-sans text-lg leading-relaxed text-[var(--color-text-secondary)]">
                {COMPANY.description}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.5}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-gold)] px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-wider text-[var(--color-bg)] transition-all duration-300 hover:bg-[var(--color-gold-light)] hover:shadow-[0_0_30px_rgba(200,164,78,0.3)]"
                >
                  Fale Conosco
                </Link>
                <Link
                  href="/areas-de-atuacao"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-wider text-[var(--color-text-primary)] transition-all duration-300 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                >
                  Áreas de Atuação
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Decorative scale of justice */}
          <ScrollReveal direction="right" delay={0.4} className="hidden lg:flex">
            <div className="relative flex items-center justify-center">
              {/* Outer glow ring */}
              <div className="absolute h-[320px] w-[320px] rounded-full border border-[var(--color-gold-dark)]/20 xl:h-[400px] xl:w-[400px]" />
              <div className="absolute h-[240px] w-[240px] rounded-full border border-[var(--color-gold-dark)]/10 xl:h-[300px] xl:w-[300px]" />

              {/* Scale icon with glow */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="glow-gold-strong rounded-2xl border border-[var(--color-gold-dark)]/30 bg-[var(--color-bg-card)] p-12 xl:p-16">
                  <Scale
                    className="h-24 w-24 text-[var(--color-gold)] xl:h-32 xl:w-32"
                    strokeWidth={1}
                  />
                </div>
              </motion.div>

              {/* Decorative dots */}
              <div className="absolute left-8 top-8 h-2 w-2 rounded-full bg-[var(--color-gold)]/30" />
              <div className="absolute bottom-12 right-12 h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]/20" />
              <div className="absolute right-8 top-1/2 h-1 w-1 rounded-full bg-[var(--color-gold)]/40" />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-sans text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
            Saiba mais
          </span>
          <ChevronDown className="h-5 w-5 text-[var(--color-gold)]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
