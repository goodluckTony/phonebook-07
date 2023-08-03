import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { api } from "../api/apiSlice";
// import phoneBook from "./phoneBook/reducer";

export const store = configureStore({
  reducer: {
    rootReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
 