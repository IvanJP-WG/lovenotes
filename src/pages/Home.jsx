// src/pages/Home.jsx
import React, { useEffect, useRef } from "react";
import Hero from "../components/Hero";
import LoveNotes from "../components/LoveNotes";
import Timeline from "../components/Timeline";
import Music from "../components/Music";
import Quiz from "../components/Quiz";
import MessageForm from "../components/MessageForm"
import Footer from "../components/Footer";

const Home = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.3;
        audioRef.current.play();
      }
      document.removeEventListener("click", handleClick);
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} loop src="/assets/audio/background.mp3" />
      <Hero name="Love" />
      <LoveNotes />
      <Timeline />
      <Music />
      <Quiz />
      <MessageForm />
      <Footer />
    </div>
  );
};

export default Home;
