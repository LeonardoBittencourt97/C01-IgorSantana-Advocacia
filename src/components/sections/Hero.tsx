'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Award, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { company } from '@/lib/constants';

export default function Hero() {
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const floatLabelRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    // Collect all animatable elements
    const els = [
      taglineRef.current,
      headingRef.current,
      descRef.current,
      ctaRef.current,
      photoRef.current,
      badgeRef.current,
      floatLabelRef.current,
      scrollRef.current,
    ].filter(Boolean) as HTMLElement[];

    // Set initial hidden state
    gsap.set(els, { opacity: 0, y: 30 });
    gsap.set(photoRef.current, { opacity: 0, scale: 0.92 });
    gsap.set(badgeRef.current, { opacity: 0, scale: 0.8, y: 10 });
    gsap.set(floatLabelRef.current, { opacity: 0, x: -15 });

    // Create timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.to(taglineRef.current, { opacity: 1, y: 0, duration: 0.5, delay: 0.1 })
      .to(headingRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.2')
      .to(descRef.current, { opacity: 1, y: 0, duration: 0.5 }, '-=0.2')
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.4 }, '-=0.15')
      .to(photoRef.current, { opacity: 1, scale: 1, duration: 0.7 }, '-=0.5')
      .to(badgeRef.current, { opacity: 1, scale: 1, y: 0, duration: 0.4 }, '-=0.2')
      .to(floatLabelRef.current, { opacity: 1, x: 0, duration: 0.4 }, '-=0.2')
      .to(scrollRef.current, { opacity: 1, duration: 0.5 }, '-=0.1');

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg">
      {/* Background layers */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(200,164,78,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text content */}
          <div className="space-y-6 order-2 lg:order-1">
            <p
              ref={taglineRef}
              className="font-sans text-gold text-sm font-semibold uppercase tracking-[0.2em]"
            >
              {company.tagline}
            </p>

            <h1
              ref={headingRef}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-primary"
            >
              Advocacia
              <br />
              <span className="text-gradient-gold">Trabalhista</span>
            </h1>

            <p
              ref={descRef}
              className="font-sans text-text-secondary text-lg max-w-lg leading-relaxed"
            >
              {company.description}
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <Link
                href={`https://wa.me/${company.phoneWa}?text=${encodeURIComponent(company.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-gold px-8 py-3.5 font-sans text-sm font-semibold text-bg transition-colors hover:bg-gold-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                Fale Conosco
              </Link>
              <Link
                href="/areas-de-atuacao"
                className="inline-flex items-center justify-center rounded-lg border border-gold/40 px-8 py-3.5 font-sans text-sm font-semibold text-gold transition-colors hover:bg-gold/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                Áreas de Atuação
              </Link>
            </div>
          </div>

          {/* Right — Photo do Dr. Igor */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-gold/20 via-transparent to-gold-dark/20 blur-sm" />

              {/* Photo */}
              <div
                ref={photoRef}
                className="relative w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] rounded-2xl overflow-hidden border-2 border-gold/30 shadow-[0_0_60px_rgba(200,164,78,0.12)]"
              >
                <Image
                  src="/images/igor-foto.jpg"
                  alt="Dr. Igor Santana — Advogado Trabalhista"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
              </div>

              {/* OAB badge */}
              <div
                ref={badgeRef}
                className="absolute -bottom-3 -right-3 flex items-center gap-2 rounded-lg bg-bg-card border border-gold/30 px-4 py-2 shadow-lg"
              >
                <Award className="w-5 h-5 text-gold" />
                <span className="font-sans text-xs font-semibold text-gold">
                  {company.oab}
                </span>
              </div>

              {/* Floating label */}
              <div
                ref={floatLabelRef}
                className="absolute -top-3 -left-3 rounded-lg bg-bg-card border border-gold/20 px-3 py-1.5 shadow-lg"
              >
                <span className="font-sans text-xs text-text-secondary">
                  +120 avaliações ⭐
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary"
      >
        <span className="text-xs font-sans uppercase tracking-widest">
          Saiba mais
        </span>
        <ChevronDown className="w-5 h-5 text-gold/60 animate-bounce" />
      </div>
    </section>
  );
}
