import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent() {
  // 필요한 곳에서 useContext() 훅을 사용해서 데이터를 가져오기
  // useContext라는 훅을 통해 부모의 value를 ThemeContext에 가져옴
  // 그 다음 구조분해 할당으로 넣어줌
  // useContext는 부모에 provider를 찾아서 해당 정보를 가져옴, 없으면 기본값을 가져옴
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (  
    <div
      style={{
        width: '100vw',
        height: '100vh',
        padding: '1.5rem',
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white'
      }}
    >
      <p>테마 변경이 가능한 웹사이트 입니다.</p>
      <button type="button" onClick={toggleTheme}>테마 변경</button>
    </div>
  );
}

export default MainContent;