import eyesGif from "../assets/animations/eyes.gif";
import talkGif from "../assets/animations/talk.gif";
import smileGif from "../assets/animations/smile.gif";
import beautyGif from "../assets/animations/beauty.gif";
import beingGif from "../assets/animations/being.gif";

// src/utils/data.js
export const loveMessages = [
  { text: "I love your eyes", gif: eyesGif },
  { text: "I love the way you talk", gif: talkGif },
  { text: "Your smile captivates me", gif: smileGif },
  { text: "I adore your beauty", gif: beautyGif },
  { text: "Being with you feels like heaven", gif: beingGif },
];

// src/utils/data.js

export const milestones = [
  {
    date: "Jan 15, 2022",
    title: "Our First Date",
    description: "The day we first met and sparks flew ✨",
    image: "/assets/images/first-date.jpg",
  },
  {
    date: "Feb 14, 2022",
    title: "First Valentine",
    description: "Shared chocolates and endless smiles 💖",
    image: "/assets/images/valentine.jpg",
  },
  {
    date: "May 10, 2022",
    title: "Weekend Trip",
    description: "Our little adventure to the mountains 🏞️",
    image: "/assets/images/trip.jpg",
  },
  {
    date: "Dec 25, 2022",
    title: "First Christmas Together",
    description: "Festive moments and warm memories 🎄",
    image: "/assets/images/christmas.jpg",
  },
];

// src/utils/data.js

export const quizQuestions = [
  {
    question: "Where did we go on our first date?",
    options: [
      { text: "Cafe Delight", isCorrect: true },
      { text: "Central Park", isCorrect: false },
      { text: "Movie Theater", isCorrect: false },
      { text: "Beach Walk", isCorrect: false },
    ],
  },
  {
    question: "What’s my favorite thing about you?",
    options: [
      { text: "Your laugh", isCorrect: true },
      { text: "Your hair color", isCorrect: false },
      { text: "Your favorite shoes", isCorrect: false },
      { text: "Your handwriting", isCorrect: false },
    ],
  },
  {
    question: "Which trip did we enjoy the most?",
    options: [
      { text: "Mountain getaway", isCorrect: true },
      { text: "City tour", isCorrect: false },
      { text: "Beach vacation", isCorrect: false },
      { text: "Amusement park", isCorrect: false },
    ],
  },
];
