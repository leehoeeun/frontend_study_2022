import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/counter/shopSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
  }
});