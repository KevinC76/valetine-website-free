"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, slowTransition } from "@/lib/motion-tokens";
import { content } from "@/lib/placeholder-content";
import Image from "next/image";
import { X } from "lucide-react";

export function FinalNoteSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section
      id="final-note"
      className="min-h-screen flex items-center justify-center px-6 py-20 relative"
    >
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-3xl text-center"
      >
        {/* Final Message */}
        <motion.p
          variants={fadeInUp}
          transition={slowTransition}
          className="text-2xl md:text-3xl mb-8 text-[var(--text-secondary)] leading-relaxed"
        >
          {content.finalNote.message}
        </motion.p>

        {/* Closing Statement */}
        <motion.p
          variants={fadeInUp}
          transition={{ ...slowTransition, delay: 0.3 }}
          className="text-3xl md:text-4xl lg:text-5xl mb-12 text-[var(--primary)] font-light italic"
        >
          {content.finalNote.closing}
        </motion.p>

        {/* Symbol - Forever / Surprise Button */}
        <motion.button
          onClick={() => setIsPopupOpen(true)}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ ...slowTransition, delay: 0.6 }}
          className="inline-block px-8 py-4 rounded-full bg-[var(--primary)] text-white text-xl font-medium soft-shadow-lg hover:bg-[var(--accent)] transition-colors cursor-pointer"
        >
          {content.finalNote.symbol}
        </motion.button>

        {/* Gentle Fade Out Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1 }}
          className="mt-20 text-[var(--text-secondary)] text-sm"
        >
          Made with love, just for you
        </motion.div>
      </motion.div>

      {/* Popup Modal */}
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsPopupOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[var(--background)] p-8 rounded-soft max-w-md w-full relative soft-shadow-lg text-center border-4 border-white"
            >
              <button
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-4 right-4 p-2 text-[var(--text-secondary)] hover:bg-black/5 rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              <div className="relative w-full aspect-[4/3] mb-6 rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={content.finalPopup.imagePlaceholder}
                  alt="Surprise!"
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-2xl md:text-3xl text-[var(--primary)] mb-4">
                {content.finalPopup.title}
              </h3>
              
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {content.finalPopup.subtitle}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
