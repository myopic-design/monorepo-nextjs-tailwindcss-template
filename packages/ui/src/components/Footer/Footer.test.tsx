import { composeStories } from "@storybook/react";
import { render, screen, within } from "@testing-library/react";

import * as stories from "./Footer.stories";

const FooterStories = composeStories(stories);

describe("Footer", () => {
  it("renders a nav element with quick links", () => {
    render(<FooterStories.Default />);

    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();

    const navQuickLinks = within(footer).getByRole("navigation", {
      name: "quick links",
    });
    expect(navQuickLinks).toBeInTheDocument();

    const withinNavQuickLinks = within(navQuickLinks);
    expect(
      withinNavQuickLinks.getByRole("link", {
        name: "Features",
      })
    ).toHaveAttribute("href", "#features");
    expect(
      withinNavQuickLinks.getByRole("link", {
        name: "Testimonials",
      })
    ).toHaveAttribute("href", "#testimonials");
    expect(
      withinNavQuickLinks.getByRole("link", {
        name: "Pricing",
      })
    ).toHaveAttribute("href", "#pricing");
  });

  it("renders a nav element with social links", () => {
    render(<FooterStories.Default />);

    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();

    const navSocial = within(footer).getByRole("navigation", {
      name: "social",
    });
    expect(navSocial).toBeInTheDocument();

    const withinNavSocial = within(navSocial);
    expect(
      withinNavSocial.getByRole("link", {
        name: "Myopic Design on GitHub",
      })
    ).toHaveAttribute("href", "https://github.com/myopic-design");
    expect(
      withinNavSocial.getByRole("link", {
        name: "Myopic Design on Mastodon",
      })
    ).toHaveAttribute("href", "https://hachyderm.io/@myopic-design");
    expect(
      withinNavSocial.getByRole("link", {
        name: "Myopic Design on Twitter",
      })
    ).toHaveAttribute("href", "https://twitter.com/myopic-design");
  });
});
