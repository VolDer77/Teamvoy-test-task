import { capitalLetter } from "../utils";

export const PokemonCard = (props) => {
  const { name, id, types, url, selectPokemon } = props;

  function makeTypeColor(type) {
    const colors = {
      grass: "#70e000",
      fire: "#ec7672",
      electric: "#ffde7b",
      poison: "#c5b3cf",
      flying: "#d8e2dc",
      normal: "#ccd5ae",
      bug: "#718355",
      water: "#168aad",
      ground: "#936639",
      fairy: "#ff9100",
    };
    return colors[type];
  }

  function getPokemonInfo() {
    selectPokemon(id);
  }

  return (
    <div className="pokemon-card" onClick={getPokemonInfo}>
      <img alt="pokemon-img" className="pokemon-img" src={url} />
      <h3>{name}</h3>
      <div className="pokemon-types-wrapper">
        {types?.map(({ type }, idx) => (
          <span
            key={`${type}-${idx}`}
            className="pokemon-type"
            style={{ backgroundColor: makeTypeColor(type.name) }}
          >
            {capitalLetter(type.name)}
          </span>
        ))}
      </div>
    </div>
  );
};
