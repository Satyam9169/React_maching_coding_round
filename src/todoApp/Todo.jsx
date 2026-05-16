import React, { useState } from "react";
// import { IconName } from "react-icons/fc";
// import { LuPenSquare } from "react-icons/lu";
// import { FaRegTrashAlt } from "react-icons/fa";
import "./common.css";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "complete" : ""}`}>
        {task.task}
      </p>
      <button onClick={() => editTodo(task.id)}>Edit</button>
      <button onClick={() => deleteTodo(task.id)}>Delete</button>
    </div>
  );
};

export default Todo;
