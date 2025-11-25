import { Card } from '@components/core/card/card';
import React from 'react';

type Props = {
    readonly initialCount?: number;
};

export const CounterMulti: React.FC<Props> = ({ initialCount = 0 }) => {
    const [count, setCount] = React.useState(initialCount);

    const handleIncrement = (value = 1): void => {
        if (value === 0) {
            setCount(0);
        } else {
            setCount((count) => count + value);
        }
    };

    return (
        <Card title="Contador con botones">
            <button
                onClick={() => handleIncrement(-1)}
                title="Decrement counter"
            >
                ➖
            </button>
            <span className="count-value">
                count is
                <output>{count}</output>
            </span>
            <button onClick={() => handleIncrement()} title="Increment counter">
                ➕
            </button>
            <button onClick={() => handleIncrement(0)} title="Reset counter">
                🌐
            </button>
        </Card>
    );
};
