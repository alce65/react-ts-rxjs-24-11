import { useEffect, useState } from "react";
import type { Observable, Observer } from "rxjs";

export const useObservableV1 = <T,>(
    source$: Observable<T>,
    initialValue: T | null = null
): [T | null, Error | null] => {

 const [state, setState] = useState<T | null>(initialValue);
 const [error, setError] = useState<Error | null>(null);

    useEffect(() => {

        const observer: Partial<Observer<T>> = {
            next: (value: T) => {
                console.log('Nuevo valor recibido:', value);
                setState(value);
                setError(null);
            },
            error: (error: Error) => {
                console.error('Error en el observable:', error);
                setError(error);
            }
        }

        const subscription = source$.subscribe(observer);
        console.log('Ejecutando useEffect');

        return (): void => {
            subscription.unsubscribe();
        };
    }, [source$]);

    return [state,  error];

}
