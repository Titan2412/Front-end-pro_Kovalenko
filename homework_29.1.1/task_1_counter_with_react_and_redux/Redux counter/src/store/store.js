import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter.reducers';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});