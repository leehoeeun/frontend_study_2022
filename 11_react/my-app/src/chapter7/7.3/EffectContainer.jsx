import { useState } from "react";
import EffectSummary from "./EffectSummary";

function EffectConteiner(props) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(true)}>나타나라</button>
      <button onClick={() => setIsVisible(false)}>사라져라</button>
      {isVisible && <EffectSummary />}   
      {/* short-surcuit 이라고 isVisible이 true면 뒤에 EffectSummary컨포넌트를 실행하고, false면 EffectSummary컨포넌트가 사라짐 */}
    </div>
  );

}

export default EffectConteiner;