// Tipos propios
// ===============

// Si se utilizan primitivos solo puede hacerse con type
type ID = string | number;

// Para objetos es posible usar type o interface
// Puede haber una regla de estilo en el proyecto para usar uno u otro

type User = { id: ID; name: string; age: number; job?: string };
// En este caso se Añade la I al final para evitar duplicar el nombre
// No es una convención común en TypeScript
interface UserI {
    readonly id: ID;
    name: string;
    age: number;
    job?: string;
}

// Uso de los tipos propios para anotar variables
const user2: User = { id: 2, name: 'Ana', age: 25 };
// Una propiedad opcional puede añadirse en cualquier momento
user2.job = 'Developer';

const users: User[] = [];
users.push(user2);
// Tipado estructural - duck typing
// Un objeto es del tipo User si tiene las mismas propiedades
// No importa si fue creado con la misma definición de tipo
users.push({ id: 3, name: 'Luis', age: 28, job: 'Designer' });

export const user3: User = {
    id: 3,
    name: 'SuperAdmin',
    age: 40,
    job: 'Manager',
};
export const user4: UserI = {
    id: 4,
    name: 'SuperAdmin',
    age: 40,
    job: 'Manager',
};
// Destructuring y spread
export const user5: UserI[] = [{ ...user2, id: 1 }];

// Acceso a valores del array
// Su tipo puede ser User | undefined
// PPara manipularlo se necesita hacer narrowing, eliminando el posible undefined
// Con una guarda de tipos o un casting
(users[0] as User).age++;

// Podría usarse el operador non-null assertion (postfijo !)
// Pero no es recomendable porque puede causar errores en tiempo de ejecución
// Así lo indica la regla eslint-disable @typescript-eslint/no-non-null-assertion

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
users[0]!.age++;

// Interfaces v. tipos

// Solo tipos

type PopularTag = 'js' | 'ts' | 'node' | 'react';
type MaybePopularTag = PopularTag | 'angular' | 'vue';

export const tag: MaybePopularTag = 'ts';

interface AdminI extends UserI {
    role?: 'admin' | 'superAdmin';
}

export const admin: AdminI = { id: 1, name: 'Admin', age: 40, role: 'admin' };

// Tipos híbridos con intersección de tipos
// =======================================

type BasicProduct = { id: number; name: string; price: number };
// Combinamos un tipo propio con otro literal
type BookProduct = BasicProduct & { author: string; pages: number };

export const book: BookProduct = {
    id: 1,
    name: 'TypeScript',
    price: 29.99,
    author: 'John Doe',
    pages: 300,
};

type WithReference = { reference: string };
// interface WithReferenceI { reference: string };

// Combinamos dos tipos propios
type SpecialBookProduct = BookProduct & WithReference;

export const test: SpecialBookProduct = {
    id: 1,
    name: 'Test',
    price: 10,
    author: 'Author',
    pages: 100,
    reference: 'REF-001',
};

// Unión de tipos con tipos propios
// ================================

type BaseUser = {
    name: string;
    boss: string;
};

interface Admin {
    name: string;
    team: string;
}

type UserOrAdmin2 = BaseUser | Admin;

export const userOrAdmin = (u: UserOrAdmin2): void => {
    // Guarda de tipos mediante el operador in
    if ('boss' in u) {
        console.log(`Usuario: ${u.name}, Jefe: ${u.boss}`);
    } else {
        console.log(`Admin: ${u.name}, Equipo: ${u.team}`);
    }
};

// Uniones discriminadas
// =====================

interface Square {
    kind: 'square';
    size: number;
}

interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}

interface Circle {
    kind: 'circle';
    radius: number;
}

type Shape = Square | Rectangle | Circle;

export const area = (s: Shape): number => {
    switch (s.kind) {
        case 'square':
            return s.size * s.size;
        case 'rectangle':
            return s.width * s.height;
        case 'circle':
            return Math.PI * s.radius ** 2;
        default: {
            // Exhaustividad
            const _exhaustiveCheck: never = s;
            return _exhaustiveCheck; // Si llegamos aquí, s es de tipo 'never'
        }
    }
};
