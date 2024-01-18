/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        "sage-green": {
          DEFAULT: "#738678",
          50: "#e5f0df",
          100: "#c1d0b5",
          200: "#99a98f",
          300: "#7a8772",
          500: "#5e734e",
          700: "#4d5d53",
          750: "#35413a",
          800: "#2e3731",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        'pattern': "url('/pattern.jpg')",
        'hero-bg': "url('/hero-bg.png')"
      }
    },
  },
  plugins: [],
};