import './App.css';
import { Layout } from '../layout/layout';
import { Page } from '../../../features/page/page';

export const App: React.FC = () => {
    const title = 'Vite + TS + React';

    return (
        <Layout appTitle={title}>
            <main>
                <Page />
            </main>
        </Layout>
    );
};
