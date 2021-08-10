export function capitalLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export const sortByStats = (stats) => {
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

export const sortByTypes = (a, b) => {
  if (a.types[0].type.name < b.types[0].type.name) {
    return -1;
  }
  if (a.types[0].type.name > b.types[0].type.name) {
    return 1;
  }
  return 0;
};
