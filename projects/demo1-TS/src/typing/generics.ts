/* eslint-disable @typescript-eslint/no-unused-vars */
// Anotación de genéricos
function identity<T>(value: T): T {
    return value;
}



const num = identity<number>(42); // T es inferido como number 
    // ^?

const identityArrow = <T>(value: T): T => value;

const num2 = identityArrow(42); // T es number, U es string

// Uso con arrays
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

// Interfaces genéricas

interface KeyValuePair<Key, Value> {
    key: Key;
    value: Value;
}

// Interface repository genérica

export interface Repository<T extends { id: string }> {
    getAll: () => T[];
    getById: (id: T["id"]) => T | null;
    save: (item: T) => void;
    update: (id: T["id"], item: T) => void;
    delete: (id: T["id"]) => void;
}
