import { useTimerContext } from '../../context/timerContext';

const AddTimerButton = () => {
    const { addTimer } = useTimerContext();

    return <button onClick={addTimer}>Add Timer</button>;
};

export default AddTimerButton;
