import { useState } from "react";

export const useToggle = (initialValue= false): [boolean, () => void] => {
    const [value, setValue] = useState<boolean>(initialValue);
    const toggle = (): void => setValue(!value);
    return [value, toggle];
}

