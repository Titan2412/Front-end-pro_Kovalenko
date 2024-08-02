import { createSlice } from '@reduxjs/toolkit';
import { FETCH_HOTELS_ACTION, FETCH_HOTELS_SUCCESS, FETCH_HOTELS_FAILED } from './hotelsAction';

const initialState = {
  hotels: [],
  status: null,
  error: null,
};

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FETCH_HOTELS_ACTION, (state) => {
      state.loading = true;
    })
    builder.addCase(FETCH_HOTELS_SUCCESS, (state, action) => {
      state.loading = false;
      state.hotels = action.payload;
      state.error = '';
    })
    builder.addCase(FETCH_HOTELS_FAILED, (state, action) => {
      state.loading = false;
      state.hotels = [];
      state.error = action.payload;
    });
  },
});

export const hotelsReducer = hotelsSlice.reducer;