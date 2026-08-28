import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
    const [isRunning, setIsRunning] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        let id;
        if (isRunning) {
            id = setInterval(() => {
                setCount(p => p + 1);
            }, 1000);
        }
        return () => clearInterval(id);
    }, [isRunning]);

    const start = () => setIsRunning(true);

    const stop = () => setIsRunning(false);

    const Reset = () => {
        setIsRunning(false);
        setCount(0);
    };

    const formatTime = (miliseconds) => {
        const hrs = Math.floor(miliseconds / 3600);
        const min = Math.floor((miliseconds % 3600) / 60);
        const sec = miliseconds % 60;

        // const paddedHrs = String(hrs).padStart(2, '0');
        // const paddedMin = String(min).padStart(2, '0');
        // const paddedSec = String(sec).padStart(2, '0');
        // return `${paddedHrs} : ${paddedMin} : ${paddedSec}`;

        const pad = (n) => String(n).padStart(2, '0');

        return `${pad(hrs)} : ${pad(min)} : ${pad(sec)}`
    };

    return (
        <div>
            <h1>Countdown Timer App {formatTime(count)} </h1>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={Reset}>Reset</button>
        </div>
    );
}
