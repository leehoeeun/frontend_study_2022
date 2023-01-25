import { useState } from "react";

function SetStateMerge(props) {
  const [result, setResult] = useState(2);

  const handleAdd = () => {
    console.log('handleAdd Start');
    // setResult(result + 5);
    setResult(result => result + 5);
    console.log('handleAdd end');
  };
  const handleSub = () => {
    console.log('handleSub Start');
    // setResult(result - 3);
    setResult(result => result - 3);
    console.log('handleSub end');
  };
  const handleMul = () => {
    console.log('handleMul Start');
    // setResult(result * 2);
    setResult(result => result * 2);
    console.log('handleMul end');
  };
  const handleDiv = () => {
    console.log('handleDiv Start');
    // setResult(result / 2);
    setResult(result => result / 2);
    console.log('handleDiv end');
  };
  const handleMixCalc = () => {
    handleAdd();  // 2 + 5 (콜백을 넘으면)
    handleMul();  // (2 + 5) * 2 (콜백을 넘으면)
  };
  // setState()는 비동기로 처리됨  *setState()란? set으로 시작하는 모든 함수를 의미함
  // 그래서 하나의 state를 동시에 여기저기서 수정하려고 할 때 문제 발생
  // 27, 28번줄 처럼 두가지를 한 번에 할 수 없음
  // setState()안에 그냥 인자값을 넣는게 아니라 콜백 함수 형태로 넣어주면 해결 됨
  // js에서 promise then 처럼 비동기 함수인데 동기 함수처럼 동작하는!!! (동기적 : 이전 결과를 기다렸다가 처리가 끝나면 그 다음이 실행되는 것)

  return (
    <div>
      <p>계산 결과: {result}</p>
      <button onClick={handleAdd}>+ 5</button>
      <button onClick={handleSub}>- 3</button>
      <button onClick={handleMul}>* 2</button>
      <button onClick={handleDiv}>/ 2</button>
      <button onClick={handleMixCalc}>MixCalc</button>
    </div>
  );
};

export default SetStateMerge;