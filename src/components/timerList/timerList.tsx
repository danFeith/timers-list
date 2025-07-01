import { useTimerContext } from '../../context/timerContext';
import Timer from '../timer/timer';
import { useTimerListStyles } from './timerListStyles';

const TimerList = () => {
    const { timers, removeTimer } = useTimerContext();
    const classes = useTimerListStyles()

    return (
        <div>
            <div className={classes.timerList}>
                {timers.map((timer) => (
                    <Timer key={timer.id} onDelete={() => removeTimer(timer.id)} />
                ))}
            </div>
        </div>
    );
};

export default TimerList;
