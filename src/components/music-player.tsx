"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Pause, Play } from "lucide-react";

/**
 * Background Music Player Component
 * 
 * IMPORTANT: 
 * 1. Add your music file to /public/audio/background-music.mp3
 * 2. Supported formats: MP3, WAV, OGG
 * 3. Keep file size under 5MB for best performance
 * 4. Ensure you have rights to use the music
 */

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Check if audio file exists
    audio.addEventListener("loadeddata", () => {
      setIsLoaded(true);
    });

    audio.addEventListener("error", () => {
      setIsLoaded(false);
      console.info("No background music file found. Add your music to /public/audio/background-music.mp3");
    });

    return () => {
      audio.pause();
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      // Fade out
      let volume = audio.volume;
      const fadeOut = setInterval(() => {
        if (volume > 0.05) {
          volume -= 0.05;
          audio.volume = Math.max(0, volume);
        } else {
          clearInterval(fadeOut);
          audio.pause();
          audio.volume = 0.5; // Reset for next play
        }
      }, 50);
    } else {
      // Fade in
      audio.volume = 0;
      audio.play();
      let volume = 0;
      const fadeIn = setInterval(() => {
        if (volume < 0.5) {
          volume += 0.05;
          audio.volume = Math.min(0.5, volume);
        } else {
          clearInterval(fadeIn);
        }
      }, 50);
    }

    setIsPlaying(!isPlaying);
  };

  // Don't show the button if there's no audio file
  if (!isLoaded) {
    return (
      <>
        <audio ref={audioRef} loop>
          <source src="/audio/background-music.mp3" type="audio/mpeg" />
        </audio>
      </>
    );
  }

  return (
    <>
      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source src="/audio/background-music.mp3" type="audio/mpeg" />
      </audio>

      {/* Music Control Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.button
          onClick={togglePlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-[var(--primary)] text-white flex items-center justify-center soft-shadow-lg hover:bg-[var(--accent)] transition-colors duration-300"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="pause"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <Pause size={24} fill="white" />
              </motion.div>
            ) : (
              <motion.div
                key="play"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <Play size={24} fill="white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Floating Music Note Indicator */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 text-2xl"
            >
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🎵
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
