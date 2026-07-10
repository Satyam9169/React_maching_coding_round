import React, { useState, useEffect, useCallback, useMemo } from "react";

const STORAGE_KEY = "todo-tasks";
const FILTER_OPTIONS = {
  ALL: "All",
  PENDING: "Pending",
  COMPLETED: "Completed",
};

const TodoApp = () => {
  // Initialize tasks from localStorage
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to load tasks from localStorage:", error);
      return [];
    }
  });

  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState(FILTER_OPTIONS.ALL);
  const [editingId, setEditingId] = useState(null);

  // Persist tasks to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error("Failed to save tasks to localStorage:", error);
    }
  }, [tasks]);

  // Memoized filtered tasks to avoid unnecessary recalculations
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filter === FILTER_OPTIONS.COMPLETED) return task.completed;
      if (filter === FILTER_OPTIONS.PENDING) return !task.completed;
      return true; // All
    });
  }, [tasks, filter]);

  // Handle adding or editing a task
  const handleAddOrEdit = useCallback(
    (e) => {
      e.preventDefault();

      if (!inputValue.trim()) return;

      if (editingId !== null) {
        // Update existing task
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === editingId ? { ...task, text: inputValue } : task
          )
        );
        setEditingId(null);
      } else {
        // Add new task
        const newTask = {
          id: crypto.randomUUID(),
          text: inputValue,
          completed: false,
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
      }

      setInputValue("");
    },
    [inputValue, editingId]
  );

  // Handle input change
  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  // Handle task deletion
  const handleDelete = useCallback((id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, []);

  // Handle task completion toggle
  const handleToggle = useCallback((id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  // Handle task edit mode
  const handleEditTask = useCallback((task) => {
    setInputValue(task.text);
    setEditingId(task.id);
  }, []);

  // Handle filter change
  const handleFilterChange = useCallback((filterOption) => {
    setFilter(filterOption);
  }, []);

  const isEditing = editingId !== null;
  const buttonText = isEditing ? "Update" : "Add";

  return (
    <div className="todo-container">
      <h1>TODO App Using Local Storage</h1>

      {/* Input Form */}
      <form onSubmit={handleAddOrEdit} className="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your task..."
          className="todo-input"
          autoComplete="off"
        />
        <button type="submit" className="todo-button">
          {buttonText}
        </button>
      </form>

      {/* Filter Controls */}
      <div className="filter-controls">
        {Object.values(FILTER_OPTIONS).map((filterOption) => (
          <button
            key={filterOption}
            onClick={() => handleFilterChange(filterOption)}
            className={`filter-button ${
              filter === filterOption ? "active" : ""
            }`}
            aria-pressed={filter === filterOption}>
            {filterOption}
          </button>
        ))}
      </div>

      {/* Task List */}
      <div className="tasks-container">
        {filteredTasks.length === 0 ? (
          <p className="empty-message">
            No tasks found. {filter !== FILTER_OPTIONS.ALL ? "Try a different filter." : "Create one to get started!"}
          </p>
        ) : (
          <ul className="task-list">
            {filteredTasks.map((task) => (
              <li key={task.id} className="task-item">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggle(task.id)}
                  className="task-checkbox"
                  aria-label={`Mark "${task.text}" as ${
                    task.completed ? "incomplete" : "complete"
                  }`}
                />
                <span className={`task-text ${task.completed ? "completed" : ""}`}>
                  {task.text}
                </span>
                <div className="task-actions">
                  <button
                    onClick={() => handleEditTask(task)}
                    className="edit-button"
                    aria-label={`Edit task: ${task.text}`}>
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="delete-button"
                    aria-label={`Delete task: ${task.text}`}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
