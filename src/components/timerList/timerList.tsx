import React from 'react';
import { useTimerContext } from '../../Context/TimerContext';
import { Timer } from '../Timer';
import { useTimerListStyles } from './styles';

const TimerList = React.memo(() => {
    const { timers, removeTimer } = useTimerContext();
    const classes = useTimerListStyles()
    return (
        <div>
            <div className={classes.timerList}>
                {timers.map((timer) => (
                    <Timer key={timer.id} onDelete={removeTimer} id={timer.id} />
                ))}
            </div>
        </div>
    );
});

export { TimerList }

