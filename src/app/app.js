import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature/problem1/todos/todoSlice";
import filterReducer from "../feature/problem1/filter/filterSlice";
import { apiSlice } from "../feature/api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    todo: todoReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: import.meta.env.MODE !== "production",
});
