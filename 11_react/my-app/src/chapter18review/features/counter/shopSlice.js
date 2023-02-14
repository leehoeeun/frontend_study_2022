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
      // console.log(state);
    },
    decrement: (state) => {
      state.value -= 1;
      // console.log(state);
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
