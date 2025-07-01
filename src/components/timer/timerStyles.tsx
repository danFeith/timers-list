import { createUseStyles } from 'react-jss';

export const useTimerStyles = createUseStyles({
  timerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: 12,
    margin: '8px 0',
    borderRadius: 4,
    backgroundColor: '#f9f9f9',
  },
  timerControls: {
    display: 'flex',
    gap: 10,
  },
  timerValue: {
    fontSize: '1.2em',
    fontWeight: 'bold',
  },
});
