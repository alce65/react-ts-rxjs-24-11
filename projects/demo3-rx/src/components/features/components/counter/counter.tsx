import { Card } from '@components/core/card/card';
import { useObservableV3 } from '@components/features/hooks/rx/use-observable-v3';
import React, { useRef } from 'react';
import { fromEvent, Observable, scan } from 'rxjs';

export const Counter: React.FC = () => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    
    const factory = (): Observable<number> => {
        const button = buttonRef.current as HTMLButtonElement;
        return fromEvent<MouseEvent>(button, 'click').pipe(
            scan((acc) => acc + 1, 0)
        );
    };

    const [count] = useObservableV3<number>(factory, 0);

    return (
        <Card>
            <button ref={buttonRef}>count is {count}</button>
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </Card>
    );
};
