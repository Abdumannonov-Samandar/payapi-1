/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      blue: "#36536B",
      "red-light": "#BA4270",
      dark: "#242A45",
      oq: "#FBFCFE",
      'bg-qora' : "#1B262F",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["Public Sans", "sans-serif"],
      serif: ["DM Serif Display", "serif"],
    },
    boxShadow: {
      'bg-sh' : '0px 10px 25px -10px rgba(54, 83, 107, 0.25)',
      'bg-hid' : '10px 10px 25px -10px rgba(54, 83, 107, 0.25)',
      'btn-shadow' : '10px 10px 25px -10px rgba(54, 83, 107, 0.25)',
    },
  },
  plugins: [],
};