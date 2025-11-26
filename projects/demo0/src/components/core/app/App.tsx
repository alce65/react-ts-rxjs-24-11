import './App.css';
import { Layout } from '../layout/layout';
import { Counter } from '@components/features/counter/counter';
import { LoginForm } from '@components/features/users/components/login-form/login-form';
import { RegisterForm } from '@components/features/users/components/register-form/registeer.form';

export const App: React.FC = () => {
    const title = 'Vite + TS + React';

    return (
        <Layout appTitle={title}>
            <main>
                <Counter />
                <LoginForm />
                <RegisterForm />
            </main>
        </Layout>
    );
};
