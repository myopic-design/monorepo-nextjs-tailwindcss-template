const defaultTheme = require("tailwindcss/defaultTheme");

const hocusPlugin = require("./hocus.plugin");

module.exports = {
  content: [
    "src/**/*.{js,ts,jsx,tsx}",
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "414px",
      ...defaultTheme.screens,
    },
  },
  plugins: [hocusPlugin],
};
