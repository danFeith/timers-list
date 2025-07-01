import React from 'react';
import { useTimerContext } from '../../context/timerContext';

const AddTimerButton = () => {
    const { addTimer } = useTimerContext();
    return <button onClick={addTimer}>Add Timer</button>;
};

export default React.memo(AddTimerButton);
