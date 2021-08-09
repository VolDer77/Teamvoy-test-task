import React from "react";
import { capitalLetter } from "../utils";

export const PokemonInfo = ({ pokemon }) => {
  return (
    <div className="pokemon-info">
      <img
        alt="pokemon-img"
        className="pokemonInfo-img"
        src={pokemon.imageUrl}
      />
      <h3>
        {pokemon.name}{" "}
        {pokemon.id < 10
          ? `#00${pokemon.id}`
          : pokemon.id > 100
          ? pokemon.id
          : `#0${pokemon.id}`}
      </h3>
      <table>
        <tbody>
          <tr>
            <td>Type</td>
            <td>
              {pokemon.types
                .map(({ type }) => capitalLetter(type.name))
                .join(", ")}
            </td>
          </tr>
          {pokemon.stats.map((item, idx) => (
            <tr key={`${item.base_stat}-${idx}`}>
              <td>{capitalLetter(item.stat.name)}</td>
              <td>{item.base_stat}</td>
            </tr>
          ))}
          <tr>
            <td>Total moves</td>
            <td>{pokemon.totalMoves}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
