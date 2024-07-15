import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import AddTodo from "./addTodo.jsx";
import TaskList from "./TaskList.jsx";

function App() {
  return (
    <Provider store={store}>
      <AddTodo />
      <TaskList />
    </Provider>
  );
}

export default App;
