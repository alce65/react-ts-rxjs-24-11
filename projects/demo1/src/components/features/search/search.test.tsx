import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Search } from './search';
import type { Mock } from 'vitest';
import { getData } from '../../../services/data.service';


vi.mock('../../../services/data.service');
const mockData = [{ id: 1, title: 'sample data' }];

describe('Search component', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    test('should render search results', async () => {
        (getData as Mock).mockResolvedValue(mockData);
        render(<Search />);
        const input = screen.getByRole('textbox');
        await userEvent.type(input, 'sample');
        expect(await screen.findByText(/sample data/i)).toBeInTheDocument();
    });

    test('should search for data after 300ms of inactivity', async () => {
        const baseURL = 'https://test.sample.com?q=';
        (getData as Mock).mockResolvedValue(mockData);
        render(<Search />);
        const input = screen.getByRole('textbox');
        await userEvent.type(input, 't');
        await userEvent.type(input, 'e');
        await userEvent.type(input, 's');
        await userEvent.type(input, 't');
        await waitFor(() => {
            expect(getData).toHaveBeenNthCalledWith(1, `${baseURL}t`);
            expect(getData).toHaveBeenNthCalledWith(2, `${baseURL}te`);
            expect(getData).toHaveBeenNthCalledWith(3, `${baseURL}tes`);
            expect(getData).toHaveBeenCalledWith(`${baseURL}test`);
        });
    });

    // test('should catch and log error if getData fails', async () => {
    //     vi.spyOn(console, 'error').mockImplementation(() => undefined);
    //     (getData as Mock).mockRejectedValueOnce(new Error('Fetch error'));
    //     render(<Search />);
    //     const input = screen.getByRole('textbox');

    //     await userEvent.type(input, 'error');
    //     await waitFor(() => {
    //         expect(getData).toHaveBeenCalledWith('error');
    //         expect(console.error).toHaveBeenCalled();
    //     });
    // });
});
