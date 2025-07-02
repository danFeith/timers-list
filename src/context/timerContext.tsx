import { createContext, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid';

interface TimerData {
    id: string;
};

interface ITimerContextType {
    timers: TimerData[];
    addTimer: () => void;
    removeTimer: (id: string) => void;
};

const TimerContext = createContext<ITimerContextType | undefined>(undefined);

const useTimerContext = () => {
    const context = useContext(TimerContext);
    if (!context) throw new Error('useTimerContext must be used within TimerProvider');
    return context;
};

const TimerProvider = ({ children }: { children: ReactNode }) => {
    const [timers, setTimers] = useState<TimerData[]>([]);

    const value = useMemo(() => ({
        timers,
        addTimer: () => {
            setTimers((prev) => [...prev, { id: uuidv4() }]);
        },
        removeTimer: (id: string) => {
            setTimers((prev) => prev.filter((timer) => timer.id !== id));
        }

    }), [timers])

    return (
        <TimerContext.Provider value={value}>
            {children}
        </TimerContext.Provider>
    );
};

export { useTimerContext, TimerProvider }
