/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#121212",
      },
      textColor: {
        primary: "#EFEFEF",
      },
      fontFamily: {
        primary: ["JetBrains Mono", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
