import React from "react";
import { useSelector } from "react-redux";
import { TodoItem } from "./TaskItem.jsx";
import style from "./TaskList.module.scss";

export const TaskList = () => {
  const todos = useSelector((state) => state.todo.task);
  const { taskList, amountItem, message } = style;

  return (
    <ul className={taskList}>
      <h1>Task</h1>
      {todos.length > 0 ? (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <p className={message}>Немає доступних завдань</p>
      )}
      <p className={amountItem}>Всього: {todos.length}</p>
    </ul>
  );
};
