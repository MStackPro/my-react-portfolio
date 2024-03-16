/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // sm: '480px',
      // md: '768px',
      // lg: '1150px',
      // xl: '1440px',
    },
    extend: {
      colors: {
        ColorPrimary: '#d80000',
        CardBg: '#1a1818'
      }
    }
  },
  plugins: [],
}
