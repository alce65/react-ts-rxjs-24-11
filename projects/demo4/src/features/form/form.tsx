
import { useRef } from 'react';
import { Card } from '../../core/components/card/card';
import { useObservableV3 } from '../../core/hooks/use-observable-v3';
import { debounceTime, distinctUntilChanged, fromEvent, map, type Observable } from 'rxjs';

export const Form: React.FC = () => {
        const inputRef = useRef<HTMLInputElement | null>(null);

        const factory = (): Observable<string> => {
            const input = inputRef.current as HTMLInputElement

            return fromEvent<React.ChangeEvent<HTMLInputElement>>(input, 'input').pipe(
                debounceTime(500),
                map((event) => {
                    const { value } = event.target
                    return value
                }),
                distinctUntilChanged()
            )
        }

        const [data] = useObservableV3(factory, '')
    return (
        <Card title="React Input">
            <label>
                <span>Name</span>
                <input type="text" ref={inputRef} />
            </label>
            <p>
                Input: <output className="series">{data}</output>
            </p>
        </Card>
    );
};
