'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Scale, Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { navLinks } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // ── Scroll detection ──────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Close mobile menu on route change ─────────────────
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // ── GSAP mobile menu animation ────────────────────────
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (mobileOpen) {
      gsap.to(mobileMenuRef.current, {
        maxHeight: 400,
        opacity: 1,
        duration: 0.35,
        ease: 'power2.out',
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        maxHeight: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      });
    }
  }, [mobileOpen]);

  // ── GSAP hamburger icon animation ─────────────────────
  useEffect(() => {
    if (!hamburgerRef.current) return;

    if (mobileOpen) {
      gsap.to(hamburgerRef.current, { rotate: 90, duration: 0.25 });
    } else {
      gsap.to(hamburgerRef.current, { rotate: 0, duration: 0.25 });
    }
  }, [mobileOpen]);

  // ── Active link helper ────────────────────────────────
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-bg/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ── Logo ──────────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Igor Santana Advocacia — Página inicial">
          <Scale className="h-8 w-8 text-gold transition-colors group-hover:text-gold-light" aria-hidden="true" />
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-bold text-text-primary tracking-wide">
              Igor Santana
            </span>
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-text-secondary">
              Advocacia Trabalhista
            </span>
          </div>
        </Link>

        {/* ── Desktop nav ───────────────────────────────── */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative font-sans text-sm transition-colors duration-200',
                isActive(link.href)
                  ? 'text-gold font-medium'
                  : 'text-text-secondary hover:text-text-primary'
              )}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gold" />
              )}
            </Link>
          ))}

          <Link
            href="/contato"
            className="ml-2 rounded-sm bg-gold px-5 py-2 font-sans text-sm font-semibold text-bg transition-colors hover:bg-gold-light"
          >
            Fale Conosco
          </Link>
        </div>

        {/* ── Mobile hamburger ──────────────────────────── */}
        <button
          ref={hamburgerRef}
          className="flex h-10 w-10 items-center justify-center rounded-sm text-text-primary lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* ── Mobile menu ────────────────────────────────── */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className="overflow-hidden bg-bg/95 backdrop-blur-xl lg:hidden"
        style={{ maxHeight: 0, opacity: 0 }}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col gap-1 px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-sm px-3 py-2.5 font-sans text-sm transition-colors',
                isActive(link.href)
                  ? 'bg-gold/10 text-gold font-medium'
                  : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
              )}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contato"
            className="mt-2 rounded-sm bg-gold px-3 py-2.5 text-center font-sans text-sm font-semibold text-bg transition-colors hover:bg-gold-light"
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </header>
  );
}
