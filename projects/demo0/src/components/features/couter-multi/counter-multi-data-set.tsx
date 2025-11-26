import { Card } from '@components/core/card/card';
import React from 'react';

type Props = {
    readonly initialCount?: number;
};

export const CounterMultiDS: React.FC<Props> = ({ initialCount = 0 }) => {
    const [count, setCount] = React.useState(initialCount);

    const handleChange: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        
        console.log((event.target as HTMLButtonElement).dataset);
        console.log(event.currentTarget.dataset)

        const value = Number(event.currentTarget.getAttribute('data-value'));
        if (value === 0) {
            setCount(0);
        } else {
            setCount((count) => count + value);
        }
    };

    return (
        <Card title="Contador con botones">
            <button
                onClick={handleChange}
                data-value="-1"
                title="Decrement counter"
            >
                ➖
            </button>
            <span className="count-value">
                count is
                <output>{count}</output>
            </span>
            <button
                onClick={handleChange}
                data-value="1"
                title="Increment counter"
            >
                ➕
            </button>
            <button onClick={handleChange} data-value="0" title="Reset counter">
                🌐
            </button>
        </Card>
    );
};
