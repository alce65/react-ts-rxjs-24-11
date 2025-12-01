import { Card } from '@components/core/card/card';
import React from 'react';
import { getData } from '../../../services/data.service';
import type { Product } from '../types/products';

const URL = 'https://test.sample.com';

export const Search: React.FC = () => {
    const [results, setResults] = React.useState<Product[]>([]);

    const handleInput = (event: React.FormEvent<HTMLInputElement>): void => {
        const value = event.currentTarget.value;
        // Simulate search results
        const searchUrl = URL + `?q=${value}`;
        getData<Product>(searchUrl).then((data) => {
            setResults(data);
        }).catch((error: Error) => {
            console.error('Error fetching data:', error.message);
        });
    };

    return (
        <Card title="Simple Search">
            <label htmlFor="">
                <span>Search: </span>
                <input onInput={handleInput} />
            </label>
            <ul>
                {results.map((r, i) => (
                    <li key={i}>{JSON.stringify(r)}</li>
                ))}
            </ul>
        </Card>
    );
};
