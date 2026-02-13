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

    // Transition volumes smoothly
    const fadeIn = () => {
      audio.volume = 0;
      let volume = 0;
      const interval = setInterval(() => {
        if (volume < 0.5) {
          volume += 0.05;
          audio.volume = Math.min(0.5, volume);
        } else {
          clearInterval(interval);
        }
      }, 50);
    };

    const attemptPlay = () => {
      if (!audio.paused) return; // Already playing

      audio.play().then(() => {
        setIsPlaying(true);
        fadeIn();
        // Once playing, we can remove the interaction listeners
        removeInteractionListeners();
      }).catch(err => {
        console.log("Playback attempt failed:", err.message);
      });
    };

    const removeInteractionListeners = () => {
      window.removeEventListener("click", attemptPlay);
      window.removeEventListener("touchstart", attemptPlay);
      window.removeEventListener("scroll", attemptPlay);
    };

    const addInteractionListeners = () => {
      window.addEventListener("click", attemptPlay);
      window.addEventListener("touchstart", attemptPlay);
      window.addEventListener("scroll", attemptPlay);
    };

    // Attach interaction listeners immediately to catch early clicks
    addInteractionListeners();

    const handleLoadedData = () => {
      setIsLoaded(true);
      attemptPlay(); // Try playing as soon as we have enough data
    };

    // Check if data is already loaded (common during hydration/navigation)
    if (audio.readyState >= 2) {
      handleLoadedData();
    } else {
      audio.addEventListener("canplaythrough", handleLoadedData);
    }

    audio.addEventListener("error", () => {
      setIsLoaded(false);
      removeInteractionListeners();
      console.info("Music file not accessible. Placeholder mode active.");
    });

    return () => {
      audio.pause();
      removeInteractionListeners();
      audio.removeEventListener("canplaythrough", handleLoadedData);
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


  return (
    <>
      {/* Audio Element */}
      <audio ref={audioRef} loop src="/audio/background-music.mp3"></audio>

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
