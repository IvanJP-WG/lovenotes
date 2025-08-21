// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import LoveNotes from "../components/LoveNotes";

const Home = () => {
  return (
    <div>
      <Hero name="Love" />
      <LoveNotes />
    </div>
  );
};

export default Home;
