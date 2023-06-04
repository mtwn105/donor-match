/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    fontSize: {
      "2xl": ["1.5rem", { lineHeight: "2rem", fontWeight: "400" }],
    },
  },
  plugins: [],
};
