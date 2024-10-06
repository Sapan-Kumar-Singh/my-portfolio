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
      }
    },
  },
  plugins: [],
}

