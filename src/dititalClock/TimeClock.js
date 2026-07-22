import React, { useState, useEffect } from "react";

const TimeClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.clock}>
                {time.toLocaleTimeString()}
            </h1>
        </div>
    );
};

const styles = {
    container: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
    },
    clock: {
        color: "#00ff99",
        fontSize: "60px",
        fontFamily: "monospace",
        padding: "20px 40px",
        border: "2px solid #00ff99",
        borderRadius: "10px",
    },
};

export default TimeClock;