/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        teal: {
          500: "#00AFA4",
          600: "#009990",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 40%, #f0fdfa 100%)",
        "brand-gradient": "linear-gradient(135deg, #16a34a 0%, #00AFA4 100%)",
      },
      // NEW
      keyframes: {
        dropdown: {
          "0%": {
            opacity: "0",
            transform: "scale(0.95) translateY(-4px)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) translateY(0)",
          },
        },
      },

      // NEW
      animation: {
        dropdown: "dropdown 0.15s ease-out forwards",
      },
    },
  },
  plugins: [],
};
