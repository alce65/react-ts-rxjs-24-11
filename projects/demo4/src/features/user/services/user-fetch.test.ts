import { of } from 'rxjs';
import { fetchDataV2 } from '../../../core/services/data.fetch.v2';
import { getUserById, getAllUsers, searchUsers } from './user-fetch';

vi.mock('../../../core/services/data.fetch.v2', () => ({
    fetchDataV2: vi.fn().mockReturnValue(() => of([])),
}));

describe('user-data-fetch service', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });
    test('should fetch users by id', () => {
        getUserById(1);
        expect(fetchDataV2).toHaveBeenCalledWith(expect.stringContaining('/1'));
    });

    test('should fetch users data', () => {
        getAllUsers();
        expect(fetchDataV2).toHaveBeenCalledWith(
            expect.not.stringContaining('/1')
        );
    });

    test('should fetch users by query', () => {
        searchUsers('query');
        expect(fetchDataV2).toHaveBeenCalledWith(
            expect.stringContaining('query')
        );
    });
});
