import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature/todos/todoSlice";
import filterReducer from "../feature/filter/filterSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    filter: filterReducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(),
  devTools: import.meta.env.MODE !== "production",
});
