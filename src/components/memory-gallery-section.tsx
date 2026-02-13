"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { content } from "@/lib/placeholder-content";
import Image from "next/image";

export function MemoryGallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="memory-gallery"
      ref={containerRef}
      className="relative min-h-[300vh] px-6 py-20"
    >
      <div className="sticky top-20 text-center mb-12 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[var(--primary)] drop-shadow-sm bg-[var(--background)]/80 backdrop-blur-sm p-4 rounded-full inline-block"
        >
          {content.memoryGallery.title}
        </motion.h2>
      </div>

      <div className="max-w-md mx-auto relative pt-20 pb-40">
        {content.memoryGallery.memories.map((memory, index) => {
          // Deterministic rotation based on index
          const rotation = index % 2 === 0 ? -3 : 3;
          const randomOffset = index % 3 === 0 ? -10 : index % 3 === 1 ? 10 : 0;
          
          return (
            <Card 
              key={memory.id} 
              memory={memory} 
              index={index} 
              total={content.memoryGallery.memories.length}
              rotation={rotation}
            />
          );
        })}
      </div>
    </section>
  );
}

function Card({ 
  memory, 
  index, 
  total,
  rotation
}: { 
  memory: typeof content.memoryGallery.memories[0]; 
  index: number; 
  total: number;
  rotation: number;
}) {
  return (
    <div
      className="sticky top-40 flex justify-center mb-20 last:mb-0"
      style={{
        zIndex: index + 1,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: rotation - 10, y: 100 }}
        whileInView={{ opacity: 1, scale: 1, rotate: rotation, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.1,
        }}
        className="relative bg-white p-4 pb-12 shadow-2xl rounded-sm max-w-sm w-full transform origin-top"
        style={{
          boxShadow: `0 10px 40px -10px rgba(0,0,0,0.2), 0 0 20px -10px rgba(0,0,0,0.1)`,
        }}
      >
        {/* Tape effect (pure CSS) */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/30 backdrop-blur-sm border-l border-r border-white/50 rotate-1 transform shadow-sm opacity-80" />

        {/* Image Container - Square Aspect Ratio for Polaroid feel */}
        <div className="relative w-full aspect-square bg-gray-100 mb-6 overflow-hidden grayscale-[20%] hover:grayscale-0 transition-all duration-700">
          <Image
            src={memory.imagePlaceholder}
            alt={memory.caption}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>

        {/* Handwritten Caption */}
        <div className="absolute bottom-4 left-0 right-0 text-center px-4">
          <p 
            className="text-[var(--text-primary)] text-xl font-medium"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
          >
            {memory.caption}
          </p>
          <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-sans">
            Memory 0{index + 1}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
