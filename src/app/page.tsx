import { HeroSection } from "@/components/hero-section";
import { PersonalMessageSection } from "@/components/personal-message-section";
import { MemoryGallerySection } from "@/components/memory-gallery-section";
import { EmotionalPeakSection } from "@/components/emotional-peak-section";
import { FinalNoteSection } from "@/components/final-note-section";
import { MusicPlayer } from "@/components/music-player";

/**
 * Valentine Website - Main Page
 * 
 * A single-page, mobile-first digital love letter
 * with five emotional sections and background music.
 */

export default function Home() {
  return (
    <>
      {/* Single-page layout with all sections */}
      <main className="relative">
        <HeroSection />
        <PersonalMessageSection />
        <MemoryGallerySection />
        <EmotionalPeakSection />
        <FinalNoteSection />
      </main>

      {/* Background music player (fixed position) */}
      <MusicPlayer />
    </>
  );
}
