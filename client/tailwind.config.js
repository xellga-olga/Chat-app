/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#53f1ff",
        secondary : "#41c0cc"
      }
    },
  },
  plugins: [],
}