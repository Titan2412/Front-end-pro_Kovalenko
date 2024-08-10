import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { AddTodo, TaskList } from "./components/index.js";

function App() {
  return (
    <Provider store={store}>
      <AddTodo />
      <TaskList />
    </Provider>
  );
}

export default App;
