import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value:0,
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    increment: (state) => {
      state.value +=1;
      console.log(state);
    },
    decrement: (state) => {
      state.value -= 1;
      console.log(state);
    },
    incrementByAmount: (state, action) => { 
      console.log(action);
      state.value += action.payload;
    },
  },
});
console.log(shopSlice);

export const { increment, decrement, incrementByAmount } = shopSlice.actions;
export const selectShop = (state) => state.shop.value;
export default shopSlice.reducer;


// 액션은 store에 보내는 역할, 단, dipatch를 이용
// actions에 타입이 있고, state 변경함수 reducer가 있음
// state가 변경됨에 따라 재렌더링이 일어난다


// 액션객체를 디스패티를 톨해 스토어에 보냄
// 타액션에 타입을 보고 스토어에 어떤 리듀스를 쓸지 결정함