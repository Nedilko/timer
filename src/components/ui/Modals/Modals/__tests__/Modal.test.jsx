import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Modal from "../Modal";

describe("Modal", () => {
  const onApply = jest.fn();
  const onCancel = jest.fn();

  beforeAll(() => {
    const root = document.createElement("div");
    root.setAttribute("id", "modal-portal");
    document.body.appendChild(root);
  });

  beforeEach(() => {
    onCancel.mockClear();
    onApply.mockClear();
  });

  it("should match snapshot", () => {
    render(
      <Modal onApply={() => {}} onCancel={() => {}} title={"test title"}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Modal>
    );

    expect(screen.getByRole("modal")).toMatchSnapshot();
  });

  it("should call onApply", () => {
    render(
      <Modal onCancel={onCancel} onApply={onApply} title={"test title"}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Modal>
    );

    userEvent.click(screen.getByText(/Apply/i, { role: "button" }));

    expect(onApply).toBeCalled();
  });

  it("should call onCancel", () => {
    render(
      <Modal onCancel={onCancel} onApply={onApply} title={"test title"}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Modal>
    );

    userEvent.click(screen.getByText(/Cancel/i, { role: "button" }));

    expect(onCancel).toBeCalled();
  });

  it("shuld render title", () => {
    render(
      <Modal onCancel={onCancel} onApply={onApply} title={"test title"}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Modal>
    );

    expect(screen.getByRole("modal")).toHaveTextContent("test title");
  });
});
