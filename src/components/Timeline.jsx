// src/components/Timeline.jsx
import React from "react";
import { motion } from "framer-motion";
import { milestones } from "../utils/data";

const Timeline = () => {
  return (
    <section
      id="timeline"
      className="w-full min-h-screen flex flex-col items-center bg-pink-100 py-20 px-4"
    >
      <h2 className="text-4xl font-romantic text-pink-600 mb-12 drop-shadow-md">
        Our Journey Together ✨
      </h2>

      <div className="relative border-l-2 border-pink-400 w-full max-w-4xl ml-4">
        {milestones.map((m, index) => (
          <motion.div
            key={index}
            className="mb-12 ml-6 flex flex-col md:flex-row items-start md:items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Circle marker */}
            <div className="w-5 h-5 bg-pink-600 rounded-full -ml-9 mt-1"></div>

            {/* Content */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:w-3/4 flex flex-col md:flex-row items-center gap-4">
              {m.image && (
                <img
                  src={m.image}
                  alt={m.title}
                  className="w-24 h-24 object-cover rounded-full border-2 border-pink-400"
                />
              )}
              <div>
                <p className="text-pink-700 font-semibold">{m.date}</p>
                <h3 className="text-lg md:text-xl font-romantic text-pink-600">
                  {m.title}
                </h3>
                <p className="text-pink-500">{m.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
