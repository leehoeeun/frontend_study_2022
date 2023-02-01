import { createGlobalStyle } from "styled-components"; // styled-reset을 사용하는 첫번째 방법
// import { Reset } from "styled-reset"; // styled-reset을 사용하는 두번째 방법
import reset from "styled-reset";   // 깃허브에서 js용 reset을 React에 맞게 만든 공용
import TodoInsert from "./component/TodoInsert";
import TodoList from "./component/TodoList";
import TodoTemplate from "./component/TodoTemplate";
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
  // console.log(reset);
  return (
    <>
      {/* styled-reset을 사용하는 첫번째 방법  */}
      {/* <Reset />   */}
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;


// 패키지 설치
// npm install styled-components style-reset react-icons

// react-icons : 리액트에서 다양한 아이콘을 쓸 수 있는 라이브러리
// SVG 형태의 아이콘을 리애트 컴포넌트 처럼 쉽게 사용
// 커스텀은 props 또는 CSS 스타일로 변경 가능