import type { Metadata } from "next";
import {
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { company, seo } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContatoForm from "./ContatoForm";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com o escritório Igor Santana Advocacia. Atendimento por WhatsApp, telefone ou formulário. Advogado trabalhista em Curitiba.",
  openGraph: {
    title: `Contato | ${company.name}`,
    description: "Entre em contato para uma avaliação do seu caso.",
    url: `${seo.url}/contato`,
  },
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-card/30 to-bg" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Breadcrumbs
              items={[
                { label: "Início", href: "/" },
                { label: "Contato" },
              ]}
            />
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-4 mt-6">
              Entre em contato
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
              Fale{" "}
              <span className="text-gradient-gold">Conosco</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Estamos prontos para ajudá-lo. Preencha o formulário ou entre em
              contato diretamente pelo WhatsApp.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          <ScrollReveal direction="left" className="lg:col-span-3">
            <ContatoForm />
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="space-y-6">
              <a
                href={`https://wa.me/${company.phoneWa}?text=${encodeURIComponent(company.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-bg-card border border-border rounded-2xl p-6 card-hover group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Phone className="text-gold" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      Telefone / WhatsApp
                    </h3>
                    <p className="text-text-secondary text-sm mb-2">
                      {company.phone}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#25D366] font-medium">
                      <MessageCircle size={14} />
                      Falar pelo WhatsApp
                    </span>
                  </div>
                </div>
              </a>

              <div className="bg-bg-card border border-border rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <MapPin className="text-gold" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      Endereço
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {company.address.street}, {company.address.complement}
                      <br />
                      {company.address.neighborhood}
                      <br />
                      {company.address.city}/{company.address.state}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-bg-card border border-border rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Clock className="text-gold" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      Horário de Atendimento
                    </h3>
                    <p className="text-text-secondary text-sm">
                      Segunda a Sexta
                      <br />
                      9h às 18h
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-bg-card border border-border rounded-2xl overflow-hidden">
                <iframe
                  title="Localização - Igor Santana Advocacia"
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5!2d${company.coordinates.lng}!3d${company.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${company.coordinates.lat},${company.coordinates.lng}!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr`}
                  width="100%"
                  height="220"
                  style={{
                    border: 0,
                    filter: "grayscale(1) invert(0.92) contrast(0.9)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
