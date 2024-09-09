/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        pane: "0 0 10px 4px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
