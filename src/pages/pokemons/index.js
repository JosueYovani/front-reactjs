import React from "react";
import PokemonBrowser from "../../components/PokemonBrowser/PokemonBrowser";
import PokemonSearch from "../../components/PokemonSearch/PokemonSearch";

const Pokemons = () => {
  const pokemons = [
    {
      id: 0,
      name: "Bulbasaur",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      types: ["poison", "grass"],
    },
    {
      id: 1,
      name: "Ivysaur",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      types: ["poison", "grass"],
    },
    {
      id: 4,
      name: "Charmander",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      types: ["fire"],
    },
    {
      id: 7,
      name: "Squirtle",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      types: ["water"],
    },
  ];
  return (
    <div className="pokemones">
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Pokemons</h1>
      <PokemonSearch />
      <PokemonBrowser pokemons={pokemons} />
    </div>
  );
};

export default Pokemons;
