import { BehaviorSubject } from "rxjs";
import type { Note, NoteDTO } from "../types/note";
import type { NotesErrors, NotesStateType } from "../types/store";
import type { NotesApiRepo } from "./notes-api-repo";

const initialNotes: Note[] = [];
const initialErrors: NotesErrors = {};


export class NotesStore {
  private notes$ = new BehaviorSubject(initialNotes);
  private errors$ = new BehaviorSubject(initialErrors);
  
  private repo: NotesApiRepo 
  
  constructor(repo: NotesApiRepo) {
    this.repo = repo
  };

  getState(): NotesStateType {
    return {
      data$: this.notes$.asObservable(),
      errors$: this.errors$.asObservable(),
    };
  }

  setNoErrors(): void {
    this.errors$.next({});
  }

  load(): void {
    this.repo.getAll().subscribe({
      next: (notesData) => {
        console.log('Store GET ALL Subscribe');
        this.notes$.next(notesData);
        this.errors$.next({});
      },
      error: (error: Error) => {
        console.log('Store error', error.message);
        this.errors$.next({
          load: error.message,
        });
      },
    });
  }

  add(newNoteDTO: NoteDTO): void {
    // const newNoteDTO: NoteDTO = {
    //   ...data,
    //   isImportant: false,
    // };

    this.repo.create(newNoteDTO).subscribe({
      next: (newNote) => {
        console.log('Store NEW', newNote);
        this.notes$.next([...this.notes$.getValue(), newNote]);
      },
      error: (error: Error) => {
        console.log('List error', error.message);
        this.errors$.next({
          add: error.message,
        });
      },
    });
  }

  update(updatedNote: Note): void {
    const { id, ...data } = updatedNote;
    this.repo.update(id, data).subscribe({
      next: (updateNote) => {
        console.log('Store Update', updateNote);
        const data = this.notes$.getValue().map((t) => (t.id === updateNote.id ? updateNote : t));
        this.notes$.next(data);
      },
      error: (error: Error) => {
        console.log('Store error', error.message);
        this.errors$.next({
          update: error.message,
        });
      },
    });
  }

  delete(id: Note['id']): void {
    this.repo.delete(id).subscribe({
      next: () => {
        console.log('Store Delete', id);
        const data = this.notes$.getValue().filter((t) => t.id !== id);
        this.notes$.next(data);
      },
      error: (error: Error) => {
        console.log('Store error', error.message);
        this.errors$.next({
          delete: error.message,
        });
      },
    });
  }
}
