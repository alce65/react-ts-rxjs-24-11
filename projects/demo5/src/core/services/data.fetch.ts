import { catchError, map, Observable, of, switchMap, throwError } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

export type User = {
    id: number;
    name: string;
    email: string;
    username: string;
};

const apiURL = 'http://api.example,com/users';

export const fetchData = <T>(url = apiURL): Observable<T> => {
    const data$ = fromFetch(url).pipe(
        switchMap<Response, Promise<T>>((response: Response) => {
            if (!response.ok) {
                // Datos No ok (40x - 50x)
                throw new Error('Error en la petición. Status ' + response.status);

            }
            // Datos ok
            return response.json() as Promise<T>;
        })
    );
    return data$;
};

type FetchData<T> = {
    success: true;
    data: T;
};

type FetchError = {
    success: false;
    message: string;
};

type FetchDataWithErrorType<T> = FetchData<T> | FetchError;

export const fetchDataWithError = <T>(
    url = apiURL
): Observable<FetchDataWithErrorType<T>> => {
    const data$ = fromFetch(url).pipe(
        switchMap((response: Response) => {
            if (response.ok) {
                // Datos ok
                return response.json() as Promise<T>;
            } else {
                // Datos No ok (40x - 50x)
                throw new Error('Error en la petición');
            }
        }),
        map((data) => ({ success: true as const, data })),
        catchError((error: Error) => {
            console.error(error);
            return of({
                success: false as const,
                message: error.message,
            });

           // return throwError(() => new Error(error.message))
        })
    );
    return data$;
};


export const fetchDataWithError2 = <T>(
    url = apiURL
): Observable<T> => {
    const data$ = fromFetch(url).pipe(
        switchMap((response: Response) => {
            if (response.ok) {
                // Datos ok
                return response.json() as Promise<T>;
            } else {
                // Datos No ok (40x - 50x)
                throw new Error('Error en la petición');
            }
        }),
        catchError((error: Error) => {
            console.error(error);
            return throwError(() => new Error(error.message))
        })
    );
    return data$;
};
