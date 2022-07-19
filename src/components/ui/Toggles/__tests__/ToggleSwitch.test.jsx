import ToggleSwitch from "../ToggleSwitch";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("ToggleSwitch", () => {
  const onChange = jest.fn();

  beforeEach(() => {
    onChange.mockClear();
  });

  it("should match snapshot", () => {
    render(<ToggleSwitch isOn={true} isEnabled={true} onChange={onChange} />);

    expect(screen.getByRole("checkbox")).toMatchSnapshot();
  });

  it("should have grayscale class when isEnabled is false", () => {
    render(<ToggleSwitch isOn={true} isEnabled={false} onChange={onChange} />);

    expect(screen.getByRole("checkbox")).toHaveClass(
      "pointer-events-none grayscale"
    );
  });

  it("should not have grayscale class when isEnabled", () => {
    render(<ToggleSwitch isOn={true} isEnabled={true} onChange={onChange} />);

    expect(screen.getByRole("checkbox")).not.toHaveClass(
      "pointer-events-none grayscale"
    );
  });

  it("should have bg-left class if isOn is true", () => {
    render(<ToggleSwitch isOn={true} isEnabled={true} onChange={onChange} />);

    expect(screen.getByRole("checkbox")).toHaveClass("bg-left");
    expect(screen.getByRole("checkbox")).toHaveClass(
      "bg-[url('./assets/light.svg')]"
    );
  });

  it("should not have bg-left class if isOn is false", () => {
    render(<ToggleSwitch isOn={false} isEnabled={true} onChange={onChange} />);

    expect(screen.getByRole("checkbox")).toHaveClass("bg-right");
    expect(screen.getByRole("checkbox")).toHaveClass(
      "bg-[url('./assets/dark.svg')]"
    );
  });

  // TODO: ask Alex how to catch span inside

  it("should handle onChange", () => {
    render(<ToggleSwitch isOn={true} isEnabled={false} onChange={onChange} />);

    userEvent.click(screen.getByRole("checkbox"));

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
