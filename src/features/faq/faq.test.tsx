import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { FAQ_DATA } from "./constants";
import { Faq } from "./faq";

describe("Faq", () => {
  it("renders every question as a clickable card", () => {
    render(<Faq />);

    expect(screen.getAllByRole("listitem")).toHaveLength(FAQ_DATA.length);
    expect(screen.getAllByRole("button")).toHaveLength(FAQ_DATA.length);
    FAQ_DATA.forEach(({ question }) => {
      expect(screen.getByText(question)).toBeInTheDocument();
    });
  });

  it("opens the selected question in a dialog and closes it", async () => {
    const user = userEvent.setup();
    render(<Faq />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    const [firstCard] = screen.getAllByRole("button");
    await user.click(firstCard);

    const dialog = screen.getByRole("dialog");
    expect(
      within(dialog).getByRole("heading", { name: FAQ_DATA[0].question })
    ).toBeInTheDocument();
    expect(
      within(dialog).getByText(FAQ_DATA[0].answer as string)
    ).toBeInTheDocument();

    await user.click(within(dialog).getByRole("button", { name: "Close" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
