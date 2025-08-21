// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import LoveNotes from "../components/LoveNotes";
import Timeline from "../components/Timeline";
import Music from "../components/Music";

const Home = () => {
  return (
    <div>
      <Hero name="Love" />
      <LoveNotes />
      <Timeline />
      <Music />
    </div>
  );
};

export default Home;
