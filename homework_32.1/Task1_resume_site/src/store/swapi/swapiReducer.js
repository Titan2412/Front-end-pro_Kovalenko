import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  CLEAR_DATA
} from './types';

const initialState = {
  data: [],
  loading: false,
  error: null
};

export default function swapiReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case CLEAR_DATA:
      return {
        ...state,
        data: [],
        loading: false,
        error: null
      };
    default:
      return state;
  }
};