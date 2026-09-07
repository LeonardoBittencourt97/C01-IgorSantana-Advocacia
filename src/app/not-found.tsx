import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-bg flex items-center justify-center">
      <div className="text-center px-6">
        <p className="font-mono text-sm tracking-[0.3em] uppercase text-gold mb-4">
          Erro 404
        </p>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-text-primary mb-6">
          Página não encontrada
        </h1>
        <p className="text-text-secondary text-lg max-w-md mx-auto mb-10">
          A página que você procura não existe ou foi movida. Volte para a
          página inicial ou entre em contato.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-3.5 font-semibold text-bg transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
          >
            Voltar ao Início
          </Link>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 rounded-xl border border-gold/30 px-8 py-3.5 font-semibold text-gold transition-all hover:border-gold hover:bg-gold/10"
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </section>
  );
}
