import Select from "../Select";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Select", () => {
  const onChange = jest.fn();

  const options = [
    {
      key: 1,
      name: "A",
    },
    {
      key: 2,
      name: "B",
    },
    {
      key: 3,
      name: "C",
    },
  ];

  beforeEach(() => {
    onChange.mockClear();
  });

  it("should match snapshot", () => {
    render(
      <Select
        label="test label"
        selected={1}
        onChange={onChange}
        options={options}
      />
    );

    expect(screen.getByRole("listbox")).toMatchSnapshot();
  });

  it("should have label", () => {
    render(
      <Select
        label="test label"
        selected={1}
        onChange={onChange}
        options={options}
      />
    );

    expect(screen.getByRole("label")).toHaveTextContent("test label");
  });

  it("should have three options", () => {
    render(<Select selected={1} onChange={onChange} options={options} />);

    expect(screen.getAllByRole("option")).toHaveLength(3);
  });

  it("should select option", () => {
    render(<Select selected={1} onChange={onChange} options={options} />);

    userEvent.selectOptions(screen.getByRole("listbox"), ["3"]);

    expect(screen.getByRole("option", { name: "A" }).selected).toBeFalsy();
    expect(screen.getByRole("option", { name: "B" }).selected).toBeFalsy();
    expect(screen.getByRole("option", { name: "C" }).selected).toBeTruthy();

    userEvent.selectOptions(screen.getByRole("listbox"), ["2"]);

    expect(screen.getByRole("option", { name: "A" }).selected).toBeFalsy();
    expect(screen.getByRole("option", { name: "B" }).selected).toBeTruthy();
    expect(screen.getByRole("option", { name: "C" }).selected).toBeFalsy();
  });
});
