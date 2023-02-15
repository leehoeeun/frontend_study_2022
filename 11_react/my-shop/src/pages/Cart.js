import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCount, increaseCount, selectCartList } from "../features/cart/cartSlice";

function Cart(props) {
  const dispatch = useDispatch();
  const cartList = useSelector(selectCartList);
  console.log(cartList);

  return (
    <>
      <Table hover>
        <thead>
          <tr>
            <th>No</th>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((cart, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{cart.title}</td>
                <td>
                  <button type='button' 
                    onClick={() => {dispatch(decreaseCount(cart.id))}}
                  >-</button>
                  {cart.count}
                  <button type='button' onClick={() => {dispatch(increaseCount(cart.id))}}>+</button>
                </td>
                <td>{cart.price * cart.count}</td>
              </tr>
            )
          })}

          {/* Quiz: 
            1) 전역 스토어에서 cartList를 꺼내오세요!
            2) cartList 반복 렌더링 + 데이터 바인딩
           */}


        </tbody>
      </Table>
    </>
  );
}

export default Cart;