import { useCallback } from "react";
import { useEffect, useState } from "react";

// useCallback() 함수 용도
// 동일한 함수에 값만 바꿔서 쓸 때, 함수는 재렌더링 되지 않도록 하고 싶을 때 사용

function ParentComponent() {
  const [count, setCount] = useState(0);

  // 사용성 높음!!! 거의 모든 함수에 쓰일 만큼!!
  // count state가 변경되서 재렌더링 될 때마다 매번 함수가 새로 정의됨(실행이 아니라 정의!)
  // TODO : 주석 해제
  // 1) useCallback() 사용 안한 경우
  // const handleClick = () => {
  //   // 클릭 이벤트 처리
  //   setCount(count + 1);
  // };

  // 새롭게 정의할 필요 없을 때, 계속 재렌더링 할 필요 없이 얘를 계속 쓰겠다
  // useCallback()안에 넣으면 컴포넌트가 마운트 될 때만 함수가 정의됨
  // TODO : 주석해재
  // 2) useCallback() 사용했으나, 버튼에 count 개수가 안올라감(count에 함수를 안씀)
  // const handleClick = useCallback(() => {
  //   // 클릭 이벤트 처리
  //   setCount(count + 1);
  // }, []);
  
  // TODO : 주석해재
  // 3) useCallback() 사용했으나, [] 에 count를 써서 count가 변할 때 같이 변함/ useCallback()울 썼으나 1번과 동일한 결과를 낳음
  // const handleClick = useCallback(() => {
  //   // 클릭 이벤트 처리
  //   setCount(count + 1);
  // }, [count]);

  // 
  // TODO : 주석해재
  // 4) useCallback() 사용하고, 버튼에 count 개수는 따로 올라가도록 count에 함수를 씀
  // 즉, count는 변화 되지만, useCallback() 함수는 랜더링 되지 않도록!!
  const handleClick = useCallback(() => {
    // 클릭 이벤트 처리
    setCount(count => count + 1);
  }, []);
  
  // 새로 정의되는지 log로 확인
  useEffect(() => {
    console.log('handleClick을 새롭게 정의:', handleClick);
  }, [handleClick]);
  // handleClick에 변화가 있을 때마다 새롭게 함수가 실행되는 것임
  
  return (
    <div>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}

export default ParentComponent;