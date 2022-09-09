import { fireEvent, render, screen } from "@testing-library/react";
import { Greeting } from "./index";

describe("Greeting", () => {
  window.innerWidth = 9000;
  it("should say Hello There", () => {
    render(<Greeting />);
    expect(screen.getByText("Hello there")).toBeInTheDocument();
  });
  it("should change the text on the screen", () => {
    render(<Greeting />);
    fireEvent.click(screen.getByText("Change Text"));
    expect(screen.getByText("Hello Friend")).toBeInTheDocument();
  });
});
