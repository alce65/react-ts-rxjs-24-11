import { Card } from '@components/core/card/card';
import { useEffect, useRef, useState } from 'react';
import { of } from 'rxjs';
import './list-names.css';

const NAMES_EXTERNAL = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank'];

type Props = {
    inputNames?: string[];
};

export const ListNamesSemiIntra: React.FC<Props> = ({
    inputNames = NAMES_EXTERNAL,
}) => {
    const names$ = of(inputNames);
    const [names, setNames] = useState<string[]>([]);
    const countRender = useRef(0);

    useEffect(() => {
        countRender.current++;
        // const subscription = names$.subscribe({
        //     next: (data) => setNames(data)
        // });

        // En el prime render,
        //  - se suscribe al observable names$
        //  - cuando emite el valor (la lista de nombres),
        // se actualiza el estado names

        // En el segundo render,
        // se vuelve a suscribir al observable names$
        //  - cuando emite el valor (la lista de nombres),
        // NO se actualiza el estado names
        // porque es igual que antes (===)
        // (React optimiza y no vuelve a renderizar el componente)

        const subscription = names$.subscribe(setNames);

        console.log('Ejecutando useEffect', countRender.current);
        return (): void => {
            subscription.unsubscribe();
        };
    }, [names$]);

    return (
        <Card title="Lista de nombres">
            <div>
                <ul>
                    {names.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul>
            </div>
        </Card>
    );
};

export const ListNamesIntra: React.FC<Props> = ({
    inputNames = [...NAMES_EXTERNAL],
}) => {
    console.log('Renderizando ListNames');

    // const names$ = of(inputNames);
    // Memoización del observable para que
    // no se cree uno nuevo en cada render
    // const names$ = useMemo(() => of(inputNames), [inputNames]);
    const names$ = useRef(of(inputNames)).current;
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
                <ul>
                    {names.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul>
            </div>
        </Card>
    );
};
