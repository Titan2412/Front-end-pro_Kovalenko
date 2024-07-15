import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./taskItem.jsx";
import "./style/TaskList.css";

const TaskList = () => {
  const todos = useSelector((state) => state.todo.task);

  return (
    <ul className="taskList">
      <h1>Task</h1>
      {todos.map((todo) => (
        <TaskItem key={todo.id} todo={todo} />
      ))}
      <p className="amountItem">Всього: {todos.length}</p>
    </ul>
  );
};

export default TaskList;
