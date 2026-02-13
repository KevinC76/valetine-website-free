"use client";

import { motion } from "framer-motion";
import { scrollReveal, staggerContainer } from "@/lib/motion-tokens";
import { content } from "@/lib/placeholder-content";

export function PersonalMessageSection() {
  return (
    <section
      id="personal-message"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl"
      >
        {/* Section Title */}
        <motion.h2
          {...scrollReveal}
          className="text-center mb-16 text-[var(--primary)]"
        >
          {content.personalMessage.title}
        </motion.h2>

        {/* Message Paragraphs - Line by Line */}
        <div className="space-y-8">
          {content.personalMessage.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeInOut",
              }}
              className="text-[var(--text-secondary)] text-center leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ delay: 2, duration: 1 }}
           className="mt-16 flex justify-center"
        >
          <motion.button
            onClick={() => {
              const nextSection = document.getElementById("memory-gallery");
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-[var(--accent)] hover:text-[var(--primary)] transition-colors cursor-pointer"
            aria-label="Scroll to next section"
          >
            <span className="text-sm font-medium tracking-widest uppercase">Read On</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
