/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ensures Tailwind scans all your React files
  ],
  theme: {
    extend: {
      colors: {
        lovePink: "#ff80b5",
        lovePurple: "#a855f7",
        loveRed: "#ff4d6d",
      },
      fontFamily: {
        romantic: ["'Dancing Script'", "cursive"],
      },
    },
  },
  plugins: [],
};
