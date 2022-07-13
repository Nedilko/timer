import Checkbox from "../Checkbox";
import { render, screen } from "@testing-library/react";
import useEvent from "@testing-library/user-event";

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

    expect(
      screen.getByRole("checkbox", { checked: false })
    ).toBeInTheDocument();
  });

  it("should be rendered checked", () => {
    render(
      <Checkbox checked={true} label="test label" onChange={clickHandler} />
    );

    expect(screen.getByRole("checkbox", { checked: true })).toBeInTheDocument();
  });

  it("should be checked on click checkbox", async () => {
    render(<Checkbox label="test label" onChange={clickHandler} />);

    screen.debug();

    expect(screen.getByRole("checkbox").checked).toEqual(false);

    await useEvent.click(screen.getByRole("checkbox"));

    screen.debug();

    expect(screen.getByRole("checkbox").checked).toEqual(true);
  });

  // it("should be checked on click label", () => {
  //   render(<Checkbox label="test label" onChange={clickHandler} />);

  //   useEvent.click(screen.getByRole("label"));

  //   expect(screen.getByRole("checkbox")).toBeInTheDocument();
  // });

  it("should hanlde click", () => {
    render(<Checkbox label="test label" onChange={clickHandler} />);

    useEvent.click(screen.getByRole("label"));

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
