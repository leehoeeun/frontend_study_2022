import { useEffect, useState } from "react";

function CounterEffect(props) {
  
  const [count, setCount] = useState(0);
  
  // componentDidMount,componentDidUpdate 와 같은 방식으로 작동
  useEffect(() => {
    console.log('effect 실행!');

    // 브라우저 API를 이용하여 문서 타이틀을 업데이트
    document.title = `You clicked ${count} times`;

    // 이 예제에서는 effect는 한 번이 아니라 count가 변할 때마다 실행됨([count])
    // (심화) React가 다음 차례의 effect를 실행하기 전에 이전 렌더링에서 파생된 effect 또한 정리하려고 함
    // 정말로 딱 언마운트 될 때에만 effect 정리 함수가 실행되길 원하면 의존성 배열로 빈 배열([])을 넣어줘야 함!
    // return () => {
    //   console.log('clean-up 원조');
    //   document.title = 'Init Title';
    // };
  }, [count]);
  // effect 함수에서 빈배열일 때 Mount, Unmount일 때만 빈배열로 옮김
  // 의존성 배열에서 어떤 값이 변경 될 때 업데이트 되는지를 []괄호 안에 넣어주면 됨 빈배열일 경우 Mount, Unmount일 때만 업데이트 됨
  // 함수 컴포넌트 안에 선언되기 때문에 해당 컴포넌트의 props와 state에 접근가능

  // 언마운트 될 때만 동작하게 하려면 함수를 따로 적고 의존성 배열로 []빈배열을 적어준다
  // 현재는 언마운트 되는 상황이 없어서 아래 거를 볼 수가 없음
  // useEffect(() => {
  //   return () => {
  //     console.log('clean-up');
  //     document.title = 'Init Title';
  //   }
  // }, []);



  return (
    <div>
      <p>총 {count}번 클릭 했습니다.</p>
      <button onClick={() => {
        setCount(count + 1);

        // useEffect()에 넣는 것이랑 버튼 클릭 안에 넣는 것이랑 실행 시점이 다르기에 동작이 다름
        // 1. 처음 마운트 시에 실행 안됨(타이틀이 안바뀌어 있음)
        // 2. 이후 버튼 클릭했을 때 count 값이 반영이 제대로 안됨(set함수는 비동기 함수)
        // document.title = `You clicked ${count} times`;

        }}>클릭</button>
    </div>
  );
}

export default CounterEffect;


// set과 같은 비동기 함수에서 useEffect를 쓰는게 좋음
// useEffect()를 쓰는 케이스
// - 주로 처음 렌더링 시 해줘야 작업들
// 1) 특정 객체에 addEventListener()로 이벤트를 등록해야 할 때
// 예: window나 document 객체에 이벤트 줄 때, 단축키를 누르면 뭔가 효과가 나오는...그런
// 2) 에러가 떠서 페이지를 백 시켜야 할 때
// 예: 처음 렌더링 했을 때 렉이 걸려서 이전 페이지로 이동시키고자 할 때
// 3) 마운트 됐을 때 그 페이지를 이용할 수 있는 사용자인지 권한 체크
// 예: 해당 페이지를 이용하는 사용자 권한이 없는 경우 다시 백 시킬 때
// 4) 처음 렌더링 시 초기화 해줘야 할 작업들
// 5) 실행하는 로직이 있는 곳과 실행 결과를 보여주는 컴포넌트가 다른 곳인면 로직이 분리되서 가독성이 떨어지고 디버깅이 어려움
// 6) 데이터 패치 관련해서 작업을 많이 넣음
// 예: 만약 버튼을 눌렀을 때 데이터를 가져오는 로직을 넣게 되면 새로고침 시 초기화 됨 -> 다시 버튼을 눌러야 됨

// 정리!!
// onClick과 useEffect는 다른 용도
// onClick 속성으로 넣어준 콜백 함수는 "클릭 시 호출되는" 함수이고, 
// useEffect 내부에 있는 콜백 함수는 "랜더링 시 (의존성 배열에 따라) 호출되는" 함수임
// 어떻게 사용하는지에 따라 겹치는 결과도 있겠지만, 완전히 다른 의도를 가짐!
