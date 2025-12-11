import { useEffect, useMemo, useState } from 'react';
import { type Observable, type Observer } from 'rxjs';

export const useSubscription = <T,>(
    inSource$: Observable<T> | (() => Observable<T>),
    observer: Partial<Observer<T>>
): void => {
    useEffect(() => {
        let source$: Observable<T> = inSource$ as Observable<T>;
        if (typeof inSource$ === 'function') {
            source$ = inSource$();
        }
        const subscription = source$.subscribe(observer);
        console.log('Ejecutando useEffect');
        return (): void => {
            subscription.unsubscribe();
        };
    }, [observer, inSource$]);
};

export const useObservableV3 = <T,>(
    inSource$: Observable<T> | (() => Observable<T>),
    initialValue: T | null = null
): [T | null, Error | null] => {
    const [state, setState] = useState<T | null>(initialValue);
    const [error, setError] = useState<Error | null>(null);

    const observer: Partial<Observer<T>> = useMemo(
        () => ({
            next: (value: T): void => {
                // console.log('Nuevo valor recibido:', value);
                setState(value);
                setError(null);
            },
            error: (error: Error): void => {
                // console.error('Error en el observable:', error);
                setError(error);
            },
        }),
        []
    );
    useSubscription<T>(inSource$, observer);

    return [state, error];
};
