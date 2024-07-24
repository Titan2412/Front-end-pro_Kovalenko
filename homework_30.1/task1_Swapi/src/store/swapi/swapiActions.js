import axios from 'axios';
import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  CLEAR_DATA
} from './types';

export const fetchDataStart = () => ({
  type: FETCH_DATA_START
});

export const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: data
});

export const fetchDataFailure = error => ({
  type: FETCH_DATA_FAILURE,
  payload: error
});

export const ClearData = () => ({
  type: CLEAR_DATA,
});


export const fetchSwapiData = (url) => async dispatch => {
  dispatch(fetchDataStart());
  try {
    const response = await axios.get(url);
    dispatch(fetchDataSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};