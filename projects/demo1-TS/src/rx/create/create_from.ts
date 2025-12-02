// from observables desde 'like-observables'

import { from, Observable } from 'rxjs';

const promise = new Promise<number>((resolve) => {
    console.log('Promise ejecutándose');
    setTimeout(() => {
        resolve(42);
    }, 2000);
});
const promise$ = from(promise);

promise$.subscribe({
    next: (value) => console.log('Promise value:', value),
    error: (err) => console.error('Promise Error:', err),
    complete: () => console.log('Promise Completed'),
});

const array = [10, 20, 30, 40, 50];
const array$ = from(array);

array$.subscribe({
    next: (value) => console.log('Array value:', value),
    error: (err) => console.error('Array Error:', err),
    complete: () => console.log('Array Completed'),
});

{
    type Action = {
        type: 'INCREMENT' | 'DECREMENT';
        payload?: number;
    } & {
        type: 'RESET';
    };

    const example$: Observable<Action> = from([
        { type: 'INCREMENT', payload: 1 } as Action,
        { type: 'RESET' } as Action,
        { type: 'INCREMENT', payload: 2 } as Action,
        { type: 'DECREMENT', payload: 1 } as Action,
    ]);
    example$.subscribe((value) =>
        console.log('Demo2: Result with from ', value)
    );
}
{
    function* values(): Generator<number> {
        yield 1;
        yield 2;
        yield 3;
        return;
    }

    const gen$ = from(values());

    gen$.subscribe({
        next: (value) => console.log('Generator value:', value),
        error: (err) => console.error('Generator Error:', err),
        complete: () => console.log('Generator Completed'),
    });
}
