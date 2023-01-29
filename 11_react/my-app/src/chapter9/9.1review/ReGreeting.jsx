// isLoggedIn(로그인 여부)가 true(로그인 상태)이면
// Welcome back! 문구가 화면에 출력 되고
// false(로그아웃 상태)면
// Please sign up! 문구가 화면에 출력되게 하라
// 로그인 문구 - UserGreeting()함수/컴포넌트에 담기
// 로그아웃 문구- GuestGreeting()함수/컴포넌트에 담기


// isLoggedIn = {false} 또는 {true} 로 내려왔다고 치고
function UserGreeting() {
  return(
    <h1>Welcome back!</h1>
  );
}

function GuestGreeting() {
  return(
    <h1>Please sign up!</h1>
  );
}

function ReGreeting(props) {
  console.log(props);
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }else {
    return <GuestGreeting />;
  }
}

export default ReGreeting;