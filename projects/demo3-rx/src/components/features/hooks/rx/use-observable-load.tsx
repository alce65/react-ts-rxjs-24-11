import { fetchUsersMock } from "@components/features/service/user.fetch";
import { useEffect, useState } from "react";
import { Observable, tap } from "rxjs";

type UseUserLoggedResult<T> = {
    data: T | null;
    loading: boolean;
    error: Error | null;
};

export const useObservableLoad = <T,>(): UseUserLoggedResult<T> => {
     const [data, setData] = useState<T | null>(null);
        const [loading, setLoading] = useState<boolean>(true);
        const [error, setError] = useState<Error | null>(null);
    
        useEffect(() => {
            // Simulate fetching logged-in data data
           (fetchUsersMock({ isError: true }) as Observable<T>) 
                .pipe(tap(() => setLoading(true)))
                .subscribe({
                    next: (data) => {
                        setLoading(false);
                        setError(null);
                        setData(data); // Assume the first data is the logged-in data
                    },
                    error: (error) => {
                        setLoading(false);
                        setData(null);
                        setError(error);
                    },
                });
        }, []);

        return { data, loading, error };
    
}
