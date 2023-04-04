import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./Header";

const meta = {
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    leftLinks: [
      { children: "Features", href: "#features", variant: "text" },
      { children: "Testimonials", href: "#testimonials", variant: "text" },
      { children: "Pricing", href: "#pricing", variant: "text" },
    ],
    rightLinks: [
      {
        children: "Sign\u00a0in",
        className: "hidden xs:block",
        classNameMobile: "block xs:hidden",
        href: "/signin",
        variant: "text",
      },
      {
        children: (
          <span>
            Get{"\u00a0"}started<span className="hidden lg:inline">{"\u00a0"}today</span>
          </span>
        ),
        classNameMobile: "hidden",
        href: "/signup",
        variant: "primary",
      },
    ],
  },
};
