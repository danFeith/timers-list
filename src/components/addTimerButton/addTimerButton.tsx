import React from 'react';
import { useTimerContext } from '../../Context/TimerContext';

export const AddTimerButton = React.memo(() => {
    const { addTimer } = useTimerContext();
    return <button onClick={addTimer}>Add Timer</button>;
});


