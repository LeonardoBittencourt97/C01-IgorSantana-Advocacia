'use client';

import { MessageCircle, Send } from 'lucide-react';
import Link from 'next/link';
import { company } from '@/lib/constants';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ContatoCTA() {
  const whatsappUrl = `https://wa.me/554132627377?text=${encodeURIComponent(company.whatsappMessage)}`;

  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient background + gold glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c10] via-[#10100a] to-[#0c0c10]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,164,78,0.08)_0%,_transparent_70%)]" />
            <div className="absolute inset-0 border border-[#1e1e24] rounded-3xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 text-center px-8 py-16 md:px-16">
              <ScrollReveal delay={0.1}>
                <p className="text-sm uppercase tracking-widest text-[#c8a44e] mb-3 font-medium">
                  Precisa de ajuda?
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold mb-5">
                  <span className="bg-gradient-to-r from-[#c8a44e] to-[#d4b76a] bg-clip-text text-transparent">
                    Cada caso merece atenção personalizada
                  </span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="text-[#9a9590] leading-relaxed max-w-lg mx-auto mb-10">
                  Entre em contato para uma avaliação do seu caso. Oferecemos atendimento
                  personalizado e transparente em todas as etapas do processo.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  {/* WhatsApp */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white transition-colors"
                    style={{ backgroundColor: '#25D366' }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Fale pelo WhatsApp
                  </a>

                  {/* Formulário */}
                  <Link
                    href="/contato"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-[#c8a44e] text-[#c8a44e] hover:bg-[#c8a44e]/10 transition-colors font-semibold"
                  >
                    <Send className="w-5 h-5" />
                    Formulário de Contato
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
