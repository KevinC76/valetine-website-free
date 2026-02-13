"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/motion-tokens";
import { content } from "@/lib/placeholder-content";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("personal-message");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="gradient-bg min-h-screen flex items-center justify-center px-6 relative">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="text-center max-w-3xl"
      >
        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          transition={defaultTransition}
          className="mb-6 text-[var(--text-primary)]"
        >
          {content.hero.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.2 }}
          className="text-xl md:text-2xl mb-12 text-[var(--text-secondary)] font-light"
        >
          {content.hero.subheadline}
        </motion.p>

        {/* CTA Button */}
        <motion.button
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.4 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px var(--glow)" }}
          whileTap={{ scale: 0.98 }}
          onClick={scrollToNext}
          className="px-10 py-4 bg-[var(--primary)] text-white rounded-full text-lg font-medium soft-shadow transition-all duration-300 hover:bg-[var(--accent)]"
        >
          {content.hero.cta}
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--primary)]"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
