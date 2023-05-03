import { resolve } from "node:path";

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.{ts,tsx}"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-styling",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  core: {
    // disableTelemetry: true,
    enableCrashReports: true,
  },
  docs: {
    autodocs: true,
  },
  staticDirs: [resolve(__dirname, "static")],
};

export default config;
