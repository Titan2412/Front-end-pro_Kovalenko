import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../context/todo.reducers';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});