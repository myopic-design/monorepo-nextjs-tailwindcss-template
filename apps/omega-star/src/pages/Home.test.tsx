import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";

import * as stories from "./Home.stories";

const HomeStories = composeStories(stories);

describe("Home", () => {
  it("renders a heading", () => {
    render(<HomeStories.Default />);

    const heading = screen.getByRole("heading", {
      name: "Omega Star Myopic Design",
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders the main navigation", () => {
    render(<HomeStories.Default />);

    const nav = screen.getByRole("navigation", { name: "main" });
    expect(nav).toBeInTheDocument();
  });

  it("renders quick links navigation", () => {
    render(<HomeStories.Default />);

    const nav = screen.getByRole("navigation", { name: "quick links" });
    expect(nav).toBeInTheDocument();
  });

  it("renders social navigation", () => {
    render(<HomeStories.Default />);

    const nav = screen.getByRole("navigation", { name: "social" });
    expect(nav).toBeInTheDocument();
  });
});
