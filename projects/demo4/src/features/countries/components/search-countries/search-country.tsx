import React, { useRef } from 'react';
import { Card } from '../../../../core/components/card/card';
import { List } from '../../../../core/components/list/list';
import { useObservableV3 } from '../../../../core/hooks/use-observable-v3';
import type { Country } from '../../types/country';
import {
    debounceTime,
    distinctUntilChanged,
    exhaustMap,
    fromEvent,
    map,
    Observable,
    tap,
} from 'rxjs';
import { searchCountries } from '../../services/countries-fetch';

const EMPTY_ARRAY: Country[] = [];

export const SearchCountry: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const renderItem = (country: Country): React.ReactNode => (
        <>
            <p>
                {country.name.common} - Capital: {country.capital.join(', ')}
            </p>
            <small>{country.name.official}</small>
        </>
    );

    const factory = (): Observable<Country[]> => {
        const input = inputRef.current as HTMLInputElement;

        return fromEvent<React.ChangeEvent<HTMLInputElement>>(input, 'input')
            .pipe(
                debounceTime(500),
                map((event) => {
                    const { value } = event.target;
                    return value;
                }),
                distinctUntilChanged()
            )
            .pipe(
                tap((inputData) => console.log(inputData)),
                exhaustMap((inputData) => searchCountries(inputData))
            );
    };

    const [data, error] = useObservableV3<Country[]>(factory, EMPTY_ARRAY);

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
