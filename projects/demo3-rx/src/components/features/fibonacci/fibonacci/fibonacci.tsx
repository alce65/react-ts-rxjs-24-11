
import { FibonacciItems } from '../fibonacci-items/fibonacci-items';
import { Card } from '@components/core/card/card';
import './fibonacci.css';
import { fromEvent, map, Observable } from 'rxjs';
import { useObservableV3 } from '@components/features/hooks/rx/use-observable-v3';
import { useRef } from 'react';

export type TypeOfLimits = 'limit' | 'numbers';

export const Fibonacci: React.FC = () => {
    const radioRef = useRef<HTMLDivElement>(null);

    const factory = (): Observable<TypeOfLimits> => {
        const divElement = radioRef.current as HTMLDivElement;
        // if (!divElement) return null;
        return fromEvent(divElement, 'change').pipe(
            map((event) => {
                const target = event.target as HTMLInputElement;
                return target.value as TypeOfLimits;
            })
        );
    };

    // const [typeLimit, setTypeLimit] = useState<TypeOfLimits>('numbers');
    // useEffect(() => {
    //     const change$ = factory();
    //     if (!change$) return;
    //     const subscription = change$.subscribe(setTypeLimit);

    //     return (): void => {
    //         subscription.unsubscribe();
    //     };
    // }, []);

    const [typeLimit] = useObservableV3(factory, 'numbers');

    if (!typeLimit) {
        return <div>Error...</div>;
    }

    return (
        <Card title="Fibonacci Generator">
            <div className="options" ref={radioRef}>
                <label>
                    <input
                        type="radio"
                        name="fibonacci"
                        value="numbers"
                        defaultChecked
                    />
                    Generate by number of items
                </label>
                <label>
                    <input type="radio" name="fibonacci" value="limit" />
                    Generate by limit value
                </label>
            </div>
            <FibonacciItems typeLimit={typeLimit} />
        </Card>
    );
};
