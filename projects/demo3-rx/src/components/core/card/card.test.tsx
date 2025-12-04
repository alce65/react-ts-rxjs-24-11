import { Card } from './card';
import { render, screen} from "@testing-library/react";

const TEXT = 'Card text';

describe('Card component', () => {
    test('should render correctly', () => {
        // Test implementation
        render(<Card>{TEXT}</Card>);
        const element = screen.getByRole('region');
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent(TEXT);
        // Alternativa
        // const el = screen.getByText(/card text/i);
        // expect(el).toBeInTheDocument();
    });

    test('should render correctly with title', () => {
        const title = 'Card Title';
        // Test implementation
        render(<Card title={title}>{TEXT}</Card>);
        const element = screen.getByRole('region');
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent(TEXT);
        const titleElement = screen.getByText(title);
        expect(titleElement).toBeInTheDocument();
    });
});

