import { useMemo, useState } from "react";

function HeavyCalculator() {
  const [number, setNumber] = useState(1);
  const [name, setName] = useState('');
  // name이 변경될 때마다 HeavyCalculator()함수가 실행되고, heavySum도 계속 호출된다 => 17번줄을 사용할 경우에만!! 해결은 19번줄에 

  const heavySum = (num) => {
    console.log('연산량이 많은 무거운 계산!!');
    let sum = 0;
    for (let i = 0; i <= 999999; i++) {
      sum = num + i;
    }
    return sum;
  };

  // const heavyResult = heavySum(number);

  // useMemo()를 사용 시
  const heavyResult = useMemo(() => {
    // 메모이제이션 할 값을 리턴
    return heavySum(number);
  }, [number]); // number 값의 변화가 없다면 이미 메모이제이션 한 값을 재사용

  return (
    <div>
      <input 
        type="number" 
        value={number}
        onChange={e => setNumber(Number(e.target.value))}
      />
      <p>무거운 계산: {heavyResult}</p>
      <input 
        type="text" 
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <p>이름: {name}</p>
    </div>
  );
}

export default HeavyCalculator;