/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Bodoni": "'Bodoni Moda', serif",
        "Charm": "'Charm', cursive",
        "Bodoni2": "'Libre Bodoni', serif",
        "OldStandard": "'Old Standard TT', serif",
      }
    },
  },
  plugins: [],
}