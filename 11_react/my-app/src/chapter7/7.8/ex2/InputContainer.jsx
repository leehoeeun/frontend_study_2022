import { useState } from "react";
import useInput from "./useInput";

function InputContainer() {
  // const [inputValue, setInputValue] = useState('');

  // const handleChange = (e) => {
  //   setInterval(e.target.value);
  // };

  // const [inputValue, handleChange, handleSubmit] = useInput('');
  const [inputValue, handleChange, reset] = useInput('');

  // Quiz: 커스텀 훅에 넣어보기
  // const handleSubmit = () => {
  //   alert(inputValue);
  //   // setInputValue('')
  // };  // ----> useInput.jsx 로 옮기고 위에 11번줄 변수에 할당
  // ---->but 아래와 같은 경우!!!

  // 데이터 서버에 보내기전 작업은 컴포넌트마다 다를 수 있기 때문에
  // 커스텀 훅이 아닌 지금 jsx 파일에 넣어서 관리 해준다
  const handleSubmit = () => {
    alert(inputValue);
    reset();   // reset() 함수는 초기화 해주는 역할임
  };



  return (
    <div>
      <h1>입력양식</h1>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default InputContainer;