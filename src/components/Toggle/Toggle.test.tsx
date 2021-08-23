import { screen, render } from "@testing-library/react";
import { Toggle, Option } from "./index";

describe("Toggle", () => {
  it("Toggle value should determine active option", () => {
    //   Arrange
    let switchValue = { text: "Test", isCorrect: false };

    // Act
    render(
      <Toggle value={switchValue} onChange={() => {}}>
        <Option value={{ text: "Impermeable", isCorrect: true }}>
          Impermeable
        </Option>
        <Option value={{ text: "Test", isCorrect: false }}>Test</Option>
      </Toggle>
    );

    // Assert
    const selected = screen.getByRole("option", { selected: true });
    expect(selected.textContent).toEqual("Test");
  });
});
