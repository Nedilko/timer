import Checkbox from "../Checkbox";
import { render, screen } from "@testing-library/react";

describe("Checkbox", () => {
  const onChange = jest.fn();

  beforeEach(() => {
    onChange.mockClear();
  });

  it("should match snapshot", () => {
    render(<Checkbox checked={true} label="test label" onChange={onChange} />);

    expect(screen.getByRole("checkbox")).toMatchSnapshot();
  });

  it("should have label", () => {
    render(<Checkbox checked={true} label="test label" onChange={onChange} />);

    expect(screen.getByRole("label")).toHaveTextContent("test label");
  });

  it("should be checked", () => {
    render(<Checkbox checked={true} label="test label" onChange={onChange} />);

    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("should be unchecked", () => {
    render(<Checkbox checked={false} label="test label" onChange={onChange} />);

    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });
});
