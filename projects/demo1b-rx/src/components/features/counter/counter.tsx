import React, { useEffect, useRef, useState } from 'react';
import { Card } from '../../core/card/card';
import { fromEvent, Observable, scan } from 'rxjs';

export const Counter: React.FC = () => {
    const [count, setCount] = useState(0);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const factory = (): Observable<number> => {
        const button = buttonRef.current as HTMLButtonElement;
        return fromEvent<MouseEvent>(button, 'click').pipe(
            scan((acc) => acc + 1, 0)
        );
    };

    useEffect(() => {
        const events$ = factory();
        const subscription = events$
            .subscribe(setCount);
            // () => {
            //     setCount((count) => count + 1);
            // }
        return (): void => {
            subscription.unsubscribe();
        };
    }, []);

    return (
        <Card>
            <button ref={buttonRef}>count is {count}</button>
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </Card>
    );
};
