/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
      minWidth: {
        dropdown: "calc(100% + 5rem)",
      },
      scale: {
        200: "2",
      },
    },
  },
  plugins: [],
};
