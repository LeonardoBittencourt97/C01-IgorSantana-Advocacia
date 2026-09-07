'use client';

import { Shield, Link as LucideLink, Lock, Clock, UserX, FileText, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { services } from '@/lib/constants';
import ScrollReveal from '@/components/ui/ScrollReveal';

const iconMap = { Shield, Link: LucideLink, Lock, Clock, UserX, FileText } as const;

export default function AreasAtuacao() {
  const displayed = services.slice(0, 3);

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-widest text-[#c8a44e] mb-3 text-center font-medium">
            Áreas de Atuação
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0ece4] text-center mb-16">
            Experiência que faz a diferença
          </h2>
        </ScrollReveal>

        <div className="space-y-20">
          {displayed.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const reversed = i % 2 !== 0;

            return (
              <ScrollReveal key={service.slug} delay={i * 0.1}>
                <div
                  className={`flex flex-col ${
                    reversed ? 'md:flex-row-reverse' : 'md:flex-row'
                  } items-center gap-10`}
                >
                  {/* Icon block */}
                  <div className="flex-shrink-0 w-44 h-44 rounded-2xl bg-[#0c0c10] border border-[#1e1e24] flex items-center justify-center">
                    {Icon && <Icon className="w-16 h-16 text-[#c8a44e]" strokeWidth={1.5} />}
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-[#f0ece4] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#9a9590] leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-center gap-2 text-sm text-[#9a9590] justify-center md:justify-start"
                        >
                          <Check className="w-4 h-4 text-[#c8a44e] shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="text-center mt-16">
          <Link
            href="/areas-de-atuacao"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#c8a44e] text-[#c8a44e] hover:bg-[#c8a44e]/10 transition-colors font-medium"
          >
            Ver todas as áreas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
