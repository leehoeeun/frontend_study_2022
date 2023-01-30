import { useState } from "react";

function Reservation() {
  // 여러개의 입력을 제어하려면 => 여러개의 state선언
  const [breakfast, setBreakfast] = useState(true);
  const [numberOfGuests, setNumberOfGuests] = useState(2);
  const handleBreakfastChange = (e) => {  // e는 이벤트 객체명을 내가 임의로 정해주면 됨
    setBreakfast(e.target.checked);
  }
  const handleGuestChange = (e) => {
    setNumberOfGuests(e.target.value);
  }

  const handleSubmit = () => {
    alert(`조식 여부: ${breakfast}, 투숙객 수: ${numberOfGuests}가 맞다면 확인을 눌러주세요.`);
  }


  return (
    <>
      <label>
        조식 여부:
        <input 
          type="checkbox"
          // checked속성은 checkbox랑 radio 타입에 존재하고 boolean 타입의 값 
          checked={breakfast}
          onChange={handleBreakfastChange}  // 체크가 될 때마다 handleBreakfastChange 함수가 실행되도록
        />
      </label>
      <br />
      <label>
        투숙객 수:
        <input 
          type="number" 
          value={numberOfGuests}
          onChange={handleGuestChange}
        />
      </label>
      <button
        type="button"
        onClick={handleSubmit}
      >
        제출
      </button>
    </>
  );
}

export default Reservation;