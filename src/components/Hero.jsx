// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import heartAnimation from "../assets/animations/heart.json"; // optional Lottie heart animation

const Hero = ({ name = "[Her Name]" }) => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-pink-200 via-pink-300 to-pink-400 overflow-hidden">
      
      {/* Floating Lottie Hearts */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ y: -100, opacity: 0.6 }}
            animate={{ y: "110%", opacity: [0.6, 0.3, 0.6] }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear",
            }}
            style={{
              left: `${i * 20 + 10}%`,
              width: "50px",
              height: "50px",
            }}
          >
            <Player
              autoplay
              loop
              src={heartAnimation}
              style={{ height: "50px", width: "50px" }}
            />
          </motion.div>
        ))}
      </div>

      {/* Welcome Message */}
      <motion.h1
        className="text-4xl md:text-6xl font-romantic text-white text-center mb-6 drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Hey {name}, here’s why I love you 💖
      </motion.h1>

      {/* CTA Buttons */}
      <div className="flex gap-6">
        <motion.button
          className="px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById("lovenotes").scrollIntoView({ behavior: "smooth" })}
        >
          Open LoveNotes
        </motion.button>

        <motion.button
          className="px-6 py-3 rounded-full bg-white hover:bg-pink-50 text-pink-600 font-semibold shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById("message-form").scrollIntoView({ behavior: "smooth" })}
        >
          Leave Me a Note
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
