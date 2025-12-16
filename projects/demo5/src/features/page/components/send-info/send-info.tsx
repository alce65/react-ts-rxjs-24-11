import { Card } from '../../../../core/components/card/card';
import { clickActionService, infoActionService } from '../../services/sharing-actions';

export const SendInfo: React.FC = () => {


    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event): void => {

        const message = 'Hola compañero'
        const { textContent } = event.target as HTMLButtonElement

        if(textContent.includes('contador')) {
            clickActionService.setSubject(true)
        } else {
            infoActionService.setSubject(message)
        }
    }

    return (
        <Card title="Send info">
            <button onClick={handleClick}>Enviar información</button>
            <button onClick={handleClick}>Aumentar contador</button>
        </Card>
    );
};
