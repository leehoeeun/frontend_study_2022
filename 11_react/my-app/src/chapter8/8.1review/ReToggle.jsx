import { useState } from "react";

function ReToggle() {
  // button을 누를 때마다 '켜짐<->꺼짐' 왔다갔다 토글 되도록
  // isToggleOn의 state가 변경될 때 마다
  // button이 '켜짐'<-> '꺼짐' 토글 되도록

  // isToggleOn을 useState 배열에 넣고
  // setIsToggleOn 함수를 통해 true, false로 변경되도록 handleClick 함수에 콜백함수로 만들어
  // button을 onClick할 때마다 handleClick 함수가 실행되도록 하고
  // isToggleOn을 삼항 연산자로~
  
  const [isToggleOn, setIsToggleOn] = useState(false);
  const handleClick = () => {
    setIsToggleOn(isToggleOn => !isToggleOn);
    console.log(isToggleOn);
  };

  return (
    <button onClick={handleClick}>
      {isToggleOn ? '켜짐' : '꺼짐'}
    </button>
  );
}

export default ReToggle;