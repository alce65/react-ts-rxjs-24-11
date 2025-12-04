type User = { id: number; name: string };

export const fetchUser = async (): Promise<User> => {
    const res = await fetch('/api/user');
    return res.json();
};

// return respuesta ok (200-299) -> res.json() -> User
// return respuesta error (400-599) -> NO lanza un error
// lanza un error (e.g. error de red)

// Nuestra función

// return respuesta ok (200-299) -> res.json() -> User
// return respuesta error (400-599) -> lanza un error
// lanza un error (e.g. error de red)

export const fetchUser2 = async (): Promise<User> => {
    const res = await fetch('/api/user');
    if (!res.ok) throw new Error('Error al obtener el usuario');
    return res.json();
};

export const fetchUser3 = async (): Promise<User> => {
    try {
        const res = await fetch('/api/user');
        if (!res.ok) throw new Error('Error al obtener el usuario');
        return res.json();
    } catch (error) {
        // Definir errores específicos, class HttError extends Error {...}
        // Garantizar objetos de tipo Error
        throw new Error('Error de red al obtener el usuario', { cause: error });
    }
};

// Uso de la función

const getUser = async () => {
    try {
        const user = await fetchUser3();
        console.log('Usuario obtenido:', user);
    } catch (error) {
        //console.error('Error al obtener el usuario:', (error as Error).message);

        const isError = (error: unknown): error is Error => {
            return error instanceof Error;
        };

        if (isError(error)) {
            console.error(error.message);
        } else {
            console.error('Unknown error', error);
        }
    }
};
getUser();

type Result<T> = 
    | { status: 'success'; data: T } 
    | { status: 'error'; error: Error };

export const fetchUser4 = async (): Promise<Result<User>> => {
    try {
        const res = await fetch('/api/user');
        if (!res.ok) throw new Error('Error al obtener el usuario');
        return { status: 'success', data: await res.json() };
    } catch (error) {
        // Definir errores específicos, class HttError extends Error {...}
        // Garantizar objetos de tipo Error
        return {
            status: 'error', error: new Error('Error de red al obtener el usuario', {
                cause: error,
            }),
        };
    }
};


const getUser2 = async () => {
    const result = await fetchUser4();
    if (result.status === 'success') {
        console.log('Usuario obtenido:', result.data);
    } else {
        console.error('Error al obtener el usuario:', result.error.message);
    }
};
getUser2();
