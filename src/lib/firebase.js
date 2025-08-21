// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Paste your config here (or import from env vars)
const firebaseConfig = {
  apiKey: "AIzaSyAPvILHsuZtiqvmjyD5PoVp6QsMOh-LitM",
  authDomain: "lovenotes-b4d3f.firebaseapp.com",
  projectId: "lovenotes-b4d3f",
  storageBucket: "lovenotes-b4d3f.firebasestorage.app",
  messagingSenderId: "514592934063",
  appId: "1:514592934063:web:948169662b4df9bdad6c5a",
  measurementId: "G-Y6TRHCR9WZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
