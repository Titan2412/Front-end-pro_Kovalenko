import { createAction } from '@reduxjs/toolkit';

export const FETCH_HOTELS_ACTION = createAction('hotels/fetchHotels');
export const FETCH_HOTELS_SUCCESS = createAction('hotels/fetchHotelsSuccess');
export const FETCH_HOTELS_FAILED = createAction('hotels/fetchHotelsFailed');