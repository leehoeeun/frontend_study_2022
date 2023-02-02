import { useCallback, useEffect, useRef, useState } from "react";
import { createGlobalStyle } from "styled-components"; // styled-reset을 사용하는 첫번째 방법
// import { Reset } from "styled-reset"; // styled-reset을 사용하는 두번째 방법
import reset from "styled-reset";   // 깃허브에서 js용 reset을 React에 맞게 만든 공용
import TodoInsert from "./component/TodoInsert";
import TodoList from "./component/TodoList";
import TodoTemplate from "./component/TodoTemplate";
import { v4 as uuidv4 } from 'uuid';   // TODO
// 글로벌(공통) 스타일 적용  index.css에서 해도 무방하지만
// styled-component를 사용해서 글로벌 스타일을 적용하고 싶다면..?
// createGlobalStyle을 사용하면 컴포넌트가 만들어지고 이를 렌더링하면 됨

const GlobalStyle = createGlobalStyle`
  /* reset css 적용 */ // styled-reset을 사용하는 두번째 방법
  ${reset}

  /* 글로벌(공통)스타일 */
  body {
    background: #e9ecef;
  }
`;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '수업 교안 작성하기',
      checked: true
    },
    {
      id: 2,
      text: '시험 채점하기',
      checked: true
    },
    {
      id: 3,
      text: '단계별 실습 예제 만들기',
      checked: false
    }
  ]);
  // console.log(reset);

  // TODO: 로컬 스토리지에서 가져오기
  // 활용예 : 장바구니, 아이디 기억하기 등
  useEffect(() => {
    const dbTodos = JSON.parse(localStorage.getItem('todos')) || [];   // todos에 있는 키값을 불러온다
    setTodos(dbTodos);
  }, []);

  // todos 배열에 새 객체를 추가하기 위한 handleInsert()함수 정의
  // 새 객체를 만들 때마다 id값에 1씩 더해 주어야 하는데 useRef()를 사용하여 변수 생성
  // useState는 화면이 재렌더링 될 때 쓰는 걸 권장하고, id값은 렌더링 되는 정보가 아니기 때문에 ref사용
  // 단순히 새로운 항목을 만들 때 참조되는 값임
  const nextId = useRef(4);

  // props로 전달해야 할 함수를 만들 때는 useCallback()을 사용해본다!
  // 렌더링 돌 때마다 자식에게 props를 전달하는게 불필요할 때!! 이거를 쓰면 좋음
  // useCallback() 미사용 시 컴포넌트가 재렌더링 될 때마다 새롭게 정의됨
  // => props로 넘겨지는 값이 바뀌므로 자식 컴포넌트가 재렌더링
  // const handleInsert = () => {};
  const handleInsert = useCallback((text) => {  //handleInsert로 호출될 때 
    const todo = {
      // id: nextId.current,
      id: uuidv4(),
      text,     //  text: text, 처럼 key, value값이 같으면 생략하여 쓸 수 있음
      checked: false,
    };

    // 방법1 - 이전 방법
    // const copyTodos = [...todos];
    // copyTodos.push(todo);
    // setTodos(copyTodos);

    // 방법2 - 배열의 내장 함수 이용
    setTodos(todos.concat(todo));  // TODO: 새로운 배열을 반환함 그거를 setTodos함수에 넣음

    nextId.current += 1; // nextId에 1씩 더하기

    // 로컬 스토리지에 저장  // ('이름', JSON 문자로 변경)
    localStorage.setItem('todos', JSON.stringify(todos.concat(todo)))  // 배열을 JSON으로 변경필요!

  }, [todos]);
  // TODO : []에 빈값이면 마운트 될 때 한 번만 usecallbak이 렌더링 됨
  // 그래서 []값에 todos가 추가 될 때마다 렌더링 될 수 있도록 [todos]라고 씀

  // todos 배열에서 id로  항목을 지우기 위한 handleRemove() 함수 정의
  // 불변성을 지키면서 배열의 요소를 제거해야할 때 filter()활용
  const handleRemove = useCallback((id) => {

    // TODO : 방법1 - 이전 방법
    // const copyTodos = [...todos];
    // const targetIndex = todos.findIndex((todo) => todo.id === id);  // TODO: 클릭한 index를 찾아서 삭제한다
    // // findIndex()는 해당 파일의 인덱스를 반환해줌, find()는 해당 파일 전체를 가져옴
    // copyTodos.splice(targetIndex, 1);
    // setTodos(copyTodos);

    // TODO: 방법2 - 배열의 내장 함수 이용
    // filter() : 기존의 배열은 변경하지 않고 특정 조건을 만족하는 요소들만 따로 추출하여 새로운 배열을 만듦
    // 테스트  함수에서는 true 또는 false를 반환해야 하며, 여기서는 true를 반환하는 경우에만 새로운 배열에 포함됨
    setTodos(todos.filter((todo) => todo.id !== id));

    // TODO : 로컬 스토리지에 저장
    localStorage.setItem('todos', JSON.stringify(todos.filter((todo) => todo.id !== id))) 

  }, [todos]);

  // todos배열의 특정 요소를 수정하기 위한 handleToggle()함수 정의
  // 불변성을 유지하면서 배열의 특정 요소를 업데이트 해야할 때 map()활용
  const handleToggle = useCallback((id) => {
    // TODO : 방법1 - 이전 방법
    // const copyTodos = [...todos];
    // const target = todos.find((todo) => todo.id === id);
    // target.checked = !target.checked;
    // const targetIndex = todos.findIndex((todo) => todo.id === id);
    // copyTodos[targetIndex] = target;
    // setTodos(copyTodos);

    // 방법2 - 배열의 내장함수 이용
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    ));
    // TODO : 로컬 스토리지에 저장
    localStorage.setItem('todos', JSON.stringify(todos.map((todo) =>
    todo.id === id ? { ...todo, checked: !todo.checked } : todo
  )));

  }, [todos]);

  return (
    <>
      {/* styled-reset을 사용하는 첫번째 방법  */}
      {/* <Reset />   */}
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert onInsert={handleInsert} />
        <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle} />
      </TodoTemplate>
    </>
  );
}

export default App;


// 패키지 설치
// npm install styled-components styled-reset react-icons

// react-icons : 리액트에서 다양한 아이콘을 쓸 수 있는 라이브러리
// SVG 형태의 아이콘을 리애트 컴포넌트 처럼 쉽게 사용
// 커스텀은 props 또는 CSS 스타일로 변경 가능



// TODO
// HTML 웹 스토리지란?
// 웹 스토리지를 사용하면 웹 앱이 사용자의 브라우저 내에 로컬로 데이터를 저장할 수 있음(브라우저끼리 연동 안됨)
// 웹 스토리지는 도메인 당 사용 가능
// 같은 도메인의 모든 페이지는 동일한 데이터를 저장하고 액섹스함

// 웹 스토리지 객체
// 웹 스토리지는 데이터를 저장하기 위한 두 가지 객체를 제공
// window.localStorage - 만료 날짜 없이 데이터를 저장함
// window.sessionStorage - 한 세션에 대한 데이터를 저장(브라우저 탭을 닫으면 데이터가 손실됨)