"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { company } from "@/lib/constants";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
  website: string;
}

interface FormErrors {
  nome?: string;
  email?: string;
  mensagem?: string;
}

const ASSUNTOS = [
  "Demissão sem justa causa",
  "Acidente de trabalho",
  "Reconhecimento de vínculo",
  "Estabilidade no emprego",
  "Horas extras",
  "Outro",
] as const;

const WHATSAPP_NUMBER = "554132627377";

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

  function validate(): FormErrors {
    const newErrors: FormErrors = {};
    if (!formData.nome.trim()) newErrors.nome = "Por favor, informe seu nome.";
    if (!formData.email.trim()) {
      newErrors.email = "Por favor, informe seu e-mail.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Por favor, informe um e-mail válido.";
    }
    if (!formData.mensagem.trim())
      newErrors.mensagem = "Por favor, escreva sua mensagem.";
    return newErrors;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (formData.website) return;
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const lines = [
      `*Nova mensagem via site*`,
      ``,
      `*Nome:* ${formData.nome}`,
      `*E-mail:* ${formData.email}`,
    ];
    if (formData.telefone) lines.push(`*Telefone:* ${formData.telefone}`);
    if (formData.assunto) lines.push(`*Assunto:* ${formData.assunto}`);
    lines.push(``, `*Mensagem:*`, formData.mensagem);

    const text = lines.join("\n");
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    setSubmitted(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  function updateField(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  const inputBase =
    "w-full bg-bg-elevated border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted transition-colors focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30";
  const inputError = "border-error focus:border-error focus:ring-error/30";

  return (
    <div className="bg-bg-card border border-border rounded-2xl p-8 md:p-10">
      {submitted ? (
        <div className="text-center py-12">
          <CheckCircle className="mx-auto mb-4 text-success" size={48} />
          <h3 className="font-serif text-2xl font-semibold mb-2">
            Mensagem enviada!
          </h3>
          <p className="text-text-secondary mb-6">
            Você foi redirecionado para o WhatsApp. Caso não tenha aberto,{" "}
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
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
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
              <p
                id="error-nome"
                className="mt-1.5 text-sm text-error flex items-center gap-1"
                role="alert"
              >
                <AlertCircle size={14} /> {errors.nome}
              </p>
            )}
          </div>

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
              <p
                id="error-email"
                className="mt-1.5 text-sm text-error flex items-center gap-1"
                role="alert"
              >
                <AlertCircle size={14} /> {errors.email}
              </p>
            )}
          </div>

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
              <p
                id="error-mensagem"
                className="mt-1.5 text-sm text-error flex items-center gap-1"
                role="alert"
              >
                <AlertCircle size={14} /> {errors.mensagem}
              </p>
            )}
          </div>

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

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gold text-bg font-semibold py-3.5 rounded-lg transition-shadow hover:shadow-[0_0_30px_rgba(200,164,78,0.25)] cursor-pointer"
          >
            <Send size={18} />
            Enviar Mensagem
          </button>
        </form>
      )}
    </div>
  );
}
