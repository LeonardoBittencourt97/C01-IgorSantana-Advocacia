"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="min-h-screen bg-bg flex items-center justify-center">
      <div className="text-center px-6">
        <p className="font-mono text-sm tracking-[0.3em] uppercase text-error mb-4">
          Erro
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mb-6">
          Algo deu errado
        </h1>
        <p className="text-text-secondary text-lg max-w-md mx-auto mb-10">
          Ocorreu um erro inesperado. Por favor, tente novamente ou entre em
          contato conosco.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-3.5 font-semibold text-bg transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 cursor-pointer"
          >
            Tentar novamente
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-gold/30 px-8 py-3.5 font-semibold text-gold transition-all hover:border-gold hover:bg-gold/10"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
    </section>
  );
}
