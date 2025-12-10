import React, { useCallback, useRef } from 'react';
import {
    concatWith,
    debounceTime,
    distinctUntilChanged,
    from,
    fromEvent,
    map,
    Observable,
    of,
    scan,
    switchMap,
    take,
    takeWhile,
    tap,
} from 'rxjs';
import { fibonacci } from '../generator-fibonacci';
import type { TypeOfLimits } from '../fibonacci/fibonacci';
import { useObservableV3 } from '@components/features/hooks/rx/use-observable-v3';

type Props = {
    readonly typeLimit: TypeOfLimits;
};

export const FibonacciItems2: React.FC<Props> = ({ typeLimit }) => {
    const refInput = useRef<HTMLInputElement>(null);

    const getFibonacciNum = (num: number): Observable<number[]> => {
        const source$ = from(fibonacci()).pipe(
            take(num),
            scan((acc: number[], value: number) => [...acc, value], [])
        );
        return source$;
    };

    const getFibonacciLimit = (limit: number): Observable<number[]> => {
        const source$ = from(fibonacci()).pipe(
            takeWhile((value: number) => value <= limit),
            scan((acc: number[], value: number) => [...acc, value], [])
        );
        return source$;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const factory = (): Observable<number[]> => {
        const inputNumber = refInput.current as HTMLInputElement;
        return of([])
            .pipe(tap(() => (inputNumber.value = '')))
            .pipe(
                concatWith(
                    fromEvent<Event>(inputNumber, 'input')
                        .pipe(
                            debounceTime(500),
                            map((event) => {
                                const element =
                                    event.target as HTMLInputElement;
                                const value = Number(element.value);
                                if (Number.isNaN(value) || value < 1) {
                                    return 0;
                                }
                                return value;
                            }),
                            tap((num: number) => console.log('TAP', num)),
                            distinctUntilChanged()
                        )
                        .pipe(
                            switchMap((num) => {
                                if (typeLimit === 'limit') {
                                    return getFibonacciLimit(num);
                                } else {
                                    return getFibonacciNum(num);
                                }
                            })
                        )
                )
            );
    };

    // const [data, setData] = useState<number[]>([]);
    // useEffect(
    //     () => {
    //     // if (!refInput.current) return;

    //     // const resetData = (): void => setData([]);
    //     // resetData();

    //     const source$ = factory();
    //     if (!source$) return
    //     const subscription = source$.subscribe(setData);

    //     return (): void => {
    //         subscription.unsubscribe();
    //     };
    // }, [factory, typeLimit]);

    const [data] = useObservableV3(useCallback(factory, [typeLimit]), []);

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
