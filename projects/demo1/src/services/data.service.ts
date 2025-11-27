export const URL = 'https://jsonplaceholder.typicode.com/users';

export const getData = async <T>(url = URL): Promise<T[]> => {
    // Simulate fetching data from an API
    return fetch(url)
        .then((response: Response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data: T[]) => {
            return data.map((item) => {
                // Transform each item if needed
                return item;
            });
        })
        .catch((error: unknown) => {
            if (error instanceof Error) {
                console.error('Error fetching data:', error.message);
                throw error;
            } else {
                console.error('Error fetching data:', error);
                throw new Error('An unknown error occurred');
            }
        });
};
