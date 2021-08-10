import { useEffect, useState } from "react";
import { PokemonList } from "./components/PokemonList";
import { PokemonInfo } from "./components/PokemonInfo";

import { useFetch } from "./hooks/useFetch";
import "./App.css";

function App() {
  const [{ pokemons, nextChunk, error }, getPokemons] = useFetch();
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemons("https:pokeapi.co/api/v2/pokemon/?limit=12");
    setLoading(false);
  }, []);

  function selectPokemon(id) {
    const pokemon = pokemons.find((pokemon) => pokemon.id === id);
    setSelectedPokemon(pokemon);
  }

  function showMorePokemons() {
    getPokemons(nextChunk);
  }

  if (error) {
    return <h2>Fetching error</h2>;
  }

  return (
    <div className="app">
      <section className="section-inner">
        <h1 className="header">Pokedex</h1>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <section className="section-content">
            <div className="pokemon-list-wrapper">
              <PokemonList pokemons={pokemons} selectPokemon={selectPokemon} />
              <button className="btn-load" onClick={showMorePokemons}>
                Load More
              </button>
            </div>
            {selectedPokemon && <PokemonInfo pokemon={selectedPokemon} />}
          </section>
        )}
      </section>
    </div>
  );
}

export default App;
