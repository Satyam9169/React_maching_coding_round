import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';

const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([
            ...todos,
            { id: uuidv4(), task: todo, completed: false, isEditing: false },
        ]);
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const deleteTodo = id => {
        const deleteItem = todos.filter(todo => todo.id !== id)
        setTodos(deleteItem)
    }

    // this is working as like id
    // mean we are clicking that particular id which 
    // we need to edit for matching the id
    const editTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, isEditing: !todo.isEditing
        } : todo))
    }

    // editTodo is working as as like id which i need to work
    // this edit task is work as like we need to edit the conetent with matching id
    const editTask = (task, id) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? {
                ...todo,
                task,
                isEditing: !todo.isEditing
            } : todo))
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Todo App</h1>
            <TodoForm addTodo={addTodo} />
            {
                todos.map((todo, index) => (
                    todo.isEditing ? (
                        <EditTodoForm
                            editTodo={editTask} // this mean that editTodo is like id and editTask as like content which matching with id
                            // in within id we have passed which i need to edit task from particular id
                            task={todo}
                            key={index} />
                    ) : (
                        <Todo
                            task={todo}
                            key={index}
                            toggleComplete={toggleComplete}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}
                        />)
                ))
            }
        </div>
    )
}

export default TodoWrapper