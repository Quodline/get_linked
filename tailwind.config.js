/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-dark": '#150E28',
        "brand-pink": '#D434FE',
        "brand-purple": '#903AFF',
        "fade-gray": '#FFFFFF2D',
      },
      fontFamily: {
        'clash-display': ['ClashDisplay-Variable', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'unica': ['Unica One', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

