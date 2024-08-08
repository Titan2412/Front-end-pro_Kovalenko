import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { todoReducer } from './todo/todoSlice.js';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const reducer = {
  todos: todoReducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

