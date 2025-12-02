import { Observable } from 'rxjs';

export const source$ = new Observable<number>((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.error(new Error('Something went wrong!'));
    observer.next(4);
    observer.next(5);
    observer.complete();
});

// source$.subscribe((data) => console.log('Observer 1 subscribed: ', data));

// setTimeout(() => {
//     source$.subscribe((data) => console.log('Observer 2 subscribed: ', data));
// }, 1000);

// Firma en desuso
// source$.subscribe(
//     (data) => console.log('Observer 1 subscribed: ', data),
//     (err) => console.error(err),
//     () => console.log('Observer 1 completed')
// );

source$.subscribe({
    next: (data) => console.log('Observer 2 subscribed: ', data),
    error: (err: Error) => console.error(err.message),
    complete: () => console.log('Observer 2 completed'),
});
