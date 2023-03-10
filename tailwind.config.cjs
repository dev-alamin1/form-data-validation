/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        formCard: '#ACDEAA', // Replace with your desired color code
      },
    },
  },
  plugins: [],
}