
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandWine: "#7B1736",
        brandCheese: "#E9C46A",
        brandInk: "#1F2937"
      },
      borderRadius: { "2xl": "1.25rem" }
    }
  },
  plugins: []
};
