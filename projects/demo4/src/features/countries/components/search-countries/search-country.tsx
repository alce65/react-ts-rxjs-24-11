import React, { useRef } from 'react';
import { Card } from '../../../../core/components/card/card';
import { List } from '../../../../core/components/list/list';
import { useObservableV3 } from '../../../../core/hooks/use-observable-v3';
import type { Country } from '../../types/country';
import { of} from 'rxjs';

const source$ = of([])
const EMPTY_ARRAY: Country[] = []

export const SearchCountry: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [data, error] = useObservableV3<Country[]>(source$, EMPTY_ARRAY);

    const renderItem = (country: Country): React.ReactNode => (
        <>
            <p>
                {country.name.common} - Capital: {country.capital.join(', ')}
            </p>
            <small>{country.name.official}</small>
        </>
    );

    return (
        <Card title="Search Countries">
            <label>
                <span>Country</span>
                <input type="text" ref={inputRef} />
            </label>

            {data && data.length > 0 && (
                <List items={data} renderItem={renderItem} />
            )}
            {data && data.length === 0 && <p>No results found.</p>}
            {error && <p style={{ color: 'red' }}>{error.message}</p>}
        </Card>
    );
};
