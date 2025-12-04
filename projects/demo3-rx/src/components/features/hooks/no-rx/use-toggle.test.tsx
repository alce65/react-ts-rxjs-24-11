import { act, renderHook } from '@testing-library/react';
import { useToggle } from './use-toggle';

describe('useToggle', () => {
    it('should initialize with the default value', () => {
        const { result } = renderHook(() => useToggle());
        const [value, toggle] = result.current;
        expect(value).toBe(false);
        act(() => {
            toggle();
        });
        const [newValue] = result.current;
        expect(newValue).toBe(true);
    });
});
