import React from "react";
import style from "./TaskItem.module.scss";

export const TodoItem = ({ todo }) => {
  const { task, taskText} = style
  return (
    <li className={task}>
      <p className={taskText}>{todo.text}</p>
    </li>
  );
};
