import { Card } from '@components/core/card/card';
import { Observable } from 'rxjs';
import { List } from '@components/core/list/list';
import { useObservableV2 } from '../../hooks/rx/use-observable-v2';

type Props = {
    names$: Observable<string[]>;
};

export const ListNames: React.FC<Props> = ({ names$ }) => {
    const [names, error] = useObservableV2<string[]>(names$, []);

    if (!names || error) {
        return (
            <Card>
                <p>Error Cargando...</p>
                <p>{error?.message}</p>
            </Card>
        );
    }

    return (
        <Card title="Lista de nombres">
            {names.length === 0 ? (
                <div>No hay nombres disponibles.</div>
            ) : (
                <div>
                    {/* <ul>
                    {names.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul> */}
                    <List items={names} />
                </div>
            )}
        </Card>
    );
};
