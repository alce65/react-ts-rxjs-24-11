import { catchError, switchMap, throwError, type Observable } from 'rxjs';
import type { ID, Note, NoteDTO } from '../types/note';
import type { Repository } from '../types/repo';
import { fromFetch } from 'rxjs/fetch';
import { HttpError } from '../types/http-error';

export class NotesApiRepo implements Repository<Note, NoteDTO> {
    private apiUrl: string;
    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    getAll(): Observable<Note[]> {
        const fetch$ = fromFetch(this.apiUrl).pipe(
            switchMap<Response, Promise<Note[]> | Observable<never>>(
                (response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        return throwError(
                            () =>
                                new HttpError(
                                    response.status,
                                    response.statusText,
                                    'Fetch error code: ' + response.status
                                )
                        );
                    }
                }
            ),
            catchError((err: Error) => {
                if (!(err instanceof HttpError)) {
                    err = new HttpError(0, '', 'Unknown fetch error', err);
                }
                return throwError(() => err);
            })
        );

        return fetch$;
    }
    getById(id: ID): Observable<Note> {
        const fetch$ = fromFetch(`${this.apiUrl}/${id}`).pipe(
            switchMap<Response, Promise<Note> | Observable<never>>(
                (response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        return throwError(
                            () =>
                                new HttpError(
                                    response.status,
                                    response.statusText,
                                    'Fetch error code: ' + response.status
                                )
                        );
                    }
                }
            ),
            catchError((err: Error) => {
                if (!(err instanceof HttpError)) {
                    err = new HttpError(0, '', 'Unknown fetch error', err);
                }
                return throwError(() => err);
            })
        );

        return fetch$;
    }

    create(note: NoteDTO): Observable<Note> {
        const fetch$ = fromFetch(this.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        }).pipe(
            switchMap<Response, Promise<Note> | Observable<never>>(
                (response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        return throwError(
                            () =>
                                new HttpError(
                                    response.status,
                                    response.statusText,
                                    'Fetch error code: ' + response.status
                                )
                        );
                    }
                }
            ),
            catchError((err: Error) => {
                if (!(err instanceof HttpError)) {
                    err = new HttpError(0, '', 'Unknown fetch error', err);
                }
                return throwError(() => err);
            })
        );

        return fetch$;
    }
    
    update(id: ID, note: Partial<NoteDTO>): Observable<Note> {
        const fetch$ = fromFetch(`${this.apiUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        }).pipe(
            switchMap<Response, Promise<Note> | Observable<never>>(
                (response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        return throwError(
                            () =>
                                new HttpError(
                                    response.status,
                                    response.statusText,
                                    'Fetch error code: ' + response.status
                                )
                        );
                    }
                }
            ),
            catchError((err: Error) => {
                if (!(err instanceof HttpError)) {
                    err = new HttpError(0, '', 'Unknown fetch error', err);
                }
                return throwError(() => err);
            })
        );

        return fetch$;
    }

      delete(id: ID): Observable<void> {
        const fetch$ = fromFetch(`${this.apiUrl}/${id}`, {
            method: 'DELETE',
        }).pipe(
            switchMap<Response, Promise<void> | Observable<never>>(
                (response) => {
                    if (response.ok) {
                        return Promise.resolve();
                    } else {
                        return throwError(
                            () =>
                                new HttpError(
                                    response.status,
                                    response.statusText,
                                    'Fetch error code: ' + response.status
                                )
                        );
                    }
                }
            ),
            catchError((err: Error) => {
                if (!(err instanceof HttpError)) {
                    err = new HttpError(0, '', 'Unknown fetch error', err);
                }
                return throwError(() => err);
            })
        );
        return fetch$;
    }
}

