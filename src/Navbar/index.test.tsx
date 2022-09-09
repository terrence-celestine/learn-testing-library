import { render, screen } from "@testing-library/react";
import NavBar from "./index";
import { useIsTablet } from "../hooks/useIsTablet";

jest.mock("../hooks/useIsTablet");

describe("App test suite", () => {
  it("renders the app", async () => {
    (useIsTablet as jest.Mock).mockImplementation(() => true);
    render(<NavBar />);
    await screen.findByRole("heading", { level: 4 });
  });
  it("renders the app 2", async () => {
    (useIsTablet as jest.Mock).mockImplementation(() => false);
    render(<NavBar />);
    await screen.findByRole("heading", { level: 2 });
  });
});
