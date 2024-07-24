import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import swapiReducer from './swapi/swapiReducer';

const rootReducer = combineReducers({
  swapi: swapiReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

