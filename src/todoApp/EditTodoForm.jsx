import React, { useState } from 'react'
import './common.css'

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task)

  const handleChange = e => {
    setValue(e.target.value)
    // console.log(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault()
    editTodo(value, task.id)
    setValue("")
  }

  return (
    <div className='TodoForm'>
      <form className='formInline' onSubmit={handleSubmit}>
        <label htmlFor="fname"></label>
        <input type="text" value={value} id="fname" name="firstname" placeholder="Your name.." onChange={handleChange} />
        <button type="submit" >Update Task </button>
      </form>
    </div>
  )
}

export default EditTodoForm