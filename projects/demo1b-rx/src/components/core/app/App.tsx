import './App.css';
import { Layout } from '../layout/layout';
import { ListNames } from '@components/features/list-names/list-names';
import { ListNamesIntra } from '@components/features/list-names/list-names-intra';
import { Counter } from '@components/features/counter/counter';
import { IntervalCounter1 } from '@components/features/interval-counter/interval-counter';
import { IntervalCounter2 } from '@components/features/interval-counter2/interval-counter2';

export const App: React.FC = () => {
    const title = 'Vite + TS + React';

    return (
        <Layout appTitle={title}>
            <main>
                <ListNames />
                <ListNamesIntra />
                <Counter />
                <IntervalCounter1 />
                <IntervalCounter2 />
            </main>
        </Layout>
    );
};
