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
        "Bodoni2": "'Libre Bodoni', serif",
        "Charm": "'Charm', cursive",
        "Lato": "'Lato', sans-serif",
        "OldStandard": "'Old Standard TT', serif",
      },
      backgroundImage: {
        "antes": "url('./src/assets/images/antes.jpeg')",
        "depois": "url('./src/assets/images/depois.jpeg')"
      },
      dropShadow: {
        'strong': '0 0 2px rgb(0,0,0,0.6)'
      }
    },
  },
  plugins: [],
}