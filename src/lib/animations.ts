import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

// ─── ScrollReveal defaults ──────────────────────────
export const scrollRevealDefaults = {
  duration: 0.8,
  ease: "power3.out",
  once: true,
};

// ─── Stagger defaults ───────────────────────────────
export const staggerDefaults = {
  stagger: 0.08,
  ease: "power3.out",
};
