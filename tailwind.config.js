/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {},
    screens: {
      'sm': { 'max': '700px' }
    }
  },
  plugins: [],
}
