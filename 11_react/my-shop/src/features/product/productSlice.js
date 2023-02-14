import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};


const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {

  },
});

export const {} = shopperSlice.actions;
export const selectProduct = (state) => state.product.value;
export default productSlice.reducer;