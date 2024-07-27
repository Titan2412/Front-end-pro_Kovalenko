import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import todoReducer from '../context/todo.reducers';
import swapiReducer from './swapi/swapiReducer';

const rootReducer = combineReducers({
  todo: todoReducer,
  swapi: swapiReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});