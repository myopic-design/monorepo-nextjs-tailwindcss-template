import { composeStories } from "@storybook/react";
import { render, screen, within } from "@testing-library/react";

import * as stories from "./Navigation.stories";

const NavigationStories = composeStories(stories);

describe("Navigation", () => {
  it("renders a nav element with links", () => {
    render(<NavigationStories.Default />);

    const navMain = screen.getByRole("navigation", {
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
