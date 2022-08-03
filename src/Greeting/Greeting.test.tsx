import { fireEvent, render, screen } from "@testing-library/react";
import { Greeting } from "./index";

test("should say Hello There", () => {
  render(<Greeting />);
  const greetingText = screen.getByText(/Hello There/i);
  expect(greetingText).toBeInTheDocument();
});

test("button should change text", () => {
  render(<Greeting />);
  const buttonElement = screen.getByText(/Change Text/i);
  fireEvent.click(buttonElement);
  const greetingText = screen.getByText(/Hello Friend/i);
  expect(greetingText).toBeInTheDocument();
});
