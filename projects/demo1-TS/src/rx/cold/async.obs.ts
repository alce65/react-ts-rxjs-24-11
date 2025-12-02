import { Observable, type Observer } from 'rxjs';

const source$ = new Observable<number>((observer) => {
    console.log('Soy un observable');
    let count = 0;
    const intervalId = setInterval(() => {
        console.log('Valor Emitido', count);

        if (count === 3) {
            observer.error('Error: count reached 3');
            return;
        }
        if (count > 5) {
            observer.complete();
            return;
        }

        observer.next(count++);
    }, 1_000);

    // Cleanup function
    return (): void => {
        clearInterval(intervalId);
    };
});

const observer: Partial<Observer<number>> = {
    next: (value) => console.log('Next:', value),
    error: (err) => console.error('Error:', err),
    // complete: () => console.log('Completed'),
}


const subscription = source$.subscribe(observer);

// Unsubscribe after 5 seconds to demonstrate cleanup
setTimeout(() => {
    subscription.unsubscribe();
    console.log('Unsubscribed from observable');
}, 500);

setTimeout(() => {
    const subscription2 = source$.subscribe({
        next: (value) => console.log('Next:', value),
        error: (err) => console.error('Error:', err),
        complete: () => console.log('Completed'),
    });

    return (): void => {
        subscription2.unsubscribe();
        console.log('Unsubscribed from second observable');
    }

}, 3_000);


// const p= new Promise((resolve, rejects) => {
//     setTimeout(() => {

//         const n = Math.random();
//         if (n > 0.5) {
//             resolve(n);
//             return;
//         }
//         console.log('Unsubscribed from observable');
//         rejects('Promise rejected: Random number less than 0.5');
//     }, 5000);
// })

// p.then(
//     value => console.log(`Promise resolved with value: ${value}`),
// ).catch(
//     error => console.error(`Promise rejected with error: ${error}`)
// ).finally(() => {
//     console.log('Promise completed');
// });
