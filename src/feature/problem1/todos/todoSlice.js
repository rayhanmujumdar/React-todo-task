import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default todoSlice.reducer;
export const { todoAdded } = todoSlice.actions;
