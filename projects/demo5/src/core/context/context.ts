
import { createContext } from "react";
import type { NotesStore } from "../../features/notes/services/notes-store";


export type AppContextType = {
    appTitle: string;
    notesStore: NotesStore
}


export const AppContext = createContext<AppContextType>({} as AppContextType);
