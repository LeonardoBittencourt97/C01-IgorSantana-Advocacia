"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { COMPANY } from "@/lib/constants";

// ─── Types ────────────────────────────────────────────
interface FormData {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
  website: string; // honeypot
}

interface FormErrors {
  nome?: string;
  email?: string;
  mensagem?: string;
}

// ─── Constants ────────────────────────────────────────
const ASSUNTOS = [
  "Demissão sem justa causa",
  "Acidente de trabalho",
  "Reconhecimento de vínculo",
  "Estabilidade no emprego",
  "Horas extras",
  "Outro",
] as const;

const WHATSAPP_NUMBER = "554132627377";

// ─── Component ────────────────────────────────────────
export default function ContatoForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
    website: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  // ── Validation ────────────────────────────────────
  function validate(): FormErrors {
    const newErrors: FormErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = "Por favor, informe seu nome.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Por favor, informe seu e-mail.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Por favor, informe um e-mail válido.";
    }

    if (!formData.mensagem.trim()) {
      newErrors.mensagem = "Por favor, escreva sua mensagem.";
    }

    return newErrors;
  }

  // ── Submit ────────────────────────────────────────
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Honeypot check — bots fill hidden fields
    if (formData.website) return;

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    // Build WhatsApp message
    const lines = [
      `*Nova mensagem via site*`,
      ``,
      `*Nome:* ${formData.nome}`,
      `*E-mail:* ${formData.email}`,
    ];

    if (formData.telefone) {
      lines.push(`*Telefone:* ${formData.telefone}`);
    }

    if (formData.assunto) {
      lines.push(`*Assunto:* ${formData.assunto}`);
    }

    lines.push(``, `*Mensagem:*`, formData.mensagem);

    const text = lines.join("\n");
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    setSubmitted(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  // ── Field updater ─────────────────────────────────
  function updateField(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error on edit
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  // ── Input class helper ────────────────────────────
  const inputBase =
    "w-full bg-bg-elevated border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted transition-colors focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30";
  const inputError = "border-error focus:border-error focus:ring-error/30";

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-card/30 to-bg" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* ── Hero ─────────────────────────────────── */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-4">
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

        {/* ── Two-column layout ────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* ── Left: Form ──────────────────────────── */}
          <ScrollReveal direction="left" className="lg:col-span-3">
            <div className="bg-bg-card border border-border rounded-2xl p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="mx-auto mb-4 text-success" size={48} />
                  <h3 className="font-serif text-2xl font-semibold mb-2">
                    Mensagem enviada!
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Você foi redirecionado para o WhatsApp. Caso não tenha
                    aberto,{" "}
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold underline hover:text-gold-light"
                    >
                      clique aqui
                    </a>
                    .
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        nome: "",
                        email: "",
                        telefone: "",
                        assunto: "",
                        mensagem: "",
                        website: "",
                      });
                    }}
                    className="text-gold border border-gold/30 px-6 py-2 rounded-lg hover:bg-gold/5 transition-colors cursor-pointer"
                  >
                    Enviar outra mensagem
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {/* Nome */}
                  <div className="mb-5">
                    <label
                      htmlFor="nome"
                      className="block text-sm font-medium text-text-secondary mb-1.5"
                    >
                      Nome <span className="text-error">*</span>
                    </label>
                    <input
                      id="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => updateField("nome", e.target.value)}
                      placeholder="Seu nome completo"
                      aria-describedby={errors.nome ? "error-nome" : undefined}
                      className={`${inputBase} ${errors.nome ? inputError : ""}`}
                    />
                    {errors.nome && (
                      <p id="error-nome" className="mt-1.5 text-sm text-error flex items-center gap-1" role="alert">
                        <AlertCircle size={14} /> {errors.nome}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-secondary mb-1.5"
                    >
                      E-mail <span className="text-error">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="seu@email.com"
                      aria-describedby={errors.email ? "error-email" : undefined}
                      className={`${inputBase} ${errors.email ? inputError : ""}`}
                    />
                    {errors.email && (
                      <p id="error-email" className="mt-1.5 text-sm text-error flex items-center gap-1" role="alert">
                        <AlertCircle size={14} /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Telefone */}
                  <div className="mb-5">
                    <label
                      htmlFor="telefone"
                      className="block text-sm font-medium text-text-secondary mb-1.5"
                    >
                      Telefone
                    </label>
                    <input
                      id="telefone"
                      type="tel"
                      value={formData.telefone}
                      onChange={(e) => updateField("telefone", e.target.value)}
                      placeholder="(41) 99999-0000"
                      className={inputBase}
                    />
                  </div>

                  {/* Assunto */}
                  <div className="mb-5">
                    <label
                      htmlFor="assunto"
                      className="block text-sm font-medium text-text-secondary mb-1.5"
                    >
                      Assunto
                    </label>
                    <select
                      id="assunto"
                      value={formData.assunto}
                      onChange={(e) => updateField("assunto", e.target.value)}
                      className={`${inputBase} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239a9590%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat pr-10`}
                    >
                      <option value="">Selecione o assunto</option>
                      {ASSUNTOS.map((a) => (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Mensagem */}
                  <div className="mb-6">
                    <label
                      htmlFor="mensagem"
                      className="block text-sm font-medium text-text-secondary mb-1.5"
                    >
                      Mensagem <span className="text-error">*</span>
                    </label>
                    <textarea
                      id="mensagem"
                      required
                      rows={5}
                      value={formData.mensagem}
                      onChange={(e) => updateField("mensagem", e.target.value)}
                      placeholder="Descreva brevemente sua situação..."
                      aria-describedby={errors.mensagem ? "error-mensagem" : undefined}
                      className={`${inputBase} resize-none ${errors.mensagem ? inputError : ""}`}
                    />
                    {errors.mensagem && (
                      <p id="error-mensagem" className="mt-1.5 text-sm text-error flex items-center gap-1" role="alert">
                        <AlertCircle size={14} /> {errors.mensagem}
                      </p>
                    )}
                  </div>

                  {/* Honeypot — hidden from real users */}
                  <div className="sr-only" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={(e) => updateField("website", e.target.value)}
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 bg-gold text-bg font-semibold py-3.5 rounded-lg transition-shadow hover:shadow-[0_0_30px_rgba(200,164,78,0.25)] cursor-pointer"
                  >
                    <Send size={18} />
                    Enviar Mensagem
                  </motion.button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* ── Right: Contact Info ─────────────────── */}
          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="space-y-6">
              {/* Phone / WhatsApp */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(COMPANY.whatsappMessage)}`}
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
                      {COMPANY.phone}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#25D366] font-medium">
                      <MessageCircle size={14} />
                      Falar pelo WhatsApp
                    </span>
                  </div>
                </div>
              </a>

              {/* Address */}
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
                      {COMPANY.address.street}, {COMPANY.address.complement}
                      <br />
                      {COMPANY.address.neighborhood}
                      <br />
                      {COMPANY.address.city}/{COMPANY.address.state}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
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

              {/* Google Maps */}
              <div className="bg-bg-card border border-border rounded-2xl overflow-hidden">
                <iframe
                  title="Localização - Igor Santana Advocacia"
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5!2d${COMPANY.coordinates.lng}!3d${COMPANY.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${COMPANY.coordinates.lat},${COMPANY.coordinates.lng}!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr`}
                  width="100%"
                  height="220"
                  style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(0.9)" }}
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
