import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Panel from "../Panel";

describe("Panel", () => {
  const e = { stopPropagation: jest.fn() };

  beforeEach(() => {
    e.stopPropagation.mockClear();
  });

  it("should match snapshot", () => {
    render(
      <Panel>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Panel>
    );
    expect(screen.getByRole("panel")).toMatchSnapshot();
  });

  it("should stop propogation", () => {
    render(<Panel onClick={e.stopPropagation()}></Panel>);

    userEvent.click(screen.getByRole("panel"));

    expect(e.stopPropagation).toBeCalled();
  });
});
