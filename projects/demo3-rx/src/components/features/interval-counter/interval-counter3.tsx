import { Card } from '@components/core/card/card';
import React, { useMemo, useRef } from 'react';
import {
    fromEvent,
    interval,
    Observable,
    scan,
    switchMap,
    takeUntil,
} from 'rxjs';
import { useObservableV3 } from '../hooks/rx/use-observable-v3';

export const IntervalCounter3: React.FC = () => {
    const startRef = useRef<HTMLButtonElement | null>(null);
    const stopRef = useRef<HTMLButtonElement | null>(null);

    const factory = (): Observable<number> => {
        const btnStart = startRef.current as HTMLButtonElement;
        const btnStop = stopRef.current as HTMLButtonElement;
        const interval$ = interval(500);

        const start$ = fromEvent(btnStart, 'click');
        const stop$ = fromEvent(btnStop, 'click');

        const counter$ = start$.pipe(
            switchMap(() =>
                interval$.pipe(
                    scan((acc) => acc + 1, 0),
                    takeUntil(stop$)
                )
            )
        );

        return counter$;
    };

    const [counter] = useObservableV3(
        useMemo(() => factory, []),
        0
    );

    return (
        <Card title="Interval Counter 3">
            <p>
                Counter <output className="counter">{counter}</output>
            </p>
            <button ref={startRef}>Start</button>
            <button ref={stopRef}>Stop</button>
        </Card>
    );
};
