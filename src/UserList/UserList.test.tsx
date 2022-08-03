import { render, screen, fireEvent } from "@testing-library/react";
import { UserList } from "./index";

test("should have 1 user", () => {
  render(<UserList />);
  const users = screen.getByText("user 1");
  expect(users).toBeInTheDocument();
});

test("should add user to list", () => {
  render(<UserList />);
  const userButton = screen.getByDisplayValue(/Add User/i);
  fireEvent.click(userButton);
  const addedUser = screen.getByText(/test user/i);
  expect(addedUser).toBeInTheDocument();
});
