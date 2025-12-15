import React, { useMemo } from 'react';
import { Card } from '../../../core/components/card/card';
import { scan, Subject } from 'rxjs';
import { useObservableV3 } from '../../../core/hooks/use-observable-v3';

// const ACTIONS = ['INCREMENT', 'DECREMENT', 'RESET'] as const;
// type ActionType = (typeof ACTIONS)[number];

const reducers: Record<string, (sum: number) => number> = {
    INCREMENT: (sum: number) => sum + 1,
    DECREMENT: (sum: number) => sum - 1,
    RESET: () => 0,
};

// const isActionType = (value: string): value is ActionType =>
//     (ACTIONS as readonly string[]).includes(value);

export const CounterButtons: React.FC = () => {
    const counter$ = useMemo(() => new Subject<string>(), []);


    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        const {
            dataset: { action },
        } = event.currentTarget;

        if (action) {
            counter$.next(action);
        }
    };

    const source$ = useMemo(
        () =>
            counter$.pipe(
                // scan((acc, curr) => {
                //     switch (curr) {
                //         case 'INCREMENT':
                //             return acc + 1;
                //         case 'DECREMENT':
                //             return acc - 1;
                //         case 'RESET':
                //             return 0;
                //         default:
                //             return acc;
                //     }
                // }, 0)
                scan((acc, action) => reducers[action](acc), 0)
            ),
        [counter$]
    );

    const [count] = useObservableV3(source$, 0);

    return (
        <Card>
            <p>
                <button
                    onClick={handleClick}
                    title="Decrement"
                    data-action={'DECREMENT'}
                >
                    ➖
                </button>
                <span className="count-value">count is {count}</span>
                <button
                    onClick={handleClick}
                    title="Increment"
                    data-action={'INCREMENT'}
                >
                    ➕
                </button>
                <button
                    onClick={handleClick}
                    title="Reset"
                    data-action={'RESET'}
                >
                    🔄
                </button>
            </p>
        </Card>
    );
};
