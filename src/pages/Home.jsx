// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import LoveNotes from "../components/LoveNotes";
import Timeline from "../components/Timeline";
import Music from "../components/Music";
import Quiz from "../components/Quiz";
import MessageForm from "../components/MessageForm"
import Footer from "../components/Footer";

const Home = () => {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.3);

useEffect(() => {
    if (!audioRef.current) return;
    let current = audioRef.current.volume;
    const target = volume;
    const step = 0.03;
    const interval = setInterval(() => {
      if (Math.abs(current - target) < step) {
        audioRef.current.volume = target;
        clearInterval(interval);
      } else {
        current += current < target ? step : -step;
        audioRef.current.volume = current;
      }
    }, 50);
    return () => clearInterval(interval);
  }, [volume]);

  useEffect(() => {
    const handleClick = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch(err => console.log(err));
      }
      document.removeEventListener("click", handleClick);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div>
      <audio ref={audioRef} loop src="/assets/music/love-song.mp3" />
      <Hero name="Love" />
      <LoveNotes />
      <Timeline />
      <Music setBgVolume={setVolume}/>
      <Quiz />
      <MessageForm />
      <Footer />
    </div>
  );
};

export default Home;
