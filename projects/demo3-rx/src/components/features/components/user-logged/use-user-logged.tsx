import { fetchUsersMock, type User } from "@components/features/service/user.fetch";
import { useEffect, useState } from "react";
import { tap } from "rxjs";

type UseUserLoggedResult = {
    user: User | null;
    loading: boolean;
    error: Error | null;
};

export const useUserLogged = (): UseUserLoggedResult => {
     const [user, setUser] = useState<User | null>(null);
        const [loading, setLoading] = useState<boolean>(true);
        const [error, setError] = useState<Error | null>(null);
    
        useEffect(() => {
            // Simulate fetching logged-in user data
            fetchUsersMock({ isError: true })
                .pipe(tap(() => setLoading(true)))
                .subscribe({
                    next: (userData) => {
                        setLoading(false);
                        setError(null);
                        setUser(userData[0]); // Assume the first user is the logged-in user
                    },
                    error: (error) => {
                        setLoading(false);
                        setUser(null);
                        setError(error);
                    },
                });
        }, []);

        return { user, loading, error };
    
}
