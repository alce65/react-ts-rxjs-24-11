import { Card } from '@components/core/card/card';
import React, { useCallback, useRef } from 'react';
import {
    fromEvent,
    interval,
    map,
    merge,
    NEVER,
    Observable,
    of,
    scan,
    startWith,
    switchMap
} from 'rxjs';
import { useObservableV3 } from '../hooks/rx/use-observable-v3';

type ControlEvent = {isRunning: boolean, isReset?: true }

export const IntervalCounter4: React.FC = () => {
    const startRef = useRef<HTMLButtonElement | null>(null);
    const stopRef = useRef<HTMLButtonElement | null>(null);
    const pauseRef = useRef<HTMLButtonElement | null>(null);

    const factory = (): [
        Observable<ControlEvent>,
        Observable<ControlEvent>,
        Observable<ControlEvent>
    ] => {
        const btnStart = startRef.current as HTMLButtonElement;
        const btnPause = pauseRef.current as HTMLButtonElement;
        const btnStop = stopRef.current as HTMLButtonElement;

        const start$ = fromEvent(btnStart, 'click').pipe(
            map((): ControlEvent => ({isRunning: true}))
        )
        const stop$ = fromEvent(btnStop, 'click').pipe(
            map((): ControlEvent => ({isRunning: false, isReset: true}))
        );
        const pause$ = fromEvent(btnPause, 'click').pipe(
            map((): ControlEvent => ({isRunning: false}) )
        );

        return [start$, stop$, pause$];
    };

    const factoryCounter = useCallback((): Observable<number> => {

        const [start$, stop$, pause$] = factory() 

        const interval$ = interval(200)

        const counter$ = merge(start$, stop$, pause$).pipe(
            startWith({isRunning: false}),
            switchMap((controlEvent: ControlEvent) => {
                if((controlEvent.isReset)) {
                    // Resetear
                    return of(-1)
                }
                return controlEvent.isRunning ? interval$ : NEVER
            }),
            scan((acc, val)  => {
                if(val === -1) return 0
                return acc + 1
            }, 0)

        )

        return counter$
    }, [])

    const [counter] = useObservableV3(factoryCounter, 0);

    return (
        <Card title="Interval Counter 4">
            <p>
                Counter <output className="counter">{counter}</output>
            </p>
            <button ref={startRef}>Start</button>
            <button ref={pauseRef}>Pause</button>
            <button ref={stopRef}>Stop</button>
        </Card>
    );
};
