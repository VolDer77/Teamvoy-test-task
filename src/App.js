import { useEffect, useState } from "react";
import { PokemonList } from "./components/PokemonList";
import { PokemonInfo } from "./components/PokemonInfo";

import { useFetch } from "./hooks/useFetch";
import { sortByTypes } from "./utils";
import "./App.css";

function App() {
  const [{ pokemons, nextChunk, error, loading }, setPokemons, getPokemons] =
    useFetch();
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    getPokemons("https://pokeapi.co/api/v2/pokemon/?limit=12");
  }, []);

  function selectPokemon(id) {
    const pokemon = pokemons.find((pokemon) => pokemon.id === id);
    setSelectedPokemon(pokemon);
  }

  function showMorePokemons() {
    getPokemons(nextChunk);
  }

  function sortPokemons() {
    setPokemons((pokemons) => [...pokemons].sort(sortByTypes));
  }

  if (error) {
    return <h2>Fetching error</h2>;
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="app">
      <section className="section-inner">
        <h1 className="header">Pokedex</h1>
        <section className="section-content">
          <div className="pokemon-list-wrapper">
            <PokemonList pokemons={pokemons} selectPokemon={selectPokemon} />
            <div className="btn-group">
              <button className="btn" onClick={showMorePokemons}>
                Load More
              </button>
              <button className="btn" onClick={sortPokemons}>
                Sort by type
              </button>
            </div>
          </div>
          {selectedPokemon && <PokemonInfo pokemon={selectedPokemon} />}
        </section>
      </section>
    </div>
  );
}

export default App;
