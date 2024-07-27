import axios from 'axios';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from './swapiActions';

export const fetchSwapiData = (url) => async dispatch => {
  dispatch(fetchDataStart());
  try {
    const response = await axios.get(url);
    if (Array.isArray(response.data.results)) {
      dispatch(fetchDataSuccess(response.data.results));
    } else {
      dispatch(fetchDataSuccess([response.data]));
    }
  } catch (error) {
    const errorMessage = error.response?.data?.detail || error.message;
    dispatch(fetchDataFailure(errorMessage));
  }
};