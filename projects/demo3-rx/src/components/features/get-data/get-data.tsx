import { Card } from '@components/core/card/card';
import React, { useCallback, useRef } from 'react';
import { from, fromEvent, switchMap, tap } from 'rxjs';
import { fetchMock } from './data-service';
import { useObservableV3 } from '../hooks/rx/use-observable-v3';

export const GetData: React.FC = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const factory = useCallback(() => {
        const button = buttonRef.current as HTMLButtonElement;

        return fromEvent(button, 'click').pipe(
            switchMap(() =>
                from(fetchMock()).pipe(tap((data) => console.log(data)))
            )
        );
    }, []);

    const [data] = useObservableV3(factory, '');

    return (
        <Card title="Get Data">
            <p>Uso de switchMap para manejar peticiones cancelables</p>
            <button ref={buttonRef}>Fetch Data</button>
            {data && <p>Received: {data}</p>}
        </Card>
    );
};
