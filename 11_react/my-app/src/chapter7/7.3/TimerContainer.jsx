import { useState } from "react";
import Timer from "./Timer";

function TimerConTainer() {
  // usf쓰고 enter 키 누르면 useState 자동 생성됨
  // showTimer쓰고 tab키 누르면 s가 대문자 S로 됨
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      {showTimer && <Timer />}
      <button
      onClick={() => setShowTimer(!showTimer)}
      >
        on/off 토글
      </button>
    </div>
  );
}

export default TimerConTainer;