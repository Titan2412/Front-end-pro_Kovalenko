import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import style from "./Forms.module.scss";

const TodoSchema = Yup.object().shape({
  task: Yup.string().min(5, "Введіть щонайменше 5 символів!"),
});

export function Forms() {
  const [todos, setTodos] = useState([]);
  const { todoTitle, todoInput, todoButton, todoList, TodoError } = style;

  const addTodo = (task) => {
    setTodos([...todos, { task }]);
  };
  return (
    <div>
      <h1 className={todoTitle}>TODO</h1>
      <Formik
        initialValues={{ task: "" }}
        onSubmit={(values, { resetForm }) => {
          if (values.task) {
            addTodo(values.task);
          }
          resetForm();
        }}
        validationSchema={TodoSchema}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              type="text"
              onChange={handleChange}
              value={values.task}
              name="task"
              className={todoInput}
            />
            <button type="submit" className={todoButton}>
              Додати
            </button>
            {errors.task && <p className={TodoError}>{errors.task}</p>}
          </Form>
        )}
      </Formik>
      <div>
        <ol className={todoList}>
          {todos.map((todo, index) => (
            <li key={index}>{todo.task}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
