import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CounterMultiDS } from './counter-multi-data-set';

describe('CounterMultiDS component', () => {
    
    let outputElement:  HTMLElement;
    beforeEach(() => {
        render(<CounterMultiDS initialCount={0} />);
        outputElement = screen.getByRole('status');
    });

    test('should start with 0', () => {
        expect(outputElement).toHaveTextContent('0');
    });

    test('should increase after click the button ➕', async () => {
        const buttonElement = screen.getByRole('button', { name: /➕/i });
        await userEvent.click(buttonElement);
        expect(outputElement).toHaveTextContent('1');
    });

    test('should decrease after click the button ➖', async () => {
        const buttonElement = screen.getByRole('button', { name: /➖/i });
        await userEvent.click(buttonElement);
        expect(outputElement).toHaveTextContent('-1');
    });
});
