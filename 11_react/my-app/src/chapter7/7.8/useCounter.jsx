// useCounter() 커스텀 훅
import { useState } from "react";

// initialValue라는 초기 카운트 값을 받아서 count라는 이름의 state생성 시 초기값으로 제공
// 카운트 증가 및 감소를 편리하게 할 수 있도록 함수는 제공하는 훅
// 어떤 함수 컴포넌트에서든지 카운트 기능을 쉽게 사용

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => {  // count를 1씩 증가시키고자 함
    setCount((count) => count + 1);  // setCount count + 1 로 적을 수 있지만, 여러개를 동시에 동작시키고자 했을 때 콜백함수가 유용함! 비동기 처리가 동기적으로 동작해서 모든 계산을 진행함
  };
  const decreaseCount = () => {  // count를 1씩 감소시키고자 함
    setCount((count) => Math.max(count - 1, 0));  // Math.max(인자, 0) 으로 적으면 어떤 수가 나오든 0 밑으로 결과값이 안나옴.
  };

  return [count, increaseCount, decreaseCount];


}

export default useCounter;