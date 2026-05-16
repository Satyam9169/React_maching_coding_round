import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000 / 10);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    setCounter(0);
  };

  return (
    <>
      <div>StopWatch : {counter}</div>
      <button type="button" onClick={handleStart}>
        start
      </button>
      <button type="button" onClick={handleStop}>
        stop
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

export default StopWatch;
