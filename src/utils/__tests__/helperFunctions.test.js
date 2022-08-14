import { applyTheme } from "../helperFunctions";

describe("helperFunctions", () => {
  it("should apply light theme", () => {
    applyTheme("light");

    expect(document.documentElement).not.toHaveClass("dark");
  });

  it("should apply dark theme", () => {
    applyTheme("dark");

    expect(document.documentElement).toHaveClass("dark");
  });
});

// TODO: test all functions
