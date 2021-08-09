import { useState } from "react";
import { PokemonList } from "./components/PokemonList";
import "./App.css";

function App() {
  const [nextChunk, setNextChunk] = useState("");
  function showMorePokimons() {}

  return (
    <div className="app">
      <section className="section-inner">
        <h1 className="header">Pokedex</h1>
        <PokemonList setNextChunk={setNextChunk} />
      </section>
    </div>
  );
}

export default App;
