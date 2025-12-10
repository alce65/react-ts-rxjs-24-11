import React, { useEffect, useRef, useState } from 'react';
import {
    debounceTime,
    distinctUntilChanged,
    from,
    fromEvent,
    map,
    scan,
    take,
    takeWhile,
    tap,
} from 'rxjs';
import { fibonacci } from '../generator-fibonacci';
import type { TypeOfLimits } from '../fibonacci/fibonacci';

type Props = {
    readonly typeLimit: TypeOfLimits;
};

export const FibonacciItems: React.FC<Props> = ({ typeLimit }) => {
    const refInput = useRef<HTMLInputElement>(null);
    const [data, setData] = useState<number[]>([]);

    const getFibonacciNum = (num: number): void => {
        const source$ = from(fibonacci()).pipe(
            take(num),
            scan((acc: number[], value: number) => [...acc, value], [])
        );
        source$.subscribe((data: number[]) => {
            setData(data);
        });
    };

    const getFibonacciLimit = (limit: number): void => {
        const source$ = from(fibonacci()).pipe(
            takeWhile((value: number) => value <= limit),
            scan((acc: number[], value: number) => [...acc, value], [])
        );
        source$.subscribe((data: number[]) => {
            setData(data);
        });
    };

    useEffect(() => {
        if (!refInput.current) return;

        refInput.current.value = '';
        const resetData = (): void => setData([]);
        resetData();

        const events$ = fromEvent<Event>(refInput.current, 'input').pipe(
            debounceTime(500),
            map((event) => {
                const element = event.target as HTMLInputElement;
                const value = Number(element.value);
                return isNaN(value) ? 0 : value;
            }),
            tap((num: number) => console.log('TAP', num)),
            distinctUntilChanged()
        );

        const subscription = events$.subscribe((num: number) => {
            if (typeLimit === 'limit') {
                getFibonacciLimit(num);
            } else {
                getFibonacciNum(num);
            }
        });

        return (): void => {
            subscription.unsubscribe();
        };
    }, [typeLimit]);

    // useEffect(() => {
    //     const subscription = fibonacci$.subscribe(setState);

    //     return () => {
    //         subscription.unsubscribe();
    //     };
    // }, [fibonacci$]);

    // const [data] = useObservableV3(fibonacci$, []);

    // if(!data) {
    //     return <Card title="Fibonacci Generator">
    //         <p>Error in Fibonacci serie generation...</p>
    //     </Card>;
    // }

    return (
        <>
            <input
                type="number"
                placeholder="Numero de valores"
                ref={refInput}
            />
            <p>
                Fibonacci value:
                <output>{(data as number[]).join(', ')}</output>
            </p>
        </>
    );
};
