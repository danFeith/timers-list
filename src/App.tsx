import { TimerProvider } from './Context/TimerContext';
import { TimerList } from './components/TimerList';
import { AddTimerButton } from './components/AddTimerButton';

function App() {
  return (
    <TimerProvider>
      <div>
        <h1>Timer Manager</h1>
        <AddTimerButton />
        <TimerList />
      </div>
    </TimerProvider>
  );
}

export { App };
