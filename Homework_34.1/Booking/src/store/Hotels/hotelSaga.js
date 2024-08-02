import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchHotelsAPI } from '../../api/hotels';
import { FETCH_HOTELS_ACTION, FETCH_HOTELS_SUCCESS, FETCH_HOTELS_FAILED } from './hotelsAction';

function* fetchHotelsSaga() {
  const controller = new AbortController();
  const { signal } = controller;

  try {
    const data = yield call(fetchHotelsAPI, signal);
    yield put(FETCH_HOTELS_SUCCESS(data));
  } catch (error) {
    yield put(FETCH_HOTELS_FAILED(error.message));
  }
}

export default function* watchFetchHotels() {
  yield takeLatest(FETCH_HOTELS_ACTION.type, fetchHotelsSaga);
}