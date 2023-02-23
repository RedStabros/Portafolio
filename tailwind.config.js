/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,ts,jsx,tsx,html,js}"],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#285363",
        50: "#FAFCFD",
        100: "#E6F1F5",
        200: "#BFDBE5",
        300: "#97C4D5",
        400: "#6FADC5",
        500: "#4896B3",
        600: "#38748B",
        700: "#285363",
        800: "#224754",
        900: "#1C3B46",
      },
      secondary: {
        DEFAULT: "#0C344D",
        50: "#329CDF",
        100: "#2293DA",
        200: "#1D7CB7",
        300: "#176494",
        400: "#124C70",
        500: "#0C344D",
        600: "#04131C",
        700: "#000000",
        800: "#000000",
        900: "#000000",
      },
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      purple: colors.purple,
      orange: colors.orange,
      red: colors.red,
      green: colors.green,
      yellow: colors.yellow,
    },
    fontFamily: {
      kanit: ["Kanit", ...defaultTheme.fontFamily.sans],
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        blob: "blob 8s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
    plugins: [],
  },
};
