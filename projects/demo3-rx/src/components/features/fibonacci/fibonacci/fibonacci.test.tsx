import { render, screen, waitFor } from '@testing-library/react';
import { Fibonacci } from './fibonacci';
import userEvent from '@testing-library/user-event';

describe('Fibonacci', () => {
    test('should display fibonacci sequence of n number', async () => {
        render(<Fibonacci />);
        const checkOptions = screen.getByRole('radio', { name: /items/i });
        await userEvent.click(checkOptions);
        const inputNumber = screen.getByRole('spinbutton');
        await userEvent.type(inputNumber, '10');

        await waitFor(() => {
            const output = screen.getByRole('status');
            expect(output).toHaveTextContent(/^0, 1, 1, 2, 3, 5/);
        });
    });

    test('should calculate fibonacci sequence with a limit', async () => {
        render(<Fibonacci />);
        const checkOptions = screen.getByRole('radio', { name: /limit/i });
        await userEvent.click(checkOptions);
        const inputNumber = screen.getByRole('spinbutton');
        await userEvent.type(inputNumber, '10');

        await waitFor(() => {
            const output = screen.getByRole('status');
            expect(output).toHaveTextContent(/^0, 1, 1, 2, 3, 5/);
        });
    });
});
