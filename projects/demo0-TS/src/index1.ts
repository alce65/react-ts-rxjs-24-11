// Anotación de tipos
// =====================

// Anotación en los parámetros y en el valor de retorno
export const add = (a: number, b: number): number => {
    return a + b;
};

// Parámetros opcionales con valores por defecto
// Se infieren los tipos de los parámetros
export const addWithDefault = (a = 0, b= 0): number => {
    return a + b;
};

// En ambos casos el valor de retorno de la función se infiere
// Es una buena práctica indicarlo explícitamente
// Podemos activar la regla "noImplicitReturns" en tsconfig.json para forzar esta práctica

// Unión de tipos, en este caso primitivos string | number
// Tipo de retorno void
export const render = (value: string | number): void => {

    // Guarda de tipos
    if (typeof value === 'number') {
        value = value.toString();
    }
    // Narrowing: el tipo ya solo puede ser string
    console.log(value);
}

// Tipo any - mala práctica
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let variable: any = 'Hola';
variable = 22;
variable = true;
console.log(variable);


// Inferencia de tipos
// =====================

// TypeScript infiere el tipo automáticamente en la declaración con valor
let greeting = 'Hola mundo';
//@ts-expect-error El tipo 'number' no se puede asignar al tipo 'string'
greeting = 22;
render(greeting);

//Tipos literales
export const pi = 3.14;
export let pi2 = 3.14 as const;
// @ts-expect-error El tipo '3.15' no se puede asignar al tipo '3.14'
pi2 = 3.15;

// Objetos
// =========

// Los objetos se crean como const para que sean inmutables
// Sin embargo, sus propiedades pueden ser modificables a menos que se indique lo contrario
// El tipo se infiere igual que en los primitivos
const user = { name: 'Juan', age: 30 };
console.log(user);
console.log(user);
// @ts-expect-error La propiedad 'job' no existe en el tipo...
user.job = "Developer";
// @ts-expect-error El tipo 'string' no se puede asignar al tipo 'number'
user.age = "31";

// En lugar de inferir el tipo, se puede anotar explícitamente
// utilizando un type inline (o type literal) o una interfaz
const user1: { name: string; age: number; job?: string } = { name: 'María', age: 27 };
user1.job = 'Designer';

// También se puede usar la palabra clave Record<K, V>
// El tipo Record permite definir objetos con claves dinámicas
const userRecord: Record<string, string | number> = { name: 'Luis', age: 35 };
userRecord.job = 'Manager';
userRecord.age = 36;

// Objeto vacio
const obj = {}

//@ts-expect-error La propiedad 'age' no existe en el tipo...
obj.age = 22


// Arrays
// =======

// Se crea como const para que no se puedan reasignar
// La inferencia de tipos en arrays vacíos es de tipo any[]
// Por eso es recomendable anotarlos explícitamente
const  numbers: number[] = [];
numbers.push(1);
numbers.push(2);
// @ts-expect-error El tipo 'string' no se puede asignar al tipo 'number'
numbers.push("3");

// Si se desconoce el tipo, se puede usar unknown
export const data: unknown[] = []; // array de never

// El tipo unknown
// ===============

// unknown es mucho más restrictivo que any
const bad: unknown = 2;

// Para usar el valor, es necesario pasar de unknown a un tipo conocido

// Puede hacerse mediante
// aserción o casting de tipos

// La aserción puede llevar a un error en tiempo de ejecución
// ya que realmente el valor será un number, sin la propiedad toLocaleLowerCase
// (bad as string).toLocaleLowerCase();

(bad as number).toFixed(2);

// También mediante Guardas de tipos

if (typeof bad === 'number') {
    console.log(bad.toFixed(2));
} else if (typeof bad === 'string') {
    console.log(bad.toLocaleLowerCase());
}

// Tuplas
// =======

const userTuple: [string, number] = ['Pedro', 35];
userTuple[0] = 'Pablo';
// @ts-expect-error El tipo de tupla ... no tiene ningún elemento en el índice "2".
userTuple[2] = "36";
// ¿Paradójicamente? push sí permite añadir elementos
userTuple.push(36);


