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

function LoginControlRefactory(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };
  
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };


  return (
    <div>
      <Greeting isLoggedIn = {isLoggedIn} />
      {/* 삼항 연산자로 if-else 구문을 JSX내부에서 사용 */}
      {/* 조건에 따라 각기 다른 엘리먼트를 렌더링하고 싶을 때 사용 */}
      {isLoggedIn
        ? <LogoutButton propsClick = {handleLogoutClick} />
        : <LoginButton propsClick = {handleLoginClick} />
      }
    </div>
  );
}

export default LoginControlRefactory;