// 로그인 전 상태면, 화면에 'Please sign up!'라고 문구를 출력하고
// 로그인 상태면, 화면에 'Welcome back!'이라고 문구를 출력한다.

import { useState } from "react";
import ReGreeting from "../9.1review/ReGreeting";

// handleLoginClick - Login 버튼을 불러옴
// handleLogoutClick - Logout 버튼을 불러옴

function LoginButton(props) {
  console.log(props);
  return(
    <button onClick={props.props}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  console.log(props);
  return(
    <button onClick={props.props}>
      Logout
    </button>
  );
}


function ReLoginControl() {
  // button을 빈 변수로 선언하고 각각 상황에 맞는 함수를 컴포넌트 한다. 
  let button; 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };
  
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    button = <LogoutButton props={handleLogoutClick} />;
  }else {
    button = <LoginButton props={handleLoginClick} />;
  }

  return (
    <div>
      <ReGreeting isLoggedIn={isLoggedIn}/>
      {button}
    </div>
  );
}

export default ReLoginControl;