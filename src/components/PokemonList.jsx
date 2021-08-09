import { PokemonCard } from "./PokemonCard";

export const PokemonList = ({ pokemons, setSelectedPokemon }) => {
  return (
    <div className="pokemon-list">
      {pokemons &&
        pokemons.map((pokemon, idx) => (
          <PokemonCard
            key={`${pokemon.name}-${idx}`}
            name={pokemon.name}
            url={pokemon.url}
            setSelectedPokemon={setSelectedPokemon}
          />
        ))}
    </div>
  );
};
