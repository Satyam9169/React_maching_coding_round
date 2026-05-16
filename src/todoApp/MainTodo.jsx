import React, { useState } from 'react';
// import './common.css';

export default function App() {
  const [value, setValue] = useState('');
  const [text, setText] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === '') return;
    setText([...text, value]);
    setValue('');
  };

  const handleDelete = (index) => {
    const deletedList = text.filter((_, i) => i !== index);
    setText(deletedList);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>TODO APP</h1>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">submit</button>
      </form>
      {text.map((item, index) => (
        <ul key={index}>
          <li>{item}</li>
          <button onClick={() => handleDelete(index)}>delete</button>
        </ul>
      ))}
    </div>
  );
}
