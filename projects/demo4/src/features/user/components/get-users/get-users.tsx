import { useRef } from 'react';
import { Card } from '../../../../core/components/card/card';
import type { User } from '../../types/user';
import { exhaustMap, fromEvent, Observable } from 'rxjs';
import { getUserById } from '../../services/user-fetch';
import { useObservableV3 } from '../../../../core/hooks/use-observable-v3';

export const GetUser: React.FC = () => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const factory = (): Observable<User> => {
        const button = buttonRef.current as HTMLButtonElement;
        return fromEvent(button, 'click').pipe(
            exhaustMap(() => {
                const id = Math.trunc(Math.random() * 10);
                return getUserById(id);
            })
        );
    };

    const [user, error] = useObservableV3(factory, null);

    return (
        <Card title="Fetch with Hooks (RxJS and React)">
            <button ref={buttonRef}>Get User ID {user?.id}</button>
            {user && (
                <p>
                    Received: {user.name} - {user.email}
                </p>
            )}
            {error && <p style={{ color: 'red' }}>{error.message}</p>}
        </Card>
    );
};
