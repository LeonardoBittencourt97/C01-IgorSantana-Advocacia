'use client';

import { useRef, useEffect } from 'react';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  label,
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const countEl = countRef.current;
    if (!el || !countEl) return;

    const loadAndAnimate = async () => {
      try {
        const gsapModule = await import('gsap');
        const gsap = gsapModule.default;
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);

        const prefersReduced = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches;
        if (prefersReduced) {
          countEl.textContent = `${prefix}${target}${suffix}`;
          return;
        }

        const obj = { value: 0 };

        gsap.to(obj, {
          value: target,
          duration,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            once: true,
          },
          onUpdate: () => {
            countEl.textContent = `${prefix}${Math.round(obj.value)}${suffix}`;
          },
        });
      } catch {
        // GSAP not available — show final value
        countEl.textContent = `${prefix}${target}${suffix}`;
      }
    };

    loadAndAnimate();
  }, [target, suffix, prefix, duration]);

  return (
    <div ref={ref} className="text-center">
      <span
        ref={countRef}
        className="font-serif text-gold text-5xl md:text-6xl font-bold"
      >
        {prefix}0{suffix}
      </span>
      <p className="font-sans text-text-secondary mt-2 text-sm uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}
