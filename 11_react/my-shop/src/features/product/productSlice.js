// import { createSlice } from '@reduxjs/toolkit';

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../api/productAPI";

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
  status: 'idle',  // 빈문자'' 여도 상관 없음, 아무거나 지으셈
};

// thunk를 이용한 비동기 작업 처리하기
// 이점?
// 1) API 요청에 대한 상태 관리가 쉽게 가능
// (요청시작 - 로딩중, 요청 성공 또는 실패 시 로딩이 끝났음을 명시)
// 2) 요청이 성공하면 응답에 대한 상태 관리, 실패하면 에러에 대한 상태 관리 등
// thunk: 미들웨어 = 액션을 dispatch했을 때 리듀서에서 이를 처리하기에 앞서 사전에 지정된 작업을 실행
// 액션과 리듀서 중간에 끼어있는 중간자 역할, 액션 -> (미들웨어) -> 리듀서
// createAsyncThunk()는 비동기 작업을 처리하는 액션 생성함수를 만들어줌
export const getMoreProductAsync = createAsyncThunk(
  'product/getMoreProductAsync',   // action type -  product는 name이고, 뒤에 액션명은 개발자가 알라서 짓는다
  async () => { // action이 발생했을 때 실행할 비동기 작업 (미들웨어) -> pending으로 들어감
    const result = await getProducts();
    return result;  // 값을 반환하면 'fulfiled'로 바뀜, action.payload에 담겨 리듀서 함수로 전달됨 // pending(요청 딱 보냈을 때) -> fulfilled(전송 출발 전) -> reject(전송완료) 처리
  }
);

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
    getMoreProduct: (state, action)=> {
      // console.log(...action.payload);
      state.productList.push(...action.payload);  // array.push(추가할array) - 추가할 데이터를 배열 통으로 추가함
      // array.push(...추가할array) - 추가할 데이터를 배열에서 꺼내서 등록함 
    },
  },
  // 비동기 작업에는 extraReducers를 사용하여 함수를 만들면 됨
  extraReducers: (builder) => {
    builder
      .addCase(getMoreProductAsync.pending, (state) => {   // pending상태일 때 동작할 리듀서 첫번째 인자 : getMoreProductAsync.요청상태(pending) 두번째 인자는 함수
        state.status = 'loading';
      })
      .addCase(getMoreProductAsync.fulfilled, (state, action) => {   // fulfilled상태일 때 동작할 리듀서 
        state.status = 'complete';  // complete, success 등
        state.productList.push(...action.payload); 
      })
      .addCase(getMoreProductAsync.rejected, (state) => {   // rejected상태일 때 동작할 리듀서 
        state.status = 'fail';
      })
  }
});

export const { getAllProducts, getProductById, getMoreProduct } = propductSlice.actions;

export const selectProductList = state => state.product.productList;
export const selectSelectedProduct = state => state.product.selectedProduct;
export const selectStatus = state => state.product.status;

export default propductSlice.reducer;