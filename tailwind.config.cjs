/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFC436",
          100: "#FFC436",
          200: "#FFC436",
          300: "#FFC436",
          400: "#FFC436",
          500: "#FFC436",
          600: "#FFC436",
          700: "#FFC436",
          800: "#FFC436",
          900: "#FFC436",
        },
        secondary: {
          50: "#337CCF",
          100: "#337CCF",
          200: "#337CCF",
          300: "#337CCF",
          400: "#337CCF",
          500: "#337CCF",
          600: "#337CCF",
          700: "#337CCF",
          800: "#337CCF",
          900: "#337CCF",
        },
        accent: {
          50: "#1450A3",
          100: "#1450A3",
          200: "#1450A3",
          300: "#1450A3",
          400: "#1450A3",
          500: "#1450A3",
          600: "#1450A3",
          700: "#1450A3",
          800: "#1450A3",
          900: "#1450A3",
        },
        background: {
          50: "#191D88",
          100: "#191D88",
          200: "#191D88",
          300: "#191D88",
          400: "#191D88",
          500: "#191D88",
          600: "#191D88",
          700: "#191D88",
          800: "#191D88",
          900: "#191D88",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};


