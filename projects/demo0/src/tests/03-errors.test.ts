const throwError = (): void => {
    throw new Error('Error esperado');
};

function makePossibleError(n: number): void {
    if (n > 1) {
        throw new Error('Error por n mayor a 1');
    }
}
describe('Matchers de errores', () => {
    test('toThrow', () => {

        expect(throwError).toThrow('Error esperado');
    });
    test('toThrow', () => {
        expect(() => makePossibleError(2)).toThrow('Error por n mayor a 1');
    });
});
