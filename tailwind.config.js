/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { brandWine: "#7B1736", brandCheese: "#E9C46A", brandInk: "#0f172a" },
      borderRadius: { "2xl": "1.25rem" }
    }
  },
  plugins: []
};
