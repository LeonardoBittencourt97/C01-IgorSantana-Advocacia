'use client';

import { Quote, Star, BadgeCheck } from 'lucide-react';
import { testimonials } from '@/lib/constants';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Depoimentos() {
  const displayed = testimonials.slice(0, 3);

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-widest text-[#c8a44e] mb-3 text-center font-medium">
            Depoimentos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0ece4] text-center mb-16">
            O que nossos clientes dizem
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayed.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="h-full bg-[#0c0c10] border border-[#1e1e24] rounded-2xl p-6 flex flex-col">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-[#c8a44e]/40 mb-4" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 fill-[#c8a44e] text-[#c8a44e]"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-[#9a9590] leading-relaxed flex-1 mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="border-t border-[#1e1e24] pt-4">
                  <p className="font-semibold text-[#f0ece4] text-sm">{t.name}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-[#c8a44e] mt-1">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    Cliente Verificado
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-10">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0c0c10] border border-[#1e1e24] text-sm text-[#9a9590]">
            ⭐ +120 avaliações no Google
          </span>
        </ScrollReveal>
      </div>
    </section>
  );
}
