import { useState } from "react";
import { capitalLetter, sortByStats, sortByTypes } from "../utils";

export const useFetch = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextChunk, setNextChunk] = useState("");
  const [error, setError] = useState(false);

  async function getPokemons(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const urls = data.results.map(({ url }) => url);
      const result = await Promise.allSettled(
        urls.map((url) => fetch(url).then((r) => r.json()))
      );
      const pokemons = result.map(({ value }) => {
        return {
          name: capitalLetter(value.name),
          types: value.types,
          stats: sortByStats(value.stats),
          imageUrl: value.sprites.front_default,
          totalMoves: value.moves.length,
          id: value.id,
        };
      });
      setPokemons((state) => {
        const sortedPokemons = [...state, ...pokemons].sort(sortByTypes);
        return sortedPokemons;
      });
      setNextChunk(data.next);
    } catch (error) {
      setError(error);
    }
  }

  return [
    {
      pokemons,
      nextChunk,
      error,
    },
    getPokemons,
  ];
};
