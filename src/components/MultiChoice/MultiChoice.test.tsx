import { fireEvent, render, screen } from "@testing-library/react";
import MultiChoice from "./MultiChoice";
import { question1, theme } from "./testData";

describe("MultiChoice", () => {
  it("Active element changes when clicking toggle", () => {
    // Arrange
    render(<MultiChoice question={question1} theme={theme} />);
    const meetingsOption = screen.getByText("less meetings");
    expect(meetingsOption.getAttribute("aria-selected")).toEqual("false");

    // Act
    fireEvent.click(meetingsOption);

    // Assert
    expect(meetingsOption.getAttribute("aria-selected")).toEqual("true");
  });

  it("All correct answers should result in Well Done message", () => {
    // Arrange
    render(<MultiChoice question={question1} theme={theme} />);
    const goodPayOption = screen.getByText("good pay");
    const meetingsOption = screen.getByText("less meetings");
    const freeCoffeeOption = screen.getByText("free coffee");
    const dogInOffice = screen.getByText("dog in office");

    // Act
    fireEvent.click(goodPayOption);
    fireEvent.click(meetingsOption);
    fireEvent.click(freeCoffeeOption);
    fireEvent.click(dogInOffice);

    // Assert
    screen.getByText("Well done!");
  });
});
