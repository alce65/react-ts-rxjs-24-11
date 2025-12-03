import { Card } from '@components/core/card/card';
import React, { useEffect, useRef, useState } from 'react';
import { fromEvent, interval, Observable, scan, skipUntil, takeUntil } from 'rxjs';

export const IntervalCounter2: React.FC = () => {
    const startRef = useRef<HTMLButtonElement | null>(null);
    const stopRef = useRef<HTMLButtonElement | null>(null);

    const [counter, setCounter] = useState(0);
    const [isStopClicked, setIsStopClicked] = useState(false);


    const factory = (): [Observable<Event>, Observable<Event>] | null => {
        const btnStart = startRef.current;
        const btnStop = stopRef.current;
        if (!btnStart || !btnStop) return null;
        const start$ = fromEvent(btnStart, 'click');
        const stop$ = fromEvent(btnStop, 'click');
        return [start$, stop$];
    };

    useEffect(() => {

        console.log('Use Effect Counter2');
        const [start$, stop$] = factory() ?? [null, null];
        if (!start$ || !stop$) return;

        const interval$ = interval(500).pipe(
            skipUntil(start$),
            scan((acc) => acc + 1, 0),
            takeUntil(stop$)
        )

        // let subscriptionInterval: Subscription;

        // const subscription1 = start$.subscribe(() => {
        //     console.log('Start button clicked');

        //     subscriptionInterval = interval$.subscribe(() => {
        //         setCounter((c) => c + 1);
        //     });
        // });

        const subscription2 = stop$.subscribe(() => {
            console.log('Stop button clicked');
           setIsStopClicked((val) => !val);
        });

        const subscription1 = interval$.subscribe(setCounter);

        return (): void => {
           
            subscription1.unsubscribe();
            subscription2.unsubscribe();
        };
    }, [isStopClicked]);

    return (
        <Card title="Interval Counter 2">
            <p>Interval Counter 2 (operators)</p>
            <p>
                Counter <output className="counter">{counter}</output>
            </p>
            <button ref={startRef}>Start</button>
            <button ref={stopRef}>Stop</button>
        </Card>
    );
};
