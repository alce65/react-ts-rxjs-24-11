import {of} from 'rxjs';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { searchCountries } from '../../services/countries-fetch';
import { SearchCountry } from '../search-countries/search-country';

import type { Mock } from 'vitest';

vi.mock('../../services/countries-fetch');
const mockedSearchCountry = searchCountries as Mock;

const mockCountries = [
    {
        name: { common: 'Spain', official: 'Kingdom of Spain' },
        capital: ['Madrid'],
    },
];

describe('ReadInput Component', () => {
    mockedSearchCountry.mockReturnValue(of(mockCountries));
    test('should render input and display typed value', async () => {
        render(<SearchCountry />);
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeInTheDocument();
        // Valor inicial
        expect(inputElement).toHaveValue('');
        // Simular escritura
        await userEvent.type(inputElement, 'spain');
        expect(inputElement).toHaveValue('spain');
        // Verificar que el valor se muestra en el output
        // Transcurrido el tiempo del debounce
        await waitFor(
            () => {
                expect(mockedSearchCountry).toHaveBeenCalled();
                expect(screen.getByText(/Spain - Capital: Madrid/i)).toBeInTheDocument();
                expect(screen.getByText(/Kingdom of Spain/i)).toBeInTheDocument();
            },
            { timeout: 540 }
        );
    });
});
