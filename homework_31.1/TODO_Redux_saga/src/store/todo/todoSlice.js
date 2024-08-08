import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodoSuccess: (state, action) => {
      state.todos.push(action.payload);
    },
    loadTodosSuccess: (state, action) => {
      state.todos = action.payload;
    },
    deleteTodoSuccess: (state, action) => {
      state.todos = state.todos.filter(todo => todo._id !== action.payload);
    },
    completedTodoSuccess: (state, action) => {
      const index = state.todos.findIndex(todo => todo._id === action.payload._id);
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    clearTodosSuccess: (state) => {
      state.todos = [];
    },
    renameTodoSuccess: (state, action) => {
      const index = state.todos.findIndex(todo => todo._id === action.payload._id);
      if (index !== -1) {
        state.todos[index].title = action.payload.title;
      }
    },
  },
});

export const {
  addTodoSuccess,
  loadTodosSuccess,
  deleteTodoSuccess,
  completedTodoSuccess,
  clearTodosSuccess,
  renameTodoSuccess
} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;