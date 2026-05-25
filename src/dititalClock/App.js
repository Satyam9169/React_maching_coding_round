import React, { useState, useEffect } from 'react';

const App = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = () => {
        let hrs = currentTime.getHours();
        let min = currentTime.getMinutes();
        let sec = currentTime.getSeconds();

        let ampm = hrs >= 12 ? 'PM' : 'AM';

        hrs = hrs % 12;
        hrs = hrs ? hrs : 12;
        //add leading zeroes
        const formattedHrs = String(hrs).padStart(2, '0');
        const formattedMin = String(min).padStart(2, '0');
        const formattedSec = String(sec).padStart(2, '0');

        return `${formattedHrs} : ${formattedMin} : ${formattedSec} ${ampm}`;
    };

    const formatDate = () => {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };

        return currentTime.toLocaleDateString(undefined, options);
    };

    return (
        <>
            <p>StopWath App using useRef </p>
            <h1>{formatTime()}</h1>
            <h2>{formatDate()}</h2>
        </>
    );
};
export default App;
