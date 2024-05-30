/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#0D0221",
      },
      textColor: {
        primary: "#CDCDCD",
      },
      fontFamily: {
        primary: ["JetBrains Mono", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
