import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "./Footer";

const meta = {
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      { children: "Features", href: "#features", variant: "text" },
      { children: "Testimonials", href: "#testimonials", variant: "text" },
      { children: "Pricing", href: "#pricing", variant: "text" },
    ],
  },
};
