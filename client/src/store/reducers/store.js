import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../actions/slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
