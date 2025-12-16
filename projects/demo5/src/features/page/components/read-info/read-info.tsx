import { Card } from '../../../../core/components/card/card';
import { useObservableV3 } from '../../../../core/hooks/use-observable-v3';
import { infoActionService } from '../../services/sharing-actions';

export const ReadInfo: React.FC = () => {
    const data$ = infoActionService.getObservable();

    const [data] = useObservableV3(data$, '');

    return (
        <Card title="Readd info">
            {data && <p>Información recibida: {data} </p>}
        </Card>
    );
};
