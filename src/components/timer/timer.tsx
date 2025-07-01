import { useEffect, useRef, useState } from 'react';
import { useTimerStyles } from './timerStyles';

interface TimerProps {
    onDelete: () => void;
}

const TIMER_INTERVAL_MS = 10;

const Timer = ({ onDelete }: TimerProps) => {
    const classes = useTimerStyles();
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const intervalRef = useRef<number | null>(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTime((prev) => prev + TIMER_INTERVAL_MS);
            }, TIMER_INTERVAL_MS);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isRunning]);

    const reset = () => setTime(0);

    const formatTime = () => {
        const seconds = Math.floor(time / 1000);
        const ms = time % 1000;
        return `${seconds}.${ms}`;
    };

    return (
        <div className={classes.timerRow}>
            <div className={classes.timerValue}>{formatTime()}</div>
            <div className={classes.timerControls}>
                <button onClick={() => setIsRunning((r) => !r)}>
                    {isRunning ? 'Pause' : 'Resume'}
                </button>
                <button onClick={reset}>Reset</button>
                <button onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
};

export default Timer;
