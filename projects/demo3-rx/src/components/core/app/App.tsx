import './App.css';
import { Layout } from '../layout/layout';
import { ListNames } from '@components/features/components/list-names/list-names';
import { of } from 'rxjs';
import { Counter } from '@components/features/components/counter/counter';

const NAMES = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank'];
const NAMES$ = of(NAMES);

export const App: React.FC = () => {
    const title = 'Vite + TS + React';

    return (
        <Layout appTitle={title}>
            <main>
                <ListNames names$={NAMES$} />
                <Counter />
            </main>
        </Layout>
    );
};
