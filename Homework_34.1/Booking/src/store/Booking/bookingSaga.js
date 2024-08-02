import { call, put, takeLatest } from 'redux-saga/effects';
import { sendBookingAPI } from '../../api/booking';
import { SEND_BOOKING_ACTION } from '../Booking';
import { FETCH_HOTELS_ACTION } from '../Hotels';

function* sendBookingSaga(action) {
  const controller = new AbortController();
  const { signal } = controller;

  try {
    const data = yield call(sendBookingAPI, action.payload, signal);
    yield put(FETCH_HOTELS_ACTION(data));
  } catch (error) {
    console.error('Booking failed', error);
  }
}

export default function* watchBookActions() {
  yield takeLatest(SEND_BOOKING_ACTION.type, sendBookingSaga);
}
