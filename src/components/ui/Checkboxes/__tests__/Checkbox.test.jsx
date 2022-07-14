import Checkbox from "../Checkbox";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Checkbox", () => {
  const clickHandler = jest.fn();

  beforeEach(() => {
    clickHandler.mockClear();
  });

  it("should be in the document", () => {
    render(<Checkbox label="test label" onChange={clickHandler} />);

    expect(screen.getByRole("checkbox")).toMatchSnapshot();
  });

  it("should have lable", () => {
    render(<Checkbox label="test label" onChange={clickHandler} />);

    expect(screen.getByLabelText("test label")).toBeInTheDocument();
  });

  it("should be renderend unchecked by default", () => {
    render(<Checkbox label="test label" onChange={clickHandler} />);

    expect(screen.getByRole("checkbox").checked).toBeFalsy();
  });

  it("should be rendered checked", () => {
    render(
      <Checkbox checked={true} label="test label" onChange={clickHandler} />
    );

    expect(screen.getByRole("checkbox").checked).toBeTruthy();
  });

  it("should be checked on click checkbox", () => {
    render(<Checkbox label="test label" onChange={clickHandler} />);

    userEvent.click(screen.getByRole("checkbox"));

    expect(screen.getByRole("checkbox").checked).toBeTruthy;
  });

  it("should show correct label", () => {
    render(<Checkbox label="test label" onChange={clickHandler} />);

    expect(screen.getByLabelText("test label")).toBeInTheDocument();
  });
});
