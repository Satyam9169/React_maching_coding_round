import React, { useState, useEffect } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("todo-tasks");
    if (saved) return JSON.parse(saved);
    return [];
  });

  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("ALL");
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("todo-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddorEdit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;
    if (edit !== null) {
      setTasks(
        tasks.map((t) => (t.id === edit ? { ...t, text: inputValue } : t)),
      );
      setEdit(null);
    } else {
      const newTask = {
        id: crypto.randomUUID(),
        text: inputValue,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleToggle = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const handleEdit = (task) => {
    setInputValue(task.text);
    setEdit(task.id);
  };

  const filteredTask = tasks.filter((t) => {
    if (filter === "Completed") return t.completed;
    if (filter === "Pending") return !t.completed;
    return true; // All
  });

  return (
    <div>
      <br />
      <h1>TODO App Using Local Storage</h1>
      <form onSubmit={handleAddorEdit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter your task.."
        />
        <button type="submit">{edit !== null ? "Update" : "Add"}</button>
      </form>

      {/* filter controls */}
      <div className="filters">
        {["All", "Pending", "Completed"].map((t) => (
          <button
            onClick={() => setFilter(t)}
            style={{ fontWeight: filter === t ? "bold" : "normal" }}>
            {t}
          </button>
        ))}
        <ul>
          {filteredTask.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
              />
              <span>{task.text}</span>
              <button onClick={() => handleEdit(task)}>Edit</button>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
