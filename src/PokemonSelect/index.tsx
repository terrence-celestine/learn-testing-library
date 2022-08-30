import { useState } from "react";

const PokemonSelect = () => {
  const [pokemonOptions, setPokemonOptions] = useState([
    "Charmander",
    "Bulbasaur",
    "Squirtle",
  ]);

  return (
    <select>
      {pokemonOptions.map((pokemon: string) => (
        <option value={pokemon}>{pokemon}</option>
      ))}
    </select>
  );
};

export default PokemonSelect;
