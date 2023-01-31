import { useState } from "react";

// 변하지 않는 값은 전역에 변수를 선언할 수 있다.
const scaleNames = {
  c: '섭씨',
  f: '화씨',
}

// 여러가지 단위의 온도를 입력하는 컴포넌트(자식 - 하위)
function TemperatureInput(props) {
  console.log(props);
  // const [temperature, setTemperature] = useState('');  // 부모에게 props를 받기 전

  const handleChange = (e) => {
    // setTemperature(e.target.value); // 부모에게 props를 받기 전

    // 해당 컴포넌트에서 state를 사용하지 않기 때문에 변경된 값을 상위 컴포넌트에 설정 필요
    props.onTemperatureChange(e.target.value);
  };

  return (  
    // fieldset태그: 입력양식 폼에서 관련된 것들끼리 그룹화 할 때 사용(박스가 그려짐)
    // legend태그: fieldset에 붙이는 설명
    <fieldset>
      <legend>온도를 입력하세요(단위: {scaleNames[props.scale]})</legend>
      {/* 상위 컴포넌트로부터 props를 통해 받아옴 */}
      <input type="text" value={props.temperature} onChange={handleChange}/>
    </fieldset>
  );
}

export default TemperatureInput;