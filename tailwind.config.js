/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: "16px", 
    },
    extend: {
      colors: {
        primary: "#27292c",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      fontFamily: {
        eduQLD: ['"Edu QLD Hand"', 'cursive'],
        eduVIC: ['"Edu VIC WA NT Hand Precursive"', 'cursive'],

      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
