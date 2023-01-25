import { useState } from "react";

function Couneter(props) {
  const [count, setCount] = useState(0);

  let wrongCount = 0;

  return (
    <div>
      <p>총 {count}번 클릭 했습니다.</p>
      <button onClick={() => {
        setCount(count + 1);
        console.log(count);
      }}
      >
        클릭
      </button>
    </div>
  );

}