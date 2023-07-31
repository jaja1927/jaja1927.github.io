/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#06b6d4",
        abu2: "#6b7280",
        darkMode: ["class", '[data-mode="dark"]'],
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
