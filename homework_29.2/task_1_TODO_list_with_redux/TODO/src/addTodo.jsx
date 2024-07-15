import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask } from "./context/todo.reducers";
import "./style/addTodo.css";

const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addtask(text));
      setText("");
    }
  };

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <h1>TODOS</h1>
      <input
        className="inputTask"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="buttonAdd" type="submit">Додати</button>
    </form>
  );
};

export default AddTodo;
