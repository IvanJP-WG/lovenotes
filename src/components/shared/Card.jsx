// src/components/shared/Card.jsx
import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Card = ({ message, gif }) => { // <-- gif is destructured from props here
  const [showGif, setShowGif] = useState(false);

  // Check if the provided file is JSON (Lottie) or not
  const isJson = gif && gif.endsWith(".json");

  return (
    <div
      className="relative bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center"
      onClick={() => setShowGif(!showGif)}
    >
      {!showGif ? (
        <p className="text-center text-lg text-pink-700 font-semibold">{message}</p>
      ) : isJson ? (
        <Player autoplay loop src={gif} style={{ height: "150px", width: "150px" }} />
      ) : (
        <img src={gif} alt="animation" className="h-36 w-36 object-contain" />
      )}
    </div>
  );
};

export default Card;
