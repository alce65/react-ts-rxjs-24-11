import { UserConditional } from "./user-conditional";
import { UserUnion } from "./user-union";

const user1 = {
    authenticated: true as const,
    level: 'admin' as const,
    profileData: {
        name: 'Pepe',
        email: 'pepe@example.com',
    }   as const,
};

const user2 = {
    authenticated: false as const,
    level: 'guest' as const,
};

export const User: React.FC = () => {
    return (
        <div>
            <h2>User</h2>
            <UserConditional {...user2} />
            <UserUnion {...user1} />
        </div>
    );
};
