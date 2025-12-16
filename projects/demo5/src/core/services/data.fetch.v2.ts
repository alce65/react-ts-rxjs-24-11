import { catchError, Observable, retry, switchMap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { HttpError } from '../types/http-error';

export type User = {
    id: number;
    name: string;
    email: string;
    username: string;
};

const apiURL = 'http://api.example,com/users';

export const fetchDataV2 =  <T>(url = apiURL) => (): Observable<T> => {
    const data$ = fromFetch(url).pipe(
        switchMap<Response, Promise<T>>((response: Response) => {
            if (!response.ok) {
                // Datos No ok (40x - 50x)
                throw new HttpError(
                    response.status,
                    response.statusText,
                    'Error en la petición'
                );
            }
            // Datos ok
            return response.json() as Promise<T>;
        }),
        retry(3),
        catchError((error: Error) => {
            if (error instanceof HttpError) {
                throw error;
            }
            throw new HttpError(1, '', 'Error en la conexión', error);
        })
    );
    return data$;
};
