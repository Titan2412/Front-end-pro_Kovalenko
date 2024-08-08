import { call, put, takeEvery } from 'redux-saga/effects';
import { ADD_TODO, LOAD_TODOS, DELETE_TODO, COMPLETED_TODO, CLEAR_TODOS, RENAME_TODO } from './todoActions';
import { fetchTodos, postTodo, deleteTodoById, putTodo, deleteAllTodos, renameTodo } from '../../api/api';
import { addTodoSuccess, loadTodosSuccess, deleteTodoSuccess, completedTodoSuccess, clearTodosSuccess, renameTodoSuccess } from './todoSlice';

function* addTodoSaga(action) {
  try {
    const newTodo = yield call(postTodo, action.payload);
    yield put(addTodoSuccess(newTodo));
  } catch (e) {
    console.error(e);
  }
}

function* loadTodosSaga() {
  try {
    const todos = yield call(fetchTodos);
    yield put(loadTodosSuccess(todos));
  } catch (e) {
    console.error(e);
  }
}

function* deleteTodoSaga(action) {
  try {
    yield call(deleteTodoById, action.payload);
    yield put(deleteTodoSuccess(action.payload));
  } catch (e) {
    console.error(e);
  }
}

function* completedTodoSaga(action) {
  try {
    const completedTodo = yield call(putTodo, action.payload.id, action.payload);
    yield put(completedTodoSuccess(completedTodo));
  } catch (e) {
    console.error(e);
  }
}

function* clearTodosSaga() {
  try {
    yield call(deleteAllTodos);
    yield put(clearTodosSuccess());
  } catch (e) {
    console.error(e);
  }
}

function* renameTodoSaga(action) {
  try {
    const renTodo = yield call(renameTodo, action.payload.id, { title: action.payload.title });
    yield put(renameTodoSuccess(renTodo));
  } catch (e) {
    console.error(e);
  }
}

export function* watchTodoActions() {
  yield takeEvery(ADD_TODO, addTodoSaga);
  yield takeEvery(LOAD_TODOS, loadTodosSaga);
  yield takeEvery(DELETE_TODO, deleteTodoSaga);
  yield takeEvery(COMPLETED_TODO, completedTodoSaga);
  yield takeEvery(CLEAR_TODOS, clearTodosSaga);
  yield takeEvery(RENAME_TODO, renameTodoSaga);
}
