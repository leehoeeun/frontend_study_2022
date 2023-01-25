import { useRef, useState } from "react";

// useRef()의 두번째 용도
// 지역변수를 

function ComponentVariable() {
  const [count, setCount] = useState(1);

  console.log('컴포넌트 렌더링!!');

  // 렌더링 될 때마다 초기화 됨
  let id = 1;
  console.log(id);

  // useRef()에 넣어서 변수에 담으면 함수가 재렌더링 되더라도 초기화가 안됨
  // 매번 렌더링 될 때마다 항상 같은 레퍼런스 객체를 반환
  // 즉, 렌더링될 때 값이 초기화 되지 않음
  // 렌더링과 관련 없는 데이터는 useRef()를 사용
  // 이거는 주로, 화면에 나타낼 데이터 수치가 아니면, 뒤에서만 쓰이는 데이터면, 값이 변할 때마다 렌더링 될 필요 없는 애를 useRef()를 담는다
  const idRef = useRef(1);
  console.log(idRef);

  return (
    <div>
      <p>총 {count} 번 렌더링</p>
      <button onClick={() => {
        setCount(count + 1);
      }}>
        count 업데이트
      </button>
      <button onClick={() => {
        id++;
        idRef.current++;
        console.log(id);  // id는 재렌더링 하면 12번줄을 타기 때문에 다시 1로 초기화 됨
      }}>
        id 업데이트
      </button>
    

    </div>

  );
}

export default ComponentVariable;

// Hook을 사용자 용도에 맞게 만들 수 있는데 그것을 Custom Hook이라고 한다.
// 자바스크립트에서 특정 기능을 함수로 만들어 재사용하는 것과 동일