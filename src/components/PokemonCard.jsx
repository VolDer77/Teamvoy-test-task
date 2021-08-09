import React, { useEffect, useState } from "react";
import { sortStats } from "../utils";

export const PokemonCard = ({ name, url, setSelectedPokemon }) => {
  const [pokemonInfo, setPokemonInfo] = useState({});

  useEffect(() => {
    async function getPokemonInfo(url) {
      const response = await fetch(url);
      const data = await response.json();
      const sortedStats = sortStats(data.stats);
      setPokemonInfo({
        stats: sortedStats,
        types: data.types,
        id: data.id,
        imageUrl: data.sprites.front_default,
        totalMoves: data.moves.length,
      });
    }
    getPokemonInfo(url);
  }, []);

  function makeTypeColor(types) {
    const color = {};
  }

  function getPokemonInfo() {
    setSelectedPokemon({
      name,
      ...pokemonInfo,
    });
  }

  return (
    <div className="pokemon-card" onClick={getPokemonInfo}>
      <img
        alt="pokemon-img"
        className="pokemon-img"
        src={pokemonInfo.imageUrl}
      />
      <h3>{name}</h3>
      {pokemonInfo.types?.map(({ type }) => (
        <span>{type.name}</span>
      ))}
    </div>
  );
};
