import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { blogPosts, seo, company } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos sobre Direito do Trabalho, direitos do trabalhador, reclamação trabalhista e mais. Igor Santana Advocacia.",
  openGraph: {
    title: `Blog | ${company.name}`,
    description: "Artigos sobre Direito do Trabalho.",
    url: `${seo.url}/blog`,
  },
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <section className="min-h-screen bg-bg">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-border pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-gold-glow),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <ScrollReveal>
            <Breadcrumbs
              items={[{ label: "Início", href: "/" }, { label: "Blog" }]}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              <span className="text-gradient-gold">Blog</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-dark" />
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary">
              Artigos e informações sobre Direito do Trabalho para ajudar você
              a conhecer seus direitos.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Posts */}
      <div className="mx-auto max-w-5xl px-4 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 0.1}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <article className="flex h-full flex-col rounded-xl border border-border bg-bg-card p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5">
                  <div className="mb-4 flex items-center gap-2">
                    <Tag size={14} className="text-gold" />
                    <span className="text-xs font-medium text-gold">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="mb-3 font-serif text-xl font-bold text-text-primary transition-colors group-hover:text-gold">
                    {post.title}
                  </h2>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-text-secondary">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between border-t border-border-subtle pt-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5 text-xs text-text-muted">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-text-muted">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-gold transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
