// src/components/Footer.jsx
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (musicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setMusicPlaying(!musicPlaying);
  };

  return (
    <footer className="relative w-full bg-pink-200 py-12 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Animated Floating Hearts */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-500 text-2xl"
            initial={{ y: -50, x: Math.random() * 100 + "%" }}
            animate={{ y: "110%" }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
              delay: i,
            }}
            style={{ left: `${Math.random() * 100}%` }}
          >
            💖
          </motion.div>
        ))}
      </div>

      {/* Footer Content */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <p className="text-pink-700 font-semibold text-center">
          Made with Love by Aybannn
        </p>

        {/* Music Toggle */}
        <button
          onClick={toggleMusic}
          className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-lg"
        >
          {musicPlaying ? "Pause Music 🎵" : "Play Music 🎵"}
        </button>

        {/* Background Music */}
        <audio ref={audioRef} loop src="/assets/music/love-song.mp3" />
      </div>
    </footer>
  );
};

export default Footer;
