import { render, screen, fireEvent } from "@testing-library/react";
import { UserList } from "./index";
import { handlers } from "../mocks/handlers";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("/greeting", (req, res, ctx) => {
    return res(ctx.json({ greeting: "hello there" }));
  })
);

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

test("handles server error", async () => {
  server.use(
    rest.get("/greeting", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<UserList />);

  expect(screen.getByRole("alert")).toHaveTextContent("Oops, failed to fetch!");
  expect(screen.getByRole("button")).not.toBeDisabled();
});
