import { useCallback, useEffect, useRef, useState } from 'react';
import { useTimerStyles } from './timerStyles';
import Button from '../button/button';

interface ITimerProps {
    id: string;
    onDelete: (id: string) => void;
}

const Timer = ({ id, onDelete }: ITimerProps) => {
    const classes = useTimerStyles();
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const animationFrameRef = useRef<number | null>(null);
    const lastTimestampRef = useRef<number>(performance.now());

    const tick = (timestamp: number) => {
        const delta = timestamp - lastTimestampRef.current;
        setTime(prev => prev + Math.floor(delta));
        lastTimestampRef.current = timestamp;
        animationFrameRef.current = requestAnimationFrame(tick);
    };


    useEffect(() => {
        if (isRunning) {
            lastTimestampRef.current = performance.now();
            animationFrameRef.current = requestAnimationFrame(tick);
        } else if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }

        return () => {
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        };
    }, [isRunning]);


    const formatTime = () => {
        const seconds = Math.floor(time / 1000);
        const ms = time % 1000;
        return `${seconds}.${ms}`;
    };


    const reset = useCallback(() => setTime(0), []);
    const onDeleteTimer = useCallback(() => onDelete(id), [id, onDelete]);
    const toggleIsRunning = useCallback(() => setIsRunning(r => !r), []);

    return (
        <div className={classes.timerRow}>
            <div className={classes.timerValue}>{formatTime()}</div>
            <div className={classes.timerControls}>
                <Button text={isRunning ? 'Pause' : 'Resume'} onClick={toggleIsRunning} />
                <Button onClick={reset} text='Reset' />
                <Button onClick={onDeleteTimer} text='Delete' />
            </div>
        </div>
    );
};

export default Timer;
