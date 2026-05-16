import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {
    const [click, setClick] = useState("")

    const clickHandler = (event) => {
        setClick(click.concat(event.target.value))
    }

    const clearHandler = () => { setClick("") }
    const HandleResult = () => {  setClick(eval(click).toString()) }

    return (
        <>
            <div className='calc'>
                <h1 style={{ color: "blue" }}>Calculator</h1>
                <input type='text' placeholder='0' id='answer' value={click} />
                <div className='text text1'>
                    <input type='button' value="9" onClick={clickHandler} />
                    <input type='button' value="8" onClick={clickHandler} />
                    <input type='button' value="7" onClick={clickHandler} />
                    <input type='button' value="6" onClick={clickHandler} />
                </div>
                <div className='text'>
                    <input type='button' value="5" onClick={clickHandler} />
                    <input type='button' value="4" onClick={clickHandler} />
                    <input type='button' value="3" onClick={clickHandler} />
                    <input type='button' value="2" onClick={clickHandler} />
                </div>
                <div className='text'>
                    <input type='button' value="1" onClick={clickHandler} />
                    <input type='button' value="0" onClick={clickHandler} />
                    <input type='button' value="." onClick={clickHandler} />
                    <input type='button' value="+" onClick={clickHandler} />
                </div>
                <div className='text'>
                    <input type='button' value="*" onClick={clickHandler} />
                    <input type='button' value="/" onClick={clickHandler} />
                    <input type='button' value="%" onClick={clickHandler} />
                    <input type='button' value="=" onClick={HandleResult} />
                </div>
                <div className='text'>
                    <input type='button' value="Clear" onClick={clearHandler} />
                </div>
            </div>
        </>
    )
}

export default Calculator