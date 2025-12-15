import { of } from 'rxjs';
import { act, render, screen } from '@testing-library/react';

import type { Mock } from 'vitest';
import { GetUser } from './get-users';
import { getUserById } from '../../services/user-fetch'

vi.mock('../../services/user-fetch');
const mockedGetUserById = getUserById as Mock;

const mockData = {
    id: 1,
    name: 'test title',
    email: 'test email'
};

describe('Todo Fetch with Hook', () => {
    test('should call getData with correct URL', () => {
        mockedGetUserById.mockReturnValue(of(mockData));
        render(<GetUser />);
        const eButton = screen.getByRole('button', { name: 'Get User ID' });
        act(() => {
            eButton.click();
        });
        expect(getUserById).toHaveBeenCalledWith(
            expect.anything()
        );
        expect(screen.getByText(/test title/i)).toBeInTheDocument();
    });
});
