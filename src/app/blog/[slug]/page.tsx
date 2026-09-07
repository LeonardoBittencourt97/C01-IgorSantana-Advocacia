import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { blogPosts, seo, company } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post não encontrado" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${company.name}`,
      description: post.excerpt,
      url: `${seo.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="min-h-screen bg-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-text-primary mb-4">
            Post não encontrado
          </h1>
          <Link
            href="/blog"
            className="text-gold hover:text-gold-light transition-colors"
          >
            ← Voltar ao Blog
          </Link>
        </div>
      </section>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: company.shortName,
    },
    publisher: {
      "@type": "Organization",
      name: company.name,
    },
  };

  return (
    <section className="min-h-screen bg-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-border pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-gold-glow),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <ScrollReveal>
            <Breadcrumbs
              items={[
                { label: "Início", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.title },
              ]}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="mt-6 mb-4 flex items-center justify-center gap-2">
              <Tag size={14} className="text-gold" />
              <span className="text-xs font-medium text-gold">
                {post.category}
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className="font-serif text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-dark" />
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <div className="mt-6 flex items-center justify-center gap-4">
              <span className="flex items-center gap-1.5 text-sm text-text-muted">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-text-muted">
                <Clock size={14} />
                {post.readTime} de leitura
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 py-16">
        <ScrollReveal>
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-text-secondary leading-relaxed whitespace-pre-line text-base">
              {post.content}
            </div>
          </div>
        </ScrollReveal>

        {/* Back link */}
        <ScrollReveal delay={0.1}>
          <div className="divider-gold mt-16 mb-8" />
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
          >
            <ArrowLeft size={16} />
            Voltar ao Blog
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
