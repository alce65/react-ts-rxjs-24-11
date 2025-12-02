import { BehaviorSubject } from "rxjs";

const subject$ = new BehaviorSubject<number>(0);

console.log('Subject emitiendo')


subject$.next(1);
subject$.next(2);

console.log('Observer A suscrito')
subject$.subscribe({
    next: (value) => console.log('Observer A:', value),
    error: (err) => console.error('Observer A Error:', err),
    complete: () => console.log('Observer A Completed'),
});


subject$.next(3);
subject$.next(4);

console.log('Observer B suscrito')
subject$.subscribe({
    next: (value) => console.log('Observer B:', value),
    error: (err) => console.error('Observer B Error:', err),
    complete: () => console.log('Observer B Completed'),
});

subject$.next(5);
subject$.next(6);
