import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Home from "@/pages/index.page";

const meta: Meta<typeof Home> = {
  component: Home,
  decorators: [
    (Story) => (
      <>
        <Header />
        <Story />
        <Footer />
      </>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
