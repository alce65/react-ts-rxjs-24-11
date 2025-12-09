
export function* fibonacci(): Generator<number, void, number> {
    let values:  [number, number] = [0, 1];

    while (true) {
        const [current, next]: [number, number] = values;
        yield current;
        values = [next, current + next];
    }
}




