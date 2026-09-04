"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { COMPANY } from "@/lib/constants";

export default function ContatoCTA() {
  const whatsappUrl = `https://wa.me/${COMPANY.phoneFormatted}?text=${encodeURIComponent(COMPANY.whatsappMessage)}`;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-card/50 to-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Precisa de ajuda?
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Cada caso merece{" "}
            <span className="text-gradient-gold">atenção personalizada</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Entre em contato para uma avaliação do seu caso. Atendemos em todo o
            Brasil com ética, transparência e compromisso.
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
                <MessageCircle size={20} />
                WhatsApp Direto
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contato"
                className="inline-flex items-center gap-3 border border-gold/30 text-gold px-8 py-4 rounded-lg font-medium text-lg transition-all hover:border-gold hover:bg-gold/5"
              >
                <Phone size={20} />
                Formulário de Contato
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
