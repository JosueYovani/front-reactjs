import React, { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon";

export default function PokemonBrowser(props) {
  // const { pokemons } = props;

  /** State Local **/
  const [pokemon, setPokemon] = useState([]);
  const [activePokemon, setActivePokemon] = useState(0);
  /** Functions **/
  const prevEpisode = () => {
    if (activePokemon > 0) {
      setActivePokemon(activePokemon - 1);
    } else {
      alert("No more pokemons");
    }
  };
  const nextEpisode = () => {
    if (activePokemon < 359) {
      setActivePokemon(activePokemon + 1);
    } else {
      alert("No more pokemons");
    }
  };

  useEffect(() => {
    async function fetchData() {
      const data = await (
        await fetch(`https://pokeapi.co/api/v2/pokemon/${activePokemon + 1}`)
      ).json();
      setPokemon({
        id: data.id,
        name: data.name,
        sprite: data.sprites.front_default,
        types: data.types.map((type) => {
          return type.type.name;
        }),
      });
    }

    fetchData();
  }, [activePokemon]);

  return (
    <div className="pokemon-browser">
      {pokemon.id ? <Pokemon {...pokemon} /> : <p>Loading ...</p>}
      <button onClick={prevEpisode}>Prev</button>
      <button onClick={nextEpisode}>Next</button>
    </div>
  );
}
