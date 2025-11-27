import { Card } from '@components/core/card/card';
import React from 'react';
import { getData } from '../../../services/data.service';
import type { Product } from '../types/products';

const URL = 'https://test.sample.com';

export const SearchDebounce: React.FC = () => {
    const [results, setResults] = React.useState<Product[]>([]);
    const timeRef = React.useRef<NodeJS.Timeout | null>(null);

    const handleInput = (event: React.FormEvent<HTMLInputElement>): void => {
        const value = event.currentTarget.value;
        const searchUrl = URL + `?q=${value}`;

        if (timeRef.current) {
            clearTimeout(timeRef.current);
        }

        timeRef.current = setTimeout(() => {
            getData<Product>(searchUrl).then((data) => {
                setResults(data);
            });
        }, 500);
    };

    return (
        <Card title="Simple Search with debounce">
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
