import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as stories from "./Button.stories";

const ButtonStories = composeStories(stories);

describe("Button", () => {
  it("renders a button", () => {
    render(<ButtonStories.Default />);

    const button = screen.getByRole("button", { name: "Button" });

    expect(button).toBeInTheDocument();
  });

  it("calls `onClick` when clicked", async () => {
    const user = userEvent.setup();

    const onClickSpy = jest.fn();
    render(<ButtonStories.Default onClick={onClickSpy} />);

    const button = screen.getByRole("button", { name: "Button" });
    await user.click(button);

    expect(onClickSpy).toHaveBeenCalled();
  });
});
