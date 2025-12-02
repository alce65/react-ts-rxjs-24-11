import './App.css';
import { Layout } from '../layout/layout';
import { ListNames } from '@components/features/list-names/list-names';
import { ListNamesIntra } from '@components/features/list-names/list-names-intra';
import { Counter } from '@components/features/counter/counter';

export const App: React.FC = () => {
    const title = 'Vite + TS + React';

    return (
        <Layout appTitle={title}>
            <main>
                <ListNames />
                <ListNamesIntra />
                <Counter />
            </main>
        </Layout>
    );
};
