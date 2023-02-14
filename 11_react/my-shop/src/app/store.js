import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../features/product/productSlice";

export const product = configureStore({
  reducer: {
    product: productReducer,
  },
});