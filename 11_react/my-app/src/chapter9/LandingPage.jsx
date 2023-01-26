import { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(isLoggedIn);


  const onClickLogin = () => {
    setIsLoggedIn(true);
  };

  const onClickLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Toolbar 
        // 로그인 상태, 이벤트, 핸들러를 툴바 컴포넌트로 넘겨 로그인 여부에 따라 툴바의 렌더링이 바뀜
        isLoggedIn = {isLoggedIn} 
        onClickLogin = {onClickLogin}
        onClickLogout = {onClickLogout}
      />
      <div style={{ padding: 16 }}>리액트 공부 사이트</div>
    </div>
  );
}

export default LandingPage;