import { createContext, useContext, useMemo, useState } from 'react';
import { List } from 'immutable'
import type { ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid';

interface ITimerData {
    id: string;
};

interface ITimerContextType {
    timers: List<ITimerData>;
    addTimer: () => void;
    removeTimer: (id: string) => void;
};

const TimerContext = createContext<ITimerContextType | undefined>(undefined);

export const useTimerContext = () => {
    const context = useContext(TimerContext);
    if (!context) throw new Error('useTimerContext must be used within TimerProvider');
    return context;
};

export const TimerProvider = ({ children }: { children: ReactNode }) => {
    const [timers, setTimers] = useState(List<ITimerData>());

    const value = useMemo(() => ({
        timers,
        addTimer: () => {
            setTimers((prev) => prev.push({ id: uuidv4() }));
        },
        removeTimer: (id: string) => {
            setTimers((prev) => prev.filter((t) => t.id !== id));
        }

    }), [timers])

    return (
        <TimerContext.Provider value={value}>
            {children}
        </TimerContext.Provider>
    );
};

