/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{webc, md}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
