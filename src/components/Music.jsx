import React, { useState } from "react";
import { motion } from "framer-motion";

const songs = [
  {
    title: "Nothing",
    artist: "Bruno Major",
    preview: "/assets/audio/all-of-me-preview.mp3",
    spotify: "https://open.spotify.com/embed/track/1lORkxEMmsCZqhoxcmk3A3"
  },
  {
    title: "How Deep is Your Love",
    artist: "Bee Gees",
    preview: "/assets/audio/jfjfjf.mp3",
    spotify: "https://open.spotify.com/embed/track/2JoZzpdeP2G6Csfdq5aLXP",
  },
];

const Music = ({ setBgVolume }) => {
  const [showFull, setShowFull] = useState({});

  const toggleFull = (index) => {
    setShowFull((prev) => {
      const newState = { ...prev, [index]: !prev[index] };

      // Fade out background if showing Spotify, fade in if hiding
      setTimeout(() => {
      if (newState[index]) {
        setBgVolume(0); // fade out
      } else {
        setBgVolume(0.3); // fade back in
      }
    }, 0);

      return newState;
    });
  };

  return (
    <section id="music" className="w-full min-h-screen flex flex-col items-center bg-pink-200 py-20 px-4">
      <h2 className="text-4xl font-romantic text-pink-700 mb-12 drop-shadow-md">
        Our Love Playlist 🎵
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {songs.map((song, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={song.cover} alt={song.title} className="w-48 h-48 object-cover rounded-xl mb-4 shadow-md" />
            <h3 className="text-lg font-semibold text-pink-600 mb-1 text-center">{song.title}</h3>
            <p className="text-pink-500 mb-3 text-center">{song.artist}</p>

            {/* Short Preview */}
            <audio controls className="mb-3 w-full rounded-lg">
              <source src={song.preview} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>

            {/* Button to show/hide full Spotify embed */}
            <button
              onClick={() => toggleFull(index)}
              className="px-4 py-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold mb-2"
            >
              {showFull[index] ? "Hide Full Song" : "Play Full Song"}
            </button>

            {/* Full Spotify Embed */}
            {showFull[index] && (
              <iframe
                src={song.spotify}
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-xl mt-2"
                title={`Spotify player for ${song.title} by ${song.artist}`} // <-- added
              ></iframe>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Music;
