import { render, screen } from "@testing-library/react";
import App from "./App";
import { useIsTablet } from "./hooks/index";

jest.mock("./hooks/index");

describe("App test suite", () => {
  it("renders the app", async () => {
    (useIsTablet as jest.Mock).mockImplementation(() => true);
    render(<App />);
    await screen.findByRole("heading", { level: 4 });
  });
  it("renders the app 2", async () => {
    (useIsTablet as jest.Mock).mockImplementation(() => false);
    render(<App />);
    await screen.findByRole("heading", { level: 2 });
  });
});
