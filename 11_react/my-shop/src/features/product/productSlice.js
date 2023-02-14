// import { createSlice } from '@reduxjs/toolkit';

import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: 0,
// };


// const productSlice = createSlice({
//   name: 'product',
//   initialState,
//   reducers: {

//   },
// });

// export const {} = shopperSlice.actions;
// export const selectProduct = (state) => state.product.value;
// export default productSlice.reducer;

const initialState = {
  productList: [],
  selectedProduct: null
};


// 상품정보을 담을 slice를 만듦
const propductSlice = createSlice({
  name: 'product',
  initialState, 
  reducers: {
    getAllProducts: (state, action) => {
      // console.log(action);
      // console.log(action.payload);
      state.productList = action.payload;
      // initialState변수의 productList에 접근한거임
    },
    getProductById: (state, action)=> {
      state.selectedProduct = action.payload
    },
  },
});

export const { getAllProducts, getProductById } = propductSlice.actions;

export default propductSlice.reducer;