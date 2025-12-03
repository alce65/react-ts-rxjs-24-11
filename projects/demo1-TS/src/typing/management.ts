/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Manipulación de tipos con operadores
 * ====================================
 */

/**
 * Type Queries: typeof & keyof
 */

// Ejemplo de typeof

const obj = { name: 'Alice', age: 30 };
type ObjectType = typeof obj; // ObjectType es inferido como { name: string; age: number }

interface Person {
    name: string;
    age: number;
}

type PersonKeys = keyof Person; // "name" | "age"

export const user = {
    name: 'Alice',
    age: 30,
};
type UserKeys = keyof typeof user; // "name" | "age"

export const makeQuery = (
    _url: string,
    _opts?: {
        method?: string;
        headers?: {
            [key: string]: string;
        };
        body?: string;
    }
) => {
    // Simulación de una función que hace una consulta
};

type MakeQueryReturn = ReturnType<typeof makeQuery>;
type MakeQueryParams = Parameters<typeof makeQuery>;

/**
 * Tipos de acceso indexado (Indexed Access Types)
 */

interface Entity {
    id: string | number;
    name: string;
}

export type EntityId = Entity['id']; // string | number

// Ejemplo junto a otros operadores

interface TextVariants {
    primary: 'black';
    secondary: 'grey';
    danger: 'red';
}

export type PrimaryColor = TextVariants['primary'];
export type NoDangerColor = TextVariants['primary' | 'secondary'];
export type Color = TextVariants[keyof TextVariants];

// Ejemplo con arrays y tuplas

export type Letters = ['a', 'b', 'c'];
//   ^?
export type AorB = Letters[0 | 1];
//   ^?

export type Letter = Letters[number];
//   ^?

interface TextVariants {
    primary: 'black';
    secondary: 'grey';
    danger: 'red';
}

export const keyTV = 'primary';

export type Selected = TextVariants[typeof keyTV];

export const numbers: { [K: string]: string } = {
    uno: '1',
    dos: '2',
};
