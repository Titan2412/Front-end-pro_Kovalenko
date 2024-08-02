import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'booking',
  initialState: {
    loading: false,
    success: false,
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase('booking/sendBooking/pending', (state) => {
        state.loading = true;
        state.success = false;
        state.error = '';
      })
      .addCase('booking/sendBooking/fulfilled', (state) => {
        state.loading = false;
        state.success = true;
        state.error = '';
      })
      .addCase('booking/sendBooking/rejected', (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const bookingReducer = bookSlice.reducer;
