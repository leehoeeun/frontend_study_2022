import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectShop } from './shopSlice';
import { increment, decrement, incrementByAmount, selectCount } from "./shopSlice";

function Shop(props) {
  const count = useSelector(selectShop);
  const dispatch = useDispatch();
  // console.log(state.shop.value);
  // console.log(state);

  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div>
        <button
          type='button'
          onClick={() => dispatch(decrement())}
        >-1감소</button>
        <span>{count}</span>
        <button
          type='button'
          onClick={() => dispatch(increment())}
        >+1증가</button>
      </div>
      <div>
        <input 
          type="text" 
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button type='button'
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}

export default Shop;