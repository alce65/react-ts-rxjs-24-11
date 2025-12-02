import './App.css';
import { Layout } from '../layout/layout';

export const App: React.FC = () => {
    const title = 'Vite + TS + React';

    return (
        <Layout appTitle={title}>
            <main>
                <p>Dem RxJS</p>
            </main>
        </Layout>
    );
};
