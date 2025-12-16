import React, { useContext, useEffect } from 'react';
import { NoteAdd } from './note-add/note-add';
import { Card } from '../../../core/components/card/card';
import { List } from '../../../core/components/list/list';
import { AppContext } from '../../../core/context/context';
import { useObservableV3 } from '../../../core/hooks/use-observable-v3';

export const NotesList: React.FC = () => {
    const { notesStore } = useContext(AppContext);

    const { data$: notes$ } = notesStore.getState();

    const [notes] = useObservableV3(notes$);

    useEffect(() => {
        notesStore.load();
    }, [notesStore]);

    if (!notes) return <div>Loading...</div>;
    return (
        <Card title="Notes">
            <details>
                <summary>Add Note</summary>
                <NoteAdd />
            </details>
            <List
                items={notes}
                renderItem={(note) => (
                    <div key={note.id}>
                        {note.title} - {note.author}
                    </div>
                )}
            />
        </Card>
    );
};
