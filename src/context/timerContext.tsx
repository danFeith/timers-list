import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid';

export type TimerData = {
    id: string;
};

type TimerContextType = {
    timers: TimerData[];
    addTimer: () => void;
    removeTimer: (id: string) => void;
};

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const useTimerContext = () => {
    const context = useContext(TimerContext);
    if (!context) throw new Error('useTimerContext must be used within TimerProvider');
    return context;
};

export const TimerProvider = ({ children }: { children: ReactNode }) => {
    const [timers, setTimers] = useState<TimerData[]>([]);

    const addTimer = () => {
        setTimers((prev) => [...prev, { id: uuidv4() }]);
    };

    const removeTimer = (id: string) => {
        setTimers((prev) => prev.filter((timer) => timer.id !== id));
    };

    return (
        <TimerContext.Provider value={{ timers, addTimer, removeTimer }}>
            {children}
        </TimerContext.Provider>
    );
};