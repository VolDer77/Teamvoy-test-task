export const setCapitalLetter = (pokemons) => {
  return pokemons.map((pokemon) => {
    return {
      ...pokemon,
      name: capitalLetter(pokemon.name),
    };
  });
};

export function capitalLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export const sortStats = (stats) => {
  return stats.sort((a, b) => {
    if (a.stat.name < b.stat.name) {
      return -1;
    }
    if (a.stat.name > b.stat.name) {
      return 1;
    }
    return 0;
  });
};
