import { all } from 'redux-saga/effects';
import { watchTodoActions } from './todo/todoSagas';

export default function* rootSaga() {
  yield all([
    watchTodoActions(),
  ]);
}