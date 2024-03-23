/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./components.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      inset: {
        "-2": "-0.5rem", // Add more as needed
      },
    },
  },
  plugins: [],
};
