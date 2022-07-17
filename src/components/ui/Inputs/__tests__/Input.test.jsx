import Input from "../Input";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Input", () => {
  const onChange = jest.fn();
  beforeEach(() => {
    onChange.mockClear();
  });

  it("should match snapshot", () => {
    render(
      <Input
        label="test label"
        value="test value"
        placeholder="test holder"
        onChange={onChange}
      />
    );

    expect(screen.getByRole("textbox")).toMatchSnapshot();
  });

  it("should show label", () => {
    render(
      <Input
        label="test label"
        value="test value"
        placeholder="test holder"
        onChange={onChange}
      />
    );

    expect(screen.getByRole("label")).toHaveTextContent("test label");
  });

  it("should show value", () => {
    render(
      <Input
        label="test label"
        value="test value"
        placeholder="test holder"
        onChange={onChange}
      />
    );

    expect(screen.getByRole("textbox")).toHaveValue("test value");
  });

  it("should show placeholder", () => {
    render(
      <Input
        label="test label"
        value="test value"
        placeholder="test holder"
        onChange={onChange}
      />
    );

    expect(screen.getByRole("textbox").placeholder).toMatch("test holder");
  });

  it("should handle onChange", () => {
    render(
      <Input
        label="test label"
        value="test value"
        placeholder="test holder"
        onChange={onChange}
      />
    );

    userEvent.type(screen.getByRole("textbox"), "test");

    expect(onChange).toHaveBeenCalledWith("test value");
  });
});
