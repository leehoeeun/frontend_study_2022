import { useRef } from "react";

function FileInput() {

  const fileInput = useRef(null);  // fileInput에 초기값은 null
  const handleSubmit = () => {
    console.log(fileInput);
    console.log(fileInput.current);
    alert(`선택된 파일 - ${fileInput.current.files[0].name}`);  // useRef() 로 반환하는 객체 안에 current 라는 요소 하나만 있았음!!
  };

  return (  
    <>
      <label>
        파일업로드:
        <input type="file" ref={fileInput}/>
        {/* 프로그래밍적으로 값(value)을 설정할 수 없고 
        사용자만이 값을 설정할 수 있기 때문에 항상 비제어 컴포넌트*/}
        {/* 파일을 첨부하면 파일 이름을 읽기만 하는...->비제어 */}
        {/* 파일에 접근하기 위해서 DOM 노드의 ref를 만들어 접근해야 함 */}
      </label>
      <br />
      <button type="button" onClick={handleSubmit}>제출</button>
    </>
  );
}

export default FileInput;