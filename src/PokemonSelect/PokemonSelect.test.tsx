import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PokemonSelect from "./index";

test("should be able to select a pokemon", () => {
  render(<PokemonSelect />);
  const select = screen.getByRole("combobox");
  userEvent.selectOptions(select, "Squirtle");
  expect(select).toHaveValue("Squirtle");
});
