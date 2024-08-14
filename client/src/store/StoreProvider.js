"use client";
import { store } from "./reducers/store";
import { Provider } from "react-redux";

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
