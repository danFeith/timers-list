import { TimerProvider } from './Context/TimerContext';
import { AddTimerButton } from './components/AddTimerButton';
import { TimerListWrapper } from './components/TimerList';

export function App() {

  return (
    <TimerProvider>
      <div>
        <h1>Timer Manager</h1>
        <AddTimerButton />
        <TimerListWrapper />
      </div>
    </TimerProvider>
  );
}

