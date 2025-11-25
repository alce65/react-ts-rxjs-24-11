interface Fish {
    id: string
    breath: () => string;
    swim: () => string;
}

interface Bird {
    id: number
    breath: () => string;
    fly: () => string;
}

type Pet = Fish | Bird;

// export const invoqueAction = (pet: Pet): string => {
//     let result = '';
//     result = typeof pet.id === 'string' ? pet.swim() : pet.fly();
//     return result;
// };

export const invoqueAction2 = (pet: Pet): string => {
    const guard = (pet: Pet): pet is Fish => {
        return typeof pet.id === 'string';
    };

    let result = '';
    result = guard(pet) ? pet.swim() : pet.fly();

    return result;
};
