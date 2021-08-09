import React, { useEffect, useState } from "react";

export const PokemonCard = ({ name, url }) => {
  const [pokemonInfo, setPokemonInfo] = useState({});

  function makeTypeColor(types) {
    const color = {};
  }

  useEffect(() => {
    const getPokemonInfo = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      const { stats, types } = data;
      setPokemonInfo({
        stats,
        types,
      });
    };
    getPokemonInfo(url);
  }, []);
  return <div></div>;
  //   return <div>{pokemonInfo && pokemonInfo}</div>;
};
