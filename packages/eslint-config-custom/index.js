module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
    "plugin:storybook/csf-strict",
    "next/core-web-vitals",
    "turbo",
    "prettier",
  ],
  plugins: ["simple-import-sort", "testing-library"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  overrides: [
    {
      files: ["**/*.config.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["**/*.e2e.{js,jsx,ts,tsx}"],
      extends: ["plugin:playwright/playwright-test"],
    },
    {
      files: ["**/*.{spec,test}.{js,jsx,ts,tsx}"],
      extends: ["plugin:testing-library/react", "plugin:jest-dom/recommended"],
    },
  ],
};
