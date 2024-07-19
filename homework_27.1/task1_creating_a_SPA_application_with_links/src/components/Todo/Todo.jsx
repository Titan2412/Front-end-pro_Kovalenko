import { useState } from "react";
import style from "./Todo.module.scss";

export function TodoForm() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const { todoTitle, todoInput, todoButton, todoList } = style;

  const addTodo = () => {
    if (task) {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  return (
    <div>
      <h2 className={todoTitle}>TODO</h2>
      <input
        type="text"
        className={todoInput}
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className={todoButton} onClick={addTodo}>
        Додати
      </button>
      <ol className={todoList}>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ol>
    </div>
  );
}