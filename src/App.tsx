import { TimerProvider } from './context/timerContext';
import TimerList from './components/timerList/timerList';
import AddTimerButton from './components/addTimerButton/addTimerButton';

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

export default App;
