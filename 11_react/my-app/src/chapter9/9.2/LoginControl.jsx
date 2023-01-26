import { useState } from "react";
import Greeting from "../9.1/Greeting";

function LoginButton(props) {
  console.log(props);
  return(
    <button
      onClick={props.propsClick}
    >
      Login
    </button>
  );
}

function LogoutButton(props) {
  console.log(props);
  return(
    <button
      onClick={props.propsClick}
    >
      Logout
  </button>
  );
}

function LoginControl(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };
  
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;
  // 버튼 변수에 컴포넌트 대입(결과적으로는 리액트 엘리먼트가 저장됨)
  if (isLoggedIn) {
    // isLoggedIn가 true면 로그아웃 버튼을 노출함 
    button = <LogoutButton propsClick = {handleLogoutClick} />;
  }else {
    // isLoggedIn가 false면 로그인 버튼을 노출함
    button = <LoginButton propsClick = {handleLoginClick} />;
  }

  return (
    <div>
      <Greeting isLoggedIn = {isLoggedIn} />
      {button}
      {/* jsx 내부, 엘리먼트 안에서 js는 모두 중괄호로 표시한다! 변수도 js이기 때문에 {}중괄호로 표기한다 */}
    </div>
  );
}

export default LoginControl;