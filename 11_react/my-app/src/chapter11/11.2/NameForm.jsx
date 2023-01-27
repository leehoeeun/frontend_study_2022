import { useState } from "react";

function NameForm() {
  // input에 입력한 값을 저장해주는 state를 만들어준다
  const [value, setValue] = useState('');

  const handleChang = (e) => {
    // e.target.value : 해당 타겟(<input>)에 입력된 값
    // TODO : 아래 한줄 주석 해제
    // setValue(e.target.value)
    // console.log(e);
    // console.log(e.target.value);
    // 입력값이 state를 통해 관리되는 이런 방식을 제어 컴포넌트라 부름

    // 만약 사용자가 입력한 모든 알파벳을 대문자로 변경시켜서 관리하고 싶다면...?
    setValue(e.target.value.toUpperCase());
    
  };


  const handleSubmit = (e) => {
    alert(`입력한 이름: ${value}`);  
    e.preventDefault();   // 해당 event의 기본동작을 막음
    // 여기서 submit 이벤트의 기본 동작은 새로 고침
  };
  
  
  return (  
    // 여기서는 기존 HTML 방식과 차이를 보이기 위해 form태그를 그대로 사용(form 태그 자체를 안쓴다고 보면됨)

    // 아래와 같이 쓰는게 일반적!!!!!!!!
    // <button type="button" onClick={handleSubmit}>제출</button>

    // <form action="url" method="GET">
    //   <input type="submit"/>
    // </form>
    
    // <form action="url" method="GET">
    // <button onClick={함수명}>제출하기</button>
    // </form>

    // button을 누르면 제출(submit)이 되고 handleSubmit 함수가 동작한다
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        이름:
        <input type="text" value={value} onChange={handleChang}/>  
        {/* input에 value 속성 - input에 입력한 값을 value에 담아서 보낸다  */}
        {/* input에 onChange 속성 - input에 입력한 값이 있을 때마다 상태를 변ㅂ화 시키는 함수 */}
      </label>
      <button type="submit">제출</button>
      {/* type="submit" 이벤트의 기본 속성, 클릭 후 화면 reload됨 */}
    </form>


  );
}

export default NameForm;