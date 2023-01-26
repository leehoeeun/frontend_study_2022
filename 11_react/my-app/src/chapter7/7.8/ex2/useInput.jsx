import { useState } from "react";

function useInput(initialValue) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  
  // const handleSubmit = () => {
  //   alert(inputValue);
  //   // setInputValue('')
  // };

  const reset = () => {
    setInputValue('');
  };
  
  // return [inputValue, handleChange, handleSubmit];  
  // 호출할 것이 두개 이상일 경우 배열을 쓴다
  // 함수가 담긴 handleChange를 호출하기 때문에 ()를 안붙인다. 붙이면 실행으로 호출이 아님

  return [inputValue, handleChange, reset];
}

export default useInput;