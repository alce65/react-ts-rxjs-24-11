import React from 'react';
import { SearchPokemons } from './components/search-pokemons/search-pokemons';

export const PokePage: React.FC = () => {
    return (
        <div>
            <h2>Pokemons</h2>
            <SearchPokemons />
        </div>
    );
};
