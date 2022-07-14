import Input from "../Input";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Input", () => {
  const clickHandler = jest.fn();
  beforeEach(() => {
    clickHandler.mockClear();
  });

  it("should render", () => {
    render(
      <Input
        label="test label"
        value="test value"
        placeholder="test holder"
        onChange={clickHandler}
      />
    );

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should show label", () => {
    render(
      <Input
        label="test label"
        value="test value"
        placeholder="test holder"
        onChange={clickHandler}
      />
    );

    expect(screen.getByLabelText("test label")).toBeInTheDocument();
  });

  it("should show value", () => {
    render(
      <Input
        label="test label"
        value="test value"
        placeholder="test holder"
        onChange={clickHandler}
      />
    );

    expect(screen.getByDisplayValue("test value")).toBeInTheDocument();
  });

  it("should show placeholder", () => {
    render(
      <Input
        label="test label"
        value="test value"
        placeholder="test holder"
        onChange={clickHandler}
      />
    );

    expect(screen.getByPlaceholderText("test holder")).toBeInTheDocument();
  });

  it("should handle onChange", () => {
    render(
      <Input
        label="test label"
        value="test value"
        placeholder="test holder"
        onChange={clickHandler}
      />
    );

    userEvent.type(screen.getByRole("textbox"), "test");

    expect(clickHandler).toBeCalledTimes(5);
  });
});
