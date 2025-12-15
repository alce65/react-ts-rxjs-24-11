import { type ChangeEventHandler } from 'react';
import { Card } from '../../../../core/components/card/card';
import { List } from '../../../../core/components/list/list';
import { searchPokemon, type PokemonLite } from '../../services/pokemon-fetch';
import { debounceTime, distinctUntilChanged, exhaustMap, filter, Subject } from 'rxjs';
import { useObservableV3 } from '../../../../core/hooks/use-observable-v3';

export const SearchPokemons: React.FC = () => {

    const input$ = new Subject<string>()

    const poke$ = input$.pipe(
        filter(input => input.length >= 3),
        debounceTime(500),
        distinctUntilChanged(),
        exhaustMap((input) =>  searchPokemon(input))
    )
    
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const { value } = event.target;
        input$.next(value);
    };
    
    const renderItem = (pokemon: PokemonLite): React.ReactNode => (
        <>
            <a href={pokemon.url} target="_blank">
                {pokemon.name}
            </a>
        </>
    );
    
   
    const [data, error] = useObservableV3(poke$, [])

    return (
        <Card title="Search Pokemon">
            <label>
                <span>Pokemon name: </span>
                <input type="text" onChange={handleChange} />
            </label>

            {data && data.length > 0 && (
                <List items={data} renderItem={renderItem} />
            )}
            {data && data.length === 0 && <p>No results found.</p>}
            {error && <p style={{ color: 'red' }}>{error.message}</p>}
        </Card>
    );
};
