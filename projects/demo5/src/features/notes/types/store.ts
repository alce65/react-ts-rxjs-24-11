import { Observable } from "rxjs";
import type { Note } from "./note";


export interface NotesErrors {
  load?: string;
  add?: string;
  update?: string;
  delete?: string;
}

export interface NotesStateType {
  data$: Observable<Note[]>;
  errors$: Observable<NotesErrors>;
};
