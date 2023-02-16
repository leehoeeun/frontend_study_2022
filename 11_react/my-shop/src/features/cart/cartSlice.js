import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

const initialState = {
  cartList: [
    {
      id: "1",
      title: "Arcsaber 11 Pro",
      price: 299000,
      count: 2  // 장바구니에 2개 담겨있다.
    },
    {
      id: "3",
      title: "Aerus Z",
      price: 199000,
      count: 3 
    },
  ],
};

// 장바구니 정보를 담을 slice를 만듦
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // 장바구니 수량을 변경하는 리듀서 함수 만들기
    /* Quiz: 상품의 id 값을 받아서 해당 상품의 수량을 1씩 증가/감소 
      1) 리듀서 만들기
      2) 액션 생성 함수 export
      3) 버튼 클릭 시 액션 객체를 dispatch()
      4) 요청 보낼 때 id값을 payload에 담아 보내기    
    */
    increaseCount: (state, action) => {
      // console.log(initialState.cartList);
      // console.log(initialState.cartList[0].id);
      // console.log(action);
      // console.log(state.value);
      // state.value += 1;
      // { type: '', payload: id값 }
      const targetItem = state.cartList.find((cart) => {return cart.id === action.payload; });
      targetItem.count += 1;
      console.log(targetItem.count);
      console.log(action.payload);
    },
    decreaseCount: (state, { payload: id }) => {
      const targetItem = state.cartList.find((cart) => {return cart.id === id; });
      targetItem.count -= 1;
      console.log(targetItem.count);
    },
    
    // 장바구니에 아이템을 추가하는 리듀서
    // 이미 장바구니에 들어가 있는 상품이면 카운트만 증가시켜야 하고,
    // 장바구니에 없는 상품이면 새롭게 추가
    addItemToCart: (state, { payload:item }) => {
      // item = { id, title, price, count }; 를 받아옴
      // find()를 사용하여 해당 상품이 있는지 찾고~
      console.log(item);
      const targetItem = state.cartList.find((cart) => { return cart.id === item.id; });
      if(targetItem) {
        // console.log(addItem.count);
        targetItem.count += item.count;
      }else {
        // console.log(targetItem);
        // console.log(item);
        state.cartList.push(item);
      }
    },
    // Quiz: 장바구니에서 삭제
    removeItemFromCart: (state, { payload : id }) => {
      console.log(id);
      const targetIndex = state.cartList.findIndex((cart) => { return cart.id === id });
      console.log(targetIndex);
      state.cartList.splice(targetIndex, 1);
    }, 
  },
});

export const { increaseCount, decreaseCount, addItemToCart, removeItemFromCart } = cartSlice.actions;

export const selectCartList = state => state.cart.cartList;

export default cartSlice.reducer;