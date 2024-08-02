import { all } from 'redux-saga/effects';
import watchFetchHotels from './Hotels/hotelSaga';
import watchBookActions from './Booking/bookingSaga';

export default function* rootSaga() {
  yield all([watchBookActions(), watchFetchHotels()]);
}