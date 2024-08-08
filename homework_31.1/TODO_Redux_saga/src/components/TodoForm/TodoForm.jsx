import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  loadTodos,
  deleteTodo,
  completedTodo,
  clearTodos,
  renameTodo,
} from "../../store/todo/todoActions";
import style from "./TodoForm.module.scss";

export function TodoForm() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const [editingTodo, setEditingTodo] = useState(null);
  const [todoData, setTodoData] = useState({ title: "" });

  const {
    todoTitle,
    TodoForm,
    todoInput,
    todoList,
    todoItem,
    buttonGroup,
    todoButton,
  } = style;

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (todoData.title.trim()) {
      dispatch(addTodo(todoData));
      setTodoData({ title: "" });
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleCompletedTodo = (id) => {
    const completeTodo = { completed: true };
    dispatch(completedTodo(id, completeTodo));
  };

  const handleClearTodos = () => {
    dispatch(clearTodos());
  };

  const handleEditTodo = (todo) => {
    setEditingTodo(todo);
    setTodoData({ title: todo.title });
  };

  const handleSaveTodo = () => {
    if (editingTodo) {
      dispatch(renameTodo(editingTodo._id, todoData.title));
      setEditingTodo(null);
      setTodoData({ title: "" });
    }
  };

  return (
    <div className={TodoForm}>
      <h1 className={todoTitle}>TODO</h1>
      <div>
        <input
          className={todoInput}
          type="text"
          value={todoData.title}
          onChange={(e) => setTodoData({ ...todoData, title: e.target.value })}
          placeholder="Введіть завдання"
        />
        {editingTodo ? (
          <>
            <button className={todoButton} onClick={handleSaveTodo}>
            Зберегти TODO
            </button>
            <button className={todoButton} onClick={() => setEditingTodo(null)}>
            Скасувати
            </button>
          </>
        ) : (
          <button className={todoButton} onClick={handleAddTodo}>
            Додати TODO
          </button>
        )}
      </div>
      <ul className={todoList}>
        {todos.map((todo) => (
          <li className={todoItem} key={todo._id}>
            {todo.title} - {todo.completed ? "Completed" : "Not completed"}
            <div className={buttonGroup}>
              <button
                className={todoButton}
                onClick={() => handleDeleteTodo(todo._id)}
              >
                Видалити
              </button>
              <button
                className={todoButton}
                onClick={() => handleEditTodo(todo)}
              >
                Редагувати
              </button>
              <button
                className={todoButton}
                onClick={() => handleCompletedTodo(todo._id)}
              >
                Виконано
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className={todoButton} onClick={handleClearTodos}>
        Очистити TODO
      </button>
    </div>
  );
}
