import React, { useEffect, useState } from "react";
import { getPokemons } from "../features/api";
import { PokemonCard } from "./PokemonCard";

export const PokemonList = ({ setNextChunk }) => {
  const [pokemonList, setPokimonList] = useState({});

  useEffect(() => {
    getPokemons("https:pokeapi.co/api/v2/pokemon/?limit=12")
      .then((response) => response.json())
      .then((data) => {
        setPokimonList(data.results);
        setNextChunk(data.next);
      });
  }, []);

  return (
    <div>
      {pokemonList &&
        pokemonList.map((pokemon, idx) => (
          <PokemonCard
            key={`${pokemon.name}-${idx}`}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
    </div>
  );
};
