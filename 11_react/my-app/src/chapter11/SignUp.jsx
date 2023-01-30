import { useEffect, useRef } from "react";
import { useState } from "react";
// 사용자의 정보를 입력받는 가입 양식 컴포넌트 만들기

// 1. 이름 입력받기
// name이라는 state 정의
// 값이 변경되면 이를 처리하기 위한 handleChangeName() 함수 정의

// 2. 성별 입력받기
// gender라는 state 정의
// select 태그에는 총 두가지의 옵션이 들어감(남자, 여자)
// 값이 변경되면 이를 처리하기 위한 handleChangeGender() 함수 정의


// 3. 출력
// 이름과 성별을 입력하고 버튼을 누를 시 alert 창으로 입력된 이름과 성별 출력하기


// 각각의 state를 따로 선언해도 되고 객체 형태로 한 번에 관리해도 됨

function SignUp() {

  const [userName, setUserName] = useState('');
  const handleChangeName = (e) => {
  setUserName(e.target.value);
  }

  const optionEl = useRef(null);
  useEffect(() => {
    console.log(optionEl);
    console.log(optionEl.current[0].textContent);
    console.log(optionEl.current[1].textContent);

  }, []);

  const [userGenger, setUserGenger] = useState('남성');
  const handleChangeGender = (e) => {
    setUserGenger(e.target.ref);
  }

  const handleSubmit = () => {
    alert(`이름 : ${userName} / 성별 : ${optionEl} 이 맞다면 확인을 눌러주세요.`);
  }



  return (  
    <>
      <label>
        이름:
        <input 
          type="text" 
          name="userName"
          value={userName}
          onChange={handleChangeName}
        />
      </label>
      <br />
      <label>
        성별:
        <select value={userGenger} onChange={handleChangeGender} ref={optionEl}>
          <option value="male">남성</option>
          <option value="female">여성</option>
        </select>
      </label>
      <br />
      <button type="button" onClick={handleSubmit}>가입하기</button>
    </>
  );
}

export default SignUp;