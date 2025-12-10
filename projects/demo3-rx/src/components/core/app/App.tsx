import './App.css';
import { Layout } from '../layout/layout';
import { ListNames } from '@components/features/components/list-names/list-names';
import { of } from 'rxjs';
import { Counter } from '@components/features/components/counter/counter';
import { UserLogged } from '@components/features/components/user-logged/user-logged';
import { Fibonacci } from '@components/features/fibonacci/fibonacci/fibonacci';
import { GetData } from '@components/features/get-data/get-data';
import { GetDataMerge } from '@components/features/get-data/get-data-merge';

const NAMES = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank'];
const NAMES$ = of(NAMES);

export const App: React.FC = () => {
    const title = 'Vite + TS + React';

    return (
        <Layout appTitle={title}>
            <main>
                <ListNames names$={NAMES$} />
                <Counter />
                <UserLogged />
                <Fibonacci />
                <GetData />
                <GetDataMerge />
            </main>
        </Layout>
    );
};
