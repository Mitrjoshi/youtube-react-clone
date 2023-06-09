/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0f0f0f", // Dark mode color scheme
        light: "#ffffff", // Light mode color scheme
      },
    },
    screens: {
      xxs: "395px",
      xs: "512px",
      ss: "620px",
      sm: "768px",
      ms: "860px",
      smd: "910px",
      md: "1060px",
      lg: "1200px",
      mlg: "1350px",
      xl: "1700px",
      xxl: "2000px",
    },
  },
  plugins: [],
};
