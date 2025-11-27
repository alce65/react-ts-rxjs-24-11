import { getData } from './data.service';

type Item = {
    id: number;
    name: string;
};

const URL = 'https://test.sample.com';

describe('getData', () => {
    const mockData: Item[] = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
    ];

    // Espìar fetch
    // vi.spyOn(globalThis, 'fetch');

    // Espìar fetch y mockear su implementación
    // vi.spyOn(globalThis, 'fetch').mockResolvedValue({
    //     ok: true,
    //     json: async () => mockData,
    // } as Response);

    // Crear un mock para fetch
    // globalThis.fetch = vi.fn().mockImplementation(() =>
    //     Promise.resolve({
    //         ok: true,
    //         json: () => Promise.resolve(mockData),
    //     } as Response)
    // );

    // globalThis.fetch = vi
    //     .fn()
    //     .mockResolvedValue({
    //         ok: true,
    //         json: async () => mockData,
    //     } as Response);

    it('should fetch with GET method and return data successfully', async () => {
        vi.spyOn(globalThis, 'fetch').mockResolvedValue({
            ok: true,
            json: async () => mockData,
        } as Response);
        const result = await getData<Item>(URL);
        expect(result).toEqual(mockData);
        expect(globalThis.fetch).toHaveBeenCalledWith(URL);
    });

    it('should handle fetch failure', async () => {
        vi.spyOn(globalThis, 'fetch').mockResolvedValue({
            ok: false,
        } as Response);
        await expect(getData<Item>(URL)).rejects.toThrow(
            'Network response was not ok'
        );
        expect(globalThis.fetch).toHaveBeenCalledWith(URL);
    });

    it('should handle fetch throwing an error', async () => {
        vi.spyOn(globalThis, 'fetch').mockRejectedValue(
            new Error('Fetch failed')
        );
        await expect(getData<Item>(URL)).rejects.toThrow('Fetch failed');
        expect(globalThis.fetch).toHaveBeenCalledWith(URL);
    });

    it('should handle fetch throwing an error message', async () => {
        vi.spyOn(globalThis, 'fetch').mockRejectedValue('Fetch failed');
        await expect(getData<Item>(URL)).rejects.toThrow(
            'An unknown error occurred'
        );
        expect(globalThis.fetch).toHaveBeenCalledWith(URL);
    });
});
