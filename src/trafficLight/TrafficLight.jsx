import React, { useState, useEffect } from 'react'

const lights = ["red", "yellow", "green"];
const SequenceColor = ["red", "yellow", "green", "yellow"];

const TrafficLight = () => {
    const [color, setColor] = useState(0)

    const styles = {
        container: {
            textAlign: 'center',
        },
        trafficLight: {
            width: '80px',
            borderRadius: '10px',
            margin: 'auto',
            background: '#ddd',
            border: '1px solid black'
        },
        light: {
            width: '50px',
            height: '50px',
            border: '50%',
            background: '#222',
            margin: '10px auto'
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setColor((prev) => (prev + 1) % SequenceColor.length)
        }, 1000)

        return () => clearTimeout(timer)
    }, [color])

    const ActiveLights = SequenceColor[color];

    return (
        <div style={styles.container}>
            <h1>Traffic Light</h1><hr />
            <div style={styles.trafficLight} >{
                lights.map((light) => (
                    <div key={light} style={{
                        ...styles.light,
                        backgroundColor: ActiveLights === light ? light : '#222'
                    }}></div>
                ))
            }
            </div>
        </div>
    )
}

export default TrafficLight
