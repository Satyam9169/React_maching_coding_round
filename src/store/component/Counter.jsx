import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from '../feature/counter/counterSlice'
import User from './User'

const Counter = () => {

    const dispatch = useDispatch()
    const state = useSelector((state) => state.counter)
    console.log(state);

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        if (state.value > 0) {
            dispatch(decrement())
        }
    }

    return (
        <div>
            <h2>Counter: {state.value}</h2>
            <button onClick={handleIncrement}><h3>+</h3></button>{" "}
            <button onClick={handleDecrement}><h3>-</h3></button>
            <User />
        </div>
    )
}

export default Counter