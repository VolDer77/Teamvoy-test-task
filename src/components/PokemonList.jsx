import { PokemonCard } from "./PokemonCard";

export const PokemonList = ({ pokemons, selectPokemon }) => {
  return (
    <div className="pokemon-list">
      {pokemons &&
        pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            types={pokemon.types}
            name={pokemon.name}
            url={pokemon.imageUrl}
            selectPokemon={selectPokemon}
          />
        ))}
    </div>
  );
};
