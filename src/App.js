import { useEffect, useState } from "react";
import { PokemonList } from "./components/PokemonList";
import { PokemonInfo } from "./components/PokemonInfo";

import { setCapitalLetter } from "./utils";
import "./App.css";

function App() {
  const [pokemonList, setPokimonList] = useState([]);
  const [nextChunk, setNextChunk] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    getPokemons("https:pokeapi.co/api/v2/pokemon/?limit=12");
  }, []);

  function getPokemons(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const pokemons = setCapitalLetter(data.results);
        setPokimonList((state) => [...state, ...pokemons]);
        setNextChunk(data.next);
      });
  }

  function showMorePokemons() {
    getPokemons(nextChunk);
  }

  return (
    <div className="app">
      <section className="section-inner">
        <h1 className="header">Pokedex</h1>
        <section className="section-content">
          <div className="pokemon-list-wrapper">
            <PokemonList
              pokemons={pokemonList}
              setSelectedPokemon={setSelectedPokemon}
            />
            <button className="btn-load" onClick={showMorePokemons}>
              Load More
            </button>
          </div>
          {selectedPokemon && <PokemonInfo pokemon={selectedPokemon} />}
        </section>
      </section>
    </div>
  );
}

export default App;
