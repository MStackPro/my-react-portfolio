/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        colorWhite: "#fefefe",
        ColorPrimary: "#d80000",
        CardBg: "#212121",
        ColorDark: "#212121",
        ColorLight: "#e4e4e9",
      },
    },
  },
  plugins: [],
};
