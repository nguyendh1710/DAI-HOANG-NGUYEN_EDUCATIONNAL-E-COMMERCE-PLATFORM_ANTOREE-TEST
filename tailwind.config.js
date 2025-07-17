/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#3ABF7C",
        highlight: "#FFAA00",
      },
      spacing: {
        4.5: "1.125rem", // spacing phụ
        18: "4.5rem",
        22: "5.5rem",
        36: "9rem",
        44: "11rem",
        64: "16rem", // spacing lớn
        80: "20rem",
        96: "24rem",
        120: "30rem", // spacing rất lớn
      },
      fontFamily: {
        sans: ["Inter", "Helvetica Neue", "Arial", "sans-serif"], // Font UI hiện đại
        heading: ["Poppins", "Roboto", "sans-serif"], // Font cho tiêu đề
        mono: ["Fira Code", "monospace"], // Font lập trình
      },
      borderRadius: {
        xl2: "1.5rem",
        xl3: "2rem",
        circle: "9999px",
      },
      keyframes: {
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.3)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.3)" },
          "70%": { transform: "scale(1)" },
        },
        shockwave: {
          "0%": { transform: "scale(1)", opacity: "0.5" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
      },
      animation: {
        heartbeat: "heartbeat 1.5s infinite",
        shockwave: "shockwave 1.5s infinite",
      },
    },
  },
  plugins: [],
};
