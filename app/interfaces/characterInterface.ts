export interface CharacterInterface {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  films: string[];
}
export interface FilmInterface {
  title: string;
  episode_id: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: CharacterInterface[];
}
