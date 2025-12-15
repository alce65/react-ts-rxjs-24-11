import React, { useMemo } from 'react';
import { Card } from '../../../core/components/card/card';
import { scan, Subject } from 'rxjs';
import { useObservableV3 } from '../../../core/hooks/use-observable-v3';

export const Counter: React.FC = () => {
    // const buttonRef = useRef<HTMLButtonElement | null>(null);
    // const factory = (): Observable<number> => {
    // const button = buttonRef.current as HTMLButtonElement;
    // return fromEvent<MouseEvent>(button, 'click').pipe(
    //     scan((acc) => acc + 1, 0)
    // );
    //};

    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     // const events$ = factory();
    //     const subscription = source$.subscribe(setCount);
    //     return (): void => {
    //         subscription.unsubscribe();
    //     };
    // }, [source$]);

    const counter$ = useMemo(() => new Subject<number>(), []);

    const handleClick = (): void => {
        counter$.next(1);
    };

    const source$ = useMemo(
        () => counter$.pipe(scan((acc, curr) => acc + curr, 0)),
        [counter$]
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
