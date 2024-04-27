export const getFilmNumber = (filmName: string) => {
  return filmName.split('https://swapi.info/api/films/')[1].replace('/', '');
};
