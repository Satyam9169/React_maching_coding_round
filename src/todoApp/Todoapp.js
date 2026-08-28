import React, { useState, useEffect } from 'react';
import './style.css';

export default function Todopp() {
    const [input, setInput] = useState('');
    const [value, setValue] = useState(() => {
        try {
            const saved = localStorage.getItem('todos');
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.log(error);
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(value));
    }, [value]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const [edit, setEdit] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (edit !== null) {
            setValue((pre) =>
                pre.map((item) => (item.id === edit ? { ...item, text: input } : item))
            );
            setEdit(null);
            setInput('');
            return;
        }

        const query = input.trim();
        if (!query) {
            return;
        }
        const newTask = {
            id: crypto.randomUUID(),
            text: input,
            completed: false,
        };
        setValue((pre) => [...pre, newTask]);
        setInput('');
    };

    const handleDelete = (id) => {
        const deletedItem = value.filter((item) => item.id !== id);
        setValue(deletedItem);
    };

    const handleEdit = (item) => {
        setEdit(item.id);
        setInput(item.text);
    };

    return (
        <div>
            <h4>Todo App</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <label>Task : </label>
                <input type="text" value={input} onChange={handleChange} />
                <button type="submit">{edit ? 'Update' : 'Add'}</button>
            </form>
            <ul>
                {value.map((item) => (
                    <>
                        <li key={item.id}>
                            {item.text}
                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                            <button onClick={() => handleEdit(item)}>Edit</button>
                        </li>
                    </>
                ))}
            </ul>
        </div>
    );
}
