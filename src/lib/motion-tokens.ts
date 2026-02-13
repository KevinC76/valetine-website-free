/**
 * Motion Tokens - Reusable Framer Motion Animation Variants
 * 
 * These are the emotional motion configurations for all animations.
 * All animations are slow, gentle, and intentional.
 */

import { Variants } from "framer-motion";

// Fade in from below (hero, sections)
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
};

// Fade in with scale (images, cards)
export const fadeInScale: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

// Stagger children animation
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Default transition timing (calm and emotional)
export const defaultTransition = {
  duration: 0.8,
};

// Slow transition for emotional peaks
export const slowTransition = {
  duration: 1.2,
};

// Quick micro-interaction
export const quickTransition = {
  duration: 0.3,
};

// Scroll-triggered animation utilities
export const scrollReveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: defaultTransition,
};

// Glow effect on hover
export const glowHover = {
  rest: { scale: 1, boxShadow: "0 0 0 rgba(232, 141, 174, 0)" },
  hover: {
    scale: 1.02,
    boxShadow: "0 0 40px rgba(232, 141, 174, 0.35)",
    transition: quickTransition,
  },
};
