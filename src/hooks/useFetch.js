import { useState } from "react";
import { capitalLetter } from "../utils";

export const useFetch = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextChunk, setNextChunk] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

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
          stats: value.stats,
          imageUrl: value.sprites.front_default,
          totalMoves: value.moves.length,
          id: value.id,
        };
      });
      setPokemons((state) => [...state, ...pokemons]);
      setLoading(false);
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
      loading,
    },
    setPokemons,
    getPokemons,
  ];
};
