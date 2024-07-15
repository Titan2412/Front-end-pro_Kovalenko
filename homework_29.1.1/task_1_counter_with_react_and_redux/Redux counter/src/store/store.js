import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../context/counter.reducers';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});