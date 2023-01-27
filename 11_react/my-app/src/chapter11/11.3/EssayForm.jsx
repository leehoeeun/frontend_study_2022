import { useState } from "react";

function EssayForm() {
  
  const [value, setValue] = useState('가장 좋아하는 것에 대한 에세이를 장석하세요');

  const handleChange = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
    setValue(e.target.value);  
    // e : 이벤트
    // e.target : 이벤트가 발생하는 타겟 - textarea
    // e.target.value : 이벤트가 발생하는 타겟의 입력값
  }

  const handleSubmit = () => {
    alert(`제출된 에세이: ${value}`);
  };
  
  return (  
    <div>
      <label htmlFor="">
        에세이:
        <textarea value={value} onChange={handleChange}/>
        {/* HTML DOM 요소에서는 텍스트를 자식으로 정의했지만 React에서는 value 속성을 사용 */}
        {/* <textarea>
          Hello, Hi~
        </textarea> */}
      </label>
      <button type="button" onClick={handleSubmit}>제출</button>
    </div>
    
  );
}

export default EssayForm;