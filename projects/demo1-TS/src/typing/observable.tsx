import { Observable, map } from 'rxjs';

const numberObservable$ = new Observable<number>((subscriber) => {
    subscriber.next(42);
});

numberObservable$.pipe(
    //@ts-expect-error Error La propiedad 'toUpperCase' no existe en el tipo 'number'
    map((v) => v.toUpperCase()) //❌ Error
);

numberObservable$.subscribe({
    next: (v) => {
        console.log(v.toFixed(2));
        // @ts-expect-error Error La propiedad 'toUpperCase' no existe en el tipo 'number'
        console.log(v.toUpperCase()); // ❌ Error
    },
    error: (err: Error) => {
        console.error('Error:', err.message);
    },
    complete: () => {
        console.log('Completed');
    },
});
