import { memo } from 'react';
import { useTimerContext, type ITimerData } from '../../Context/TimerContext';
import { Timer } from '../Timer';
import { useTimerListStyles } from './styles';
import type { List } from 'immutable';

const TimerList = memo(({ timers, removeTimer }: {
    timers: List<ITimerData>;
    removeTimer: (id: string) => void;
}) => {
    const classes = useTimerListStyles();

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


export const TimerListWrapper = () => {
    const { timers, removeTimer } = useTimerContext();
    return <TimerList timers={timers} removeTimer={removeTimer} />;
};

