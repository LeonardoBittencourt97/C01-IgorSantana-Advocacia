"use client";

import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-[var(--color-gold)] text-[var(--color-gold)]"
              : "text-[var(--color-border)]"
          }`}
        />
      ))}
    </div>
  );
}

export default function Depoimentos() {
  // Show first 3 testimonials
  const displayedTestimonials = TESTIMONIALS.slice(0, 3);

  return (
    <section className="relative bg-[var(--color-bg)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <ScrollReveal>
            <span className="mb-4 inline-block font-sans text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Depoimentos
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mt-4 font-serif text-4xl font-bold text-[var(--color-text-primary)] sm:text-5xl">
              O Que Nossos Clientes Dizem
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-[var(--color-text-secondary)]">
              A satisfação dos nossos clientes é o nosso maior orgulho.
              Confira o que eles têm a dizer sobre nossa atuação.
            </p>
          </ScrollReveal>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {displayedTestimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={0.15 + index * 0.1}>
              <div className="relative flex h-full flex-col gap-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-7 transition-colors duration-300 hover:border-[var(--color-gold-dark)]/30">
                {/* Quote icon */}
                <Quote className="h-8 w-8 text-[var(--color-gold)]/20" />

                {/* Stars */}
                <StarRating rating={testimonial.rating} />

                {/* Text */}
                <p className="flex-1 font-sans text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="border-t border-[var(--color-border-subtle)] pt-4">
                  <span className="font-sans text-sm font-medium text-[var(--color-text-primary)]">
                    {testimonial.name}
                  </span>
                  <span className="mt-0.5 block font-sans text-xs text-[var(--color-text-muted)]">
                    Cliente Verificado
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Google rating badge */}
        <ScrollReveal delay={0.5}>
          <div className="mt-12 flex items-center justify-center gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-[var(--color-gold)] text-[var(--color-gold)]"
                />
              ))}
            </div>
            <span className="font-sans text-sm text-[var(--color-text-secondary)]">
              +120 avaliações no Google
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
