export const fetchMock = (): Promise<string> => {
    return new Promise((resolve) => {
        // Simulamos una petición a un API
        setTimeout(() => {
            console.log('Fetching data...');
            resolve('Data from API');
        }, 1_000);
    });
};
