import React, { useMemo } from 'react';

import { scan, tap } from 'rxjs';

import { Card } from '../../../../core/components/card/card';
import { useObservableV3 } from '../../../../core/hooks/use-observable-v3';
import {
    clickActionService,
    infoActionService,
} from '../../services/sharing-actions';

export const Counter: React.FC = () => {
    // const counter$ = useMemo(() => new Subject<number>(), []);

    const handleClick = (): void => {
        clickActionService.setSubject(true);
        // counter$.next(1);
    };

    const source$ = useMemo(
        () =>
            clickActionService.getObservable().pipe(
                scan((acc, curr) => acc + (curr ? 1 : 0), 0),
                tap((value) => {
                    const message = 'El valor del contador es ' + value;
                    return infoActionService.setSubject(message);
                })
            ),
        []
    );

    const [count] = useObservableV3(source$, 0);

    return (
        <Card>
            <button onClick={handleClick}>count is {count}</button>
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </Card>
    );
};
