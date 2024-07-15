import React from "react";
import "./style/taskItem.css";

const TodoItem = ({ todo }) => {
  return (
    <li className="task">
      <p className="taskText">{todo.text}</p>
    </li>
  );
};

export default TodoItem;
