import { useTimerContext } from '../../Context/TimerContext';
import { Button } from '../Button';

export const AddTimerButton = () => {
    const { addTimer } = useTimerContext();
    return <Button text='Add Timer' onClick={addTimer} />
};


