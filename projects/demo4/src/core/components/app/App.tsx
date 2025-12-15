import './App.css';
import { Layout } from '../layout/layout';
import { GetUser } from '../../../features/user/components/get-users/get-users';
import { Form } from '../../../features/form/form';
import { SearchCountry } from '../../../features/countries/components/search-countries/search-country';
import { Counter } from '../../../features/subjects/counter/counter';

export const App: React.FC = () => {
    const title = 'Vite + TS + React';

    return (
        <Layout appTitle={title}>
            <main>
                <GetUser />
                <Form />
                <SearchCountry />
                <Counter />
            </main>
        </Layout>
    );
};
