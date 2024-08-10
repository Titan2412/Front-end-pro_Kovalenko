import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask } from "../../context/todo.reducers";
import style from "./AddTodo.module.scss";

export const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const {todoForm, inputTask, buttonAdd, errors} = style

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addtask(text));
      setText("");
    } else {
      setError('Поле не повинно бути порожнім');
    }
  };

  return (
    <form className={todoForm} onSubmit={handleSubmit}>
      <h1>TODOS</h1>
      <input
        className={inputTask}
        placeholder="Введіть своє завдання"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className={buttonAdd} type="submit">Додати</button>
      {error && <p className={errors}>{error}</p>}
    </form>
  );
};
