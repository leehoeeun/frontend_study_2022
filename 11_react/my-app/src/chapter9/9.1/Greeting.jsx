// 따로 컴포넌트 만들어야 되는데 너무 간단해서 그냥 여기에 적겠음
function UserGreeting() {
  return (
    <h1>Welcome back!</h1>
  );
}

function GuestGreeting() {
  return (
    <h1>Please sign up!</h1>
  );
}


function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  console.log(isLoggedIn);

  // 로그인 여부에 따라 두 개의 컴포넌트를 선택적으로 보여줌
  if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }


}

export default Greeting;