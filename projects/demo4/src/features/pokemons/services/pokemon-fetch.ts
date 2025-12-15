import { map, type Observable } from "rxjs";
import { fetchDataV2 } from "../../../core/services/data.fetch.v2";

const URL_BASE = 'https://pokeapi.co/api/v2';
const URL = URL_BASE + '/pokemon';
const apiOptions = '?limit=2000&offset=0';

export type PokeApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonLite[];
};

export type PokemonLite = {
  name: string;
  url: string;
};

export const searchPokemon = (item: string): Observable<PokemonLite[]> => {
  const url = URL + apiOptions;
  return fetchDataV2<PokeApiResponse>(url)().pipe(
    map(response => response.results.filter(p => p.name.toLowerCase().includes(item.toLowerCase())))
  )
}
