import { Card } from '@components/core/card/card';
import { useEffect, useState } from 'react';
import { Observable, of } from 'rxjs';
import { List } from '@components/core/list/list';

const NAMES = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank'];
const NAMES$ = of(NAMES);

type Props = {
    names$?: Observable<string[]>;
};

export const ListNames: React.FC<Props> = ({ names$ = NAMES$ }) => {
    const [names, setNames] = useState<string[]>([]);

    useEffect(() => {
        // const subscription = names$.subscribe({
        //     next: (data) => setNames(data)
        // });

        const subscription = names$.subscribe(setNames);

        console.log('Ejecutando useEffect');

        return (): void => {
            subscription.unsubscribe();
        };
    }, [names$]);

    return (
        <Card title="Lista de nombres">
            <div>
                {/* <ul>
                    {names.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul> */}
                <List items={names} />
            </div>
        </Card>
    );
};
