// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,tsx,jsx}"],
//   theme: { extend: {} },
//   plugins: [],
// };


/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D1793E",
        "background-light": "#f8f5f6",
        "background-dark": "#221013",
        "hover-teal":"teal-500",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

