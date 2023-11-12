/** @type {import('tailwindcss').Config} */
export default {
  safelist: ["dark"],

  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      body: ["Poppins", "sans-serif"]
    },

    extend: {
    },
  },
  
  plugins: [
  ],
}

