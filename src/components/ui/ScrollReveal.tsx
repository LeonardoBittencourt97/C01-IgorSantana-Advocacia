'use client';

import { useRef, useEffect, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'fade';
  duration?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 1,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Progressive enhancement: only animate if GSAP is available
    const loadAndAnimate = async () => {
      try {
        const gsapModule = await import('gsap');
        const gsap = gsapModule.default;
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);

        const prefersReduced = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches;
        if (prefersReduced) return;

        const from = {
          opacity: 0,
          y: direction === 'up' ? 40 : 0,
          x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
        };

        gsap.fromTo(el, from, {
          opacity: 1,
          y: 0,
          x: 0,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        });
      } catch {
        // GSAP not available — element stays visible (no animation)
      }
    };

    loadAndAnimate();

    return () => {
      // Cleanup handled by GSAP's built-in cleanup
    };
  }, [delay, direction, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
