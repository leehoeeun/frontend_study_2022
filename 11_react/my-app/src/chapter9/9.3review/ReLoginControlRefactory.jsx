import { useState } from "react";
import ReGreeting from "../9.1review/ReGreeting";

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

function ReLoginControlRefactory() { 

  // button을 빈 변수로 선언하고 각각 상황에 맞는 함수를 컴포넌트 한다. 
  let button; 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };
  
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <ReGreeting isLoggedIn={isLoggedIn}/>
      {isLoggedIn
      ? (button = <LogoutButton props={handleLogoutClick} />)
      : (button = <LoginButton props={handleLoginClick} />)
      }
    </div>
  );
}

export default ReLoginControlRefactory;