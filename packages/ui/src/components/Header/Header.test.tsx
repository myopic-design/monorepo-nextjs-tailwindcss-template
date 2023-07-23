import { composeStories } from "@storybook/react";
import { render, screen, within } from "@testing-library/react";

import * as stories from "./Header.stories";

const HeaderStories = composeStories(stories);

describe("Header", () => {
  it("renders a nav element with links", () => {
    render(<HeaderStories.Default />);

    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();

    const navMain = within(header).getByRole("navigation", {
      name: "main",
    });
    expect(navMain).toBeInTheDocument();

    const withinNavMain = within(navMain);
    expect(
      withinNavMain.getByRole("link", {
        name: "Features",
      }),
    ).toHaveAttribute("href", "#features");
    expect(
      withinNavMain.getByRole("link", {
        name: "Testimonials",
      }),
    ).toHaveAttribute("href", "#testimonials");
    expect(
      withinNavMain.getByRole("link", {
        name: "Pricing",
      }),
    ).toHaveAttribute("href", "#pricing");
    expect(
      withinNavMain.getByRole("link", {
        name: /^Sign\sin$/,
      }),
    ).toHaveAttribute("href", "/signin");
    expect(
      withinNavMain.getByRole("link", {
        name: /^Get\sstarted\stoday$/,
      }),
    ).toHaveAttribute("href", "/signup");
  });
});
