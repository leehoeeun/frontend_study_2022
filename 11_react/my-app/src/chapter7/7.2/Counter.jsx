import { useState } from "react";

function Counter (props) {

  // state를 사용해서 값이 바뀔 때마다 재렌더링이 되도록 하겠다.
  const [count, setCount] = useState(0);  // 초기값으로 0 할당  // 무조건 useState로 쓸 것!!
  // useState()의 결과로 배열이 반환됨 -> [0, set함수]
  // (이름 지을 때 관례)변수명을 count로 state를 만들었으면 두번째 인수를 setCount로 짓는다
  // 첫번째 요소는 현재 변수를 의미하고, 두 번째 요소는 해당 변수를 갱신해주는 함수
  // 배열의 구조 분해 할당을 사용하여 변수 선언 및 할당

  // 만약 state 미사용 시
  let wrongCount = 0;
  // 값은 변해도 업데이트가 안됨
  

  return (
    <div>
      {/* state 사용 */}
      <p>총 {count}번 클릭 했습니다.</p>
      <button onClick={() =>{
        setCount(count + 1);
        console.log(count);
      }}
      >
        클릭
      </button>

      {/* state 미사용 */}
      <p>총 {wrongCount}번 클릭 했습니다.</p>
      <button onClick={() =>{
        wrongCount++;
        console.log(wrongCount);
      }}>
        클릭(잘못된 방법)
      </button>
    </div>
  );
}

export default Counter;