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
  selectedProduct: {},    // 상품 하나이기 때문에 {}를 씀. 여러개일 경우 []대괄호!
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

export const selectProductList = state => state.product.productList;
export const selectSelectedProduct = state => state.product.selectedProduct;

export default propductSlice.reducer;