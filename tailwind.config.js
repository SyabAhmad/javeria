/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f0f4e8",
          100: "#d4e1c4",
          500: "#4a7c59",
          700: "#2D5016",
          900: "#1a3009",
        },
        burgundy: {
          50: "#faf5f5",
          500: "#a0525e",
          700: "#8B3A3A",
          900: "#5c2424",
        },
        ivory: {
          50: "#fffef9",
          100: "#fffaf0",
          200: "#fef5e7",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
