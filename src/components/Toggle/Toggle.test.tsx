import { screen, render } from "@testing-library/react";
import { Toggle, Option } from "./index";

describe("Toggle", () => {
  it("Toggle value should determine active option", () => {
    //   Arrange
    let switchValue = "test2";

    // Act
    render(
      <Toggle value={switchValue} onChange={() => {}}>
        <Option value={"test"}>Impermeable</Option>
        <Option value={"test2"}>Test</Option>
      </Toggle>
    );

    // Assert
    const selected = screen.getByRole("option", { selected: true });
    expect(selected.textContent).toEqual("Test");
  });
});
