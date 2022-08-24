import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OverlayBackground from "../OverlayBackground";

describe("OverlayBackground", () => {
  const onClick = jest.fn();

  it("should match snapshot", () => {
    render(
      <OverlayBackground onClick={onClick}>
        <div>1</div>
      </OverlayBackground>
    );

    expect(screen.getByRole("overlay")).toMatchSnapshot();
  });

  it("should call onClick", () => {
    render(
      <OverlayBackground onClick={onClick}>
        <div>1</div>
      </OverlayBackground>
    );

    userEvent.click(screen.getByRole("overlay"));

    expect(onClick).toBeCalled();
  });
});
