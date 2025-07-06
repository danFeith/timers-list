import { useTimerContext } from '../../Context/TimerContext';
import { Timer } from '../Timer';
import { useTimerListStyles } from './styles';

export const TimerList = () => {
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
};


