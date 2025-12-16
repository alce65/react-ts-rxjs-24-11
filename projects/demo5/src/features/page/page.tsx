import React from 'react';
import { Card } from '../../core/components/card/card';
import { Counter } from './components/counter/counter';
import { SendInfo } from './components/send-info/send-info';
import { ReadInfo } from './components/read-info/read-info';

export const Page: React.FC = () => {
    return (
        <Card title="Sample page">
            <p>Uso de Observables para la comunicación entre componentes</p>
            <Counter />
            <SendInfo />
            <ReadInfo />
        </Card>
    );
};
