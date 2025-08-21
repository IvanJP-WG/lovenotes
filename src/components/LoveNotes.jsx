// src/components/LoveNotes.jsx
import React from "react";
import { motion } from "framer-motion";
import Card from "./shared/Card";
import { loveMessages } from "../utils/data";

const LoveNotes = () => {
  return (
    <section
      id="lovenotes"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-pink-50 py-20 px-4"
    >
      <h2 className="text-4xl font-romantic text-pink-600 mb-12 drop-shadow-md">
        My Love Notes for You 💌
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {loveMessages.map((msg, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card message={msg.text} gif={msg.gif} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LoveNotes;
