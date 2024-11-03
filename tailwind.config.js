/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'light-orange':'#ffbd39',
      },
      letterSpacing:{
        widest: '.25em',
      },
      backgroundImage:{
         'card-gradient':'linear-gradient(71deg, #080509, #1a171c, #080509)',
         'card-gradient-hover': 'linear-gradient(71deg,#ffbd39, #f5c342, #ffe69a)',
      },
    },
  },
  plugins: [],
}

