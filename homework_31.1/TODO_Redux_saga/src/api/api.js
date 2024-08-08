import axios from 'axios';

const API_URL = 'http://localhost:5000';


export const fetchTodos = async () => {
  const response = await axios.get(`${API_URL}/todos`);
  return response.data;
};

export const postTodo = async (todo) => {
  const response = await axios.post(`${API_URL}/todos`, todo);
  return response.data;
};

export const deleteTodoById = async (id) => {
  const response = await axios.delete(`${API_URL}/todos/${id}`);
  return response.data;
};

export const putTodo = async (id, todo) => {
  const response = await axios.put(`${API_URL}/todos/${id}`, todo);
  return response.data;
};

export const deleteAllTodos = async () => {
  const response = await axios.delete(`${API_URL}/todos`);
  return response.data;
};

export const renameTodo = async (id, title) => {
  const response = await axios.put(`${API_URL}/todos/${id}`, title );
  return response.data;
};