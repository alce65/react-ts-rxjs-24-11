import './App.css';
import { Layout } from '../layout/layout';
import { Search } from '@components/features/search/search';
import { SearchDebounce } from '@components/features/search-db/search-db';
import { SearchControlled } from '@components/features/search-db-controlled/search-db-c';

export const App: React.FC = () => {
    const title = 'Vite + TS + React';

    return (
        <Layout appTitle={title}>
            <main>
                <Search />
                <SearchDebounce />
                <SearchControlled />
            </main>
        </Layout>
    );
};
