// src/components/Quiz.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { quizQuestions } from "../utils/data";

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1000);
    }
    setCurrent(current + 1);
  };

  if (current >= quizQuestions.length) {
    return (
      <section
        id="quiz"
        className="w-full min-h-screen flex flex-col items-center justify-center bg-pink-100 py-20 px-4"
      >
        <h2 className="text-4xl font-romantic text-pink-600 mb-6">
          Quiz Completed! 🎉
        </h2>
        <p className="text-pink-700 text-xl">Your Score: {score}/{quizQuestions.length}</p>
      </section>
    );
  }

  const question = quizQuestions[current];

  return (
    <section
      id="quiz"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-pink-100 py-20 px-4"
    >
      <h2 className="text-4xl font-romantic text-pink-600 mb-12 drop-shadow-md">
        How Well Do You Know Us? 💖
      </h2>

      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full flex flex-col items-center gap-6">
        <p className="text-pink-700 text-xl font-semibold text-center">{question.question}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {question.options.map((opt, index) => (
            <motion.button
              key={index}
              className="px-4 py-3 bg-pink-200 rounded-lg hover:bg-pink-300 text-pink-700 font-semibold shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAnswer(opt.isCorrect)}
            >
              {opt.text}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Confetti Hearts */}
      {showConfetti && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-pink-500 text-2xl"
              initial={{ y: -50, x: Math.random() * window.innerWidth }}
              animate={{ y: window.innerHeight + 50 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ left: Math.random() * 100 + "%" }}
            >
              💖
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default Quiz;
