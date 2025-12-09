import { Observable } from 'rxjs';

export type User = {
    id: number;
    name: string;
    email: string;
    username: string;
};

export const fetchUsersMock = ({
    isError = false,
    delay = 1_000,
}): Observable<User[]> => {
    const users: User[] = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            username: 'johndoe',
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            username: 'janesmith',
        },
        {
            id: 3,
            name: 'Alice Johnson',
            email: 'alice.johnson@example.com',
            username: 'alicejohnson',
        },
    ];

    return new Observable<User[]>((subscriber) => {
        setTimeout(() => {
            if (isError) {
                subscriber.error(new Error('Failed to fetch users'));
            } else {
                subscriber.next(users);
                subscriber.complete();
            }
        }, delay);
    });
};
