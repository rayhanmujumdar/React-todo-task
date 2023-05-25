import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleList: (state, action) => {
      state.status = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { toggleList } = filterSlice.actions;
