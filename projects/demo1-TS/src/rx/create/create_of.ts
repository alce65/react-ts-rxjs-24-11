// Operador of -> cualquier dato

import { of } from "rxjs";

const data1$ = of(2)
const data2$ = of('Hola')
const data3$ = of(true)
const data4$ = of({id:1, name:'Juan'})
const data5$ = of([1,2,3,4,5])
const data6$ = of(function(){ console.log('Hola desde la función')})

data1$.subscribe({
    next: (value) => console.log('Data1:', value),
    error: (err) => console.error('Data1 Error:', err),
    complete: () => console.log('Data1 Completed'),
});

data2$.subscribe({
    next: (value) => console.log('Data2:', value),
    error: (err) => console.error('Data2 Error:', err),
    complete: () => console.log('Data2 Completed'),
});

data3$.subscribe({
    next: (value) => console.log('Data3:', value),
    error: (err) => console.error('Data3 Error:', err),
    complete: () => console.log('Data3 Completed'),
});

data4$.subscribe({
    next: (value) => console.log('Data4:', value),
    error: (err) => console.error('Data4 Error:', err),
    complete: () => console.log('Data4 Completed'),
});

data5$.subscribe({
    next: (value) => console.log('Data5:', value),
    error: (err) => console.error('Data5 Error:', err),
    complete: () => console.log('Data5 Completed'),
});

data6$.subscribe({
    next: (value) => {
        console.log('Data6:', value);
        value(); // Llamada a la función
    },
    error: (err) => console.error('Data6 Error:', err),
    complete: () => console.log('Data6 Completed'),
}); 
