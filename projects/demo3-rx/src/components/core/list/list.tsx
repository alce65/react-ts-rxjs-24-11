import type { JSX, ReactNode } from 'react';
import './list.css';

type Props<T> = {
    readonly items: T[];
    readonly renderItem?: (item: T) => ReactNode;
    readonly keyExtractor?: (item: T, index: number) => string | number;
};

export const List = <T,>({
    items,
    renderItem,
    keyExtractor,
}: Props<T>): JSX.Element => {
    const render = renderItem ?? ((item: T): ReactNode => item as ReactNode);

    const hasId = (item: unknown): item is { id: string | number } => {
        if (item == null || typeof item !== 'object') return false;
        const id = (item as Record<string, unknown>)['id'];
        return typeof id === 'string' || typeof id === 'number';
    };

    const getKey =
        keyExtractor ??
        ((item: T, index: number): string | number => {
            return hasId(item) ? item.id : index;
        });

    return (
        <ul>
            {items.map((item, index) => (
                <li key={getKey(item, index)}>{render(item)}</li>
            ))}
        </ul>
    );
};
