import Button from "../Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  const clickHandler = jest.fn();
  beforeEach(() => {
    clickHandler.mockClear();
  });
  it("should be in the document", () => {
    render(<Button title="test button" onClick={clickHandler} />);

    expect(screen.getByRole("button")).toMatchSnapshot();
  });

  it("should handle click", async () => {
    render(<Button title="test button" onClick={clickHandler} />);

    await userEvent.click(screen.getByRole("button"));

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
