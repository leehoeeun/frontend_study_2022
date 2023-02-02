import FancyBoder from "./FancyBorder";

function WelcomeDialog() {
  return (  
    <FancyBoder color='blue'>
      {/* FancyBoder 컴포넌트 박스 테두리 안에 있는 모든 자식 요소들은 children이라는 이름의 props로 전달됨 */}
      {/* 자식 엘리먼트로 무엇이 올지 모를 때 동적으로 전달 가능 */}
      {/* 모달창 쓸 때 모달 안에 내용이 어떻게 내려올지 모를 때! 재사용하기 위해 사용함 */}
      <h1 className="Dialog-title">   {/* children1 */}
        어서오세요.
      </h1>
      <p className="Dialog-message">  {/* children2 */}
        저희 우주선을 찾아주셔서 감사합니다!
      </p>
      <p className="Dialog-message">  {/* children3 */}
        1저희 우주선을 찾아주셔서 감사합니다!    {/* children3-children1 */}
        <span>2배열에 추가 되나?</span>        {/* children3-children2 */}
        <span>3배열에 추가 되나?</span>        {/* children3-children3 */}
      </p>
    </FancyBoder>
  );
}

export default WelcomeDialog;