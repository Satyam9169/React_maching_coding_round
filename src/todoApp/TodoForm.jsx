import React, { useState } from 'react'
import './common.css'

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const handleChange = e => {
        setValue(e.target.value)
        // console.log(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault()
        addTodo(value)
        setValue("")
    }

    return (<>
        <div className='TodoForm'>

            <form className='formInline' onSubmit={handleSubmit}>
                {/* <label htmlFor="fname"> </label> */}
                <input type="text" value={value} placeholder="Your name.." onChange={handleChange} />
                <button type="submit" >Add Task </button>
            </form>
        </div>
    </>
    )
}

export default TodoForm