/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      nanumG: ["Nanum Gothic", "sans-serif"],
      nanumGBold: ["Nanum Gothic", "sans-serif", "bold"],
      openSans: ["Open Sans", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
