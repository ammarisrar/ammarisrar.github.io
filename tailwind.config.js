/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        "mobile": "375px"
      },
      fontFamily: {
        sans: ["Quicksand", "sans-serif"]
      }
    },
  },
  plugins: [],
}

