/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkPurple: "#24053E",
        primary: "#44FFA1",
        davesgrey: " #584D62",
        ghostWhite: " #FCF8FF",
        white: "#ffffff",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
    },
  },
  plugins: [],
};
