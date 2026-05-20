/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f9ff",
          500: "#0ea5e9",
          600: "#0284c7",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
