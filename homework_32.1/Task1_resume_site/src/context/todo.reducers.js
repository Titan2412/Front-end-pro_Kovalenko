import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  task: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addtask: (state, action) => {
      state.task.push({ id: Date.now(), text: action.payload })
    }
  }
});

export const { addtask } = todoSlice.actions;

export default todoSlice.reducer;