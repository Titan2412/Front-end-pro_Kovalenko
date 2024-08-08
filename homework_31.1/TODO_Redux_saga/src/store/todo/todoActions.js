export const ADD_TODO = 'ADD_TODO';
export const LOAD_TODOS = 'LOAD_TODOS';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETED_TODO = 'COMPLETED_TODO';
export const CLEAR_TODOS = 'CLEAR_TODOS';
export const RENAME_TODO = 'RENAME_TODO'; 

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const loadTodos = () => ({
  type: LOAD_TODOS,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const completedTodo = (id, todo) => ({
  type: COMPLETED_TODO,
  payload: { id, ...todo },
});

export const clearTodos = () => ({
  type: CLEAR_TODOS,
});

export const renameTodo = (id, title) => ({
  type: RENAME_TODO,
  payload: { id, title },
});