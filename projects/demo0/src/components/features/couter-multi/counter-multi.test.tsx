import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CounterMulti } from './counter-multi';

describe('CounterWithEvent1 component', () => {
    test('should start with 0', () => {
        render(<CounterMulti initialCount={0} />);
        const textElement = screen.getByText(/count is 0/i);
        expect(textElement).toBeInTheDocument();
    });

    test('should increase after click the button ➕', async () => {
        render(<CounterMulti initialCount={0} />);
        const buttonElement = screen.getByRole('button', { name: /➕/i });
        await userEvent.click(buttonElement);
        const textElement = screen.getByText(/count is 1/i);
        expect(textElement).toBeInTheDocument();
    });

    test('should decrease after click the button ➖', async () => {
        render(<CounterMulti initialCount={0} />);
        const buttonElement = screen.getByRole('button', { name: /➖/i });
        await userEvent.click(buttonElement);
        const textElement = screen.getByText(/count is -1/i);
        expect(textElement).toBeInTheDocument();
    });
});
