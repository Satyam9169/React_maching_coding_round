import React, { useState, useRef } from 'react';

const App = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTime((pre) => pre + 1);
    }, 1);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  };

  const formatTime = () => {
    let hrs = String(Math.floor(time / 3600)).padStart(2, '0');
    let min = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    let sec = String(time % 60).padStart(2, '0');

    return `${hrs} : ${min} : ${sec}`;
  };

  return (
    <>
      <p>StopWath App using useRef {formatTime()}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
export default App;
