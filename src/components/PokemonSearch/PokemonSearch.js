import React, { useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import iconSearch from "../../assets/images/icons/search.svg";
import iconClean from "../../assets/images/icons/x-circle.svg";
import "./pokemon-search.scss";

export default function PokemonSearch() {
  const [pokemon, setPokemon] = useState({});

  const searchPokemon = async () => {
    const namePokemon = document.getElementById("search-pokemon").value;

    if (namePokemon) {
      const data = await (
        await fetch(
          `https://pokeapi.co/api/v2/pokemon/${namePokemon.toLowerCase()}`
        )
      ).json();
      setPokemon({
        id: data.id,
        name: data.name,
        sprite: data.sprites.front_default,
        types: data.types.map((type) => {
          return type.type.name;
        }),
      });
    } else {
      alert("Enter the name of the pokemon!");
    }
  };

  return (
    <div className="pokemon-search">
      <div className="pokemon-search--input">
        <input id="search-pokemon" type="text" placeholder="Name Pokemon" />
        <button onClick={searchPokemon}>
          <img src={iconSearch} alt="Icon search" />
        </button>
      </div>

      {pokemon.id && <Pokemon {...pokemon} />}
    </div>
  );
}
