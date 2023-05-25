import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
  middleware: (defaultMiddleware) => defaultMiddleware().concat(),
  devTools: import.meta.env.MODE !== "production",
});
