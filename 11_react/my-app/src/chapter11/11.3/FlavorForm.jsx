import { useState } from "react";

function FlavorForm() {

  const [value, setValue] = useState('');

  const handleSubmit = () => {
    alert(`좋아하는 맛은 ${value}이군요!`);
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (  
    <>
    <label>
      좋아하는 맛 선택: 
      <select value={value} onChange={handleChange}>
        <option value="grapefruit">자몽</option>
        <option value="lime">라임</option>
        <option value="coconut">코코넛</option>
        <option value="mango">망고</option>
        {/* Quiz. map()함수를 이용하여 서버로부터 전달받은 option을 뿌려주기!!  */}
        {/* {flavors.map((flavor) => {
          <option>{flavor.name}</option>
        })} */}
      </select>
    </label>
    <button type="button" onClick={handleSubmit}>제출</button>
    </>
  );
}

export default FlavorForm;