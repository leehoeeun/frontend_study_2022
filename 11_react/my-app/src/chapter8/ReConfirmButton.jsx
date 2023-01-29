import { useState } from "react";

function ReConfirmButton() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const handleConfirm = () => {
    console.log(isConfirmed);
    setIsConfirmed(isConfirmed => !isConfirmed);
    console.log(isConfirmed);
  };

  return (
    <button
      onClick={handleConfirm}
      disabled={isConfirmed}
    >
      {isConfirmed? '확인됨' : '확인하기'}
    </button>
  );
}

export default ReConfirmButton;

// Quiz : 버튼을 누르면 '확인하기'가 '확인됨'으로 변경되면서 버튼 비활성화 처리 해보기
// 무엇을 해야 할까?
// isConfirmed 라는 상태(state) 만들기
// 버튼을 클릭하면 isConfirmed 상태를 바꾸는 handleConfirm()으로 이벤트 핸들러(함수) 만들기
// 조건부 렌더링으로 버튼의 내용을 '확인하기'-> '확인됨'으로 바꾸기
// disabled 속성 이용해서 버튼 비활성화