/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx,astro}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [{
  "mytheme": {
    "primary": "#6366F1",
    "secondary": "#EF8C99",
    "accent": "#1DCDBC",
    "neutral": "#FFFFFF",
    "base-100": "#26272B",
    "info": "#00A5CF",
    "success": "#419D78",
    "warning": "#FABC2A",
    "error": "#FF3A20"
  }
}],
  },
};