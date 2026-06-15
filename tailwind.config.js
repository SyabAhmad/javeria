/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f7f7f7",
          100: "#eaeaea",
          200: "#d4d4d4",
          300: "#a0a0a0",
          400: "#707070",
          500: "#555555",
          600: "#3a3a3a",
          700: "#1a1a1a",
          800: "#111111",
          900: "#000000",
        },
        burgundy: {
          50: "#fdf2f2",
          100: "#fce4e4",
          200: "#f9cccc",
          300: "#f4a3a3",
          400: "#eb6b6b",
          500: "#de4444",
          600: "#c42b2b",
          700: "#8B3A3A",
          800: "#743030",
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
        display: ["Playfair Display", "serif"],
        script: ["Send Flowers", "cursive"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        "card-hover":
          "0 10px 25px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.04)",
        nav: "0 2px 8px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
