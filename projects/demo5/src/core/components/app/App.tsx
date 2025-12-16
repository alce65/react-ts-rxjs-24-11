import './App.css';
import { Layout } from '../layout/layout';
import { Page } from '../../../features/page/page';
import { AppContextProvider } from '../../context/provider';
import type { AppContextType } from '../../context/context';
import { NotesStore } from '../../../features/notes/services/notes-store';
import { NotesApiRepo } from '../../../features/notes/services/notes-api-repo';
import { NotesPage } from '../../../features/notes/notes-page';

export const App: React.FC = () => {
    const title = 'Vite + TS + React';

    const apiUrl = 'http://localhost:3000/notes';
    const repo = new NotesApiRepo(apiUrl);
    const context: AppContextType = {
        appTitle: title,
        notesStore: new NotesStore(repo),
    };

    return (
        <AppContextProvider context={context}>
            <Layout appTitle={title}>
                <main>
                    <Page />
                    <NotesPage />
                </main>
            </Layout>
        </AppContextProvider>
    );
};
