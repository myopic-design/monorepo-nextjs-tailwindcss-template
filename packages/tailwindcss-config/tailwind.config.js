const defaultTheme = require("tailwindcss/defaultTheme");

const hocusPlugin = require("./hocus.plugin");

module.exports = {
  content: ["src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "414px",
      ...defaultTheme.screens,
    },
  },
  plugins: [hocusPlugin],
};
