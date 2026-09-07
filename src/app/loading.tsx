export default function Loading() {
  return (
    <section className="min-h-screen bg-bg flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-gold border-t-transparent" />
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-text-muted">
          Carregando...
        </p>
      </div>
    </section>
  );
}
