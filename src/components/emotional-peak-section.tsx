"use client";

import { motion } from "framer-motion";
import { slowTransition } from "@/lib/motion-tokens";
import { content } from "@/lib/placeholder-content";

export function EmotionalPeakSection() {
  return (
    <section
      id="emotional-peak"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={slowTransition}
        className="max-w-4xl text-center"
      >
        {/* Central Quote - Emotional Climax */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...slowTransition, delay: 0.3 }}
          className="relative"
        >
          <div className="glow rounded-soft p-12 md:p-16 bg-[var(--card-bg)] backdrop-blur-sm soft-shadow-lg">
            <p className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-[var(--text-primary)] leading-snug italic">
              "{content.emotionalPeak.quote}"
            </p>

            <p className="text-xl md:text-2xl text-[var(--accent)] font-medium">
              {content.emotionalPeak.author}
            </p>
          </div>
        </motion.blockquote>

        {/* Decorative Hearts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...slowTransition, delay: 0.6 }}
          className="mt-8 text-4xl"
        >
          💗
        </motion.div>
      </motion.div>
    </section>
  );
}
