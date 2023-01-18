import React from "react";     // React.Fragment를 사용하기 위한 import가 있어야함(React.Fragment를 자동완성으로 작성해야 React 라이브러리가 생성됨)
import './JsxUse.css';  // 88번줄 에 css 적용을 위해서!

function JsxUse(props) {
  // JSX의 사용법(문법)
  // 1. 꼭 닫혀야 하는 태그
  const element = (   // 소괄호를 생략 가능하나, 가독성을 위해 ()소괄호를 씀. {}중괄호를 쓰면 객체로 인식해버림, 객체로 만들어주는건 jsx에서 알아서 해주기 때문에!! {}중괄호는 절대 안됨
    <div>
      {/* HTML에서는 input, br과 같은 태그를 사용할 때 닫지 않고 사용가능하지만
      리액트에서는 태그를 열었으면 무조건 닫아야 함 */}
      <div></div>
      <input />
      <br />
    </div>
  );

  // 2. 꼭 감싸줘야만 하는 태그
  // 두 개 이상의 태그는 무조건 하나의 태그로 감싸져있어야 함
  // const element = (
    // <div>안녕하세요.</div>
    // <div>안녕히 계세요.</div>

    // 반드시 하나의 부모 태그로 감싸져야 함
    // <div>
    //   <div>안녕하세요.</div>
    //   <div>안녕히 계세요.</div>
    // </div>

    // 이렇게 단순히 감싸기 위하여 불필요한 div로 감싸는 게 별로 좋지 않을 때도 있음
    // HTML 중첩구조가 복잡해지며 그에 따른 스타일 설정을 할 때도 복잡해 짐
    // 이럴 때 사용하는 것이 React의 Fragment
    // React.Fragment는 별도의 엘리먼트로 나타나지 않음

    // <React.Fragment>
    //   <div>안녕하세요.</div>
    //   <div>안녕히 계세요.</div>
    // </React.Fragment>

    // React.Fragment는 생략도 가능
    // React.Fragment는 상단에 'import React from "react";'라이브러리가 있어야 동작함
    // <>
    // <div>안녕하세요.</div>
    // <div>안녕히 계세요.</div>
    // </>

    // 3. JSX 안에 자바스크립트 값 또는 표현식 사용하기
    // 자바스크립트 변수(또는 함수)를 사용해야 할 때는 {}중괄호 사용함

  // );

  // return element;


  // const name = 'react';
  // const user = {
  //   firstName: 'Goni',
  //   lastName: 'Kim'
  // };
  
  // function formatName(user) {
  //   return `${user.firstName} ${user.lastName}`
  // }
  
  // const element = (
  //   <>
  //     <div>{name} 배우기</div>
  //     <h1>Hello, {formatName(user)}</h1>
  //   </>
  // );

  // 4. style과 className
  // 인라인 스타일은 객체 형태로 작성하는데 background-color 처럼 -(대시)로 구분되어 있는 이름은 camelCase형태로 네이밍 
  // 예) backgound-color -> backgoundColor 
  // class값 설정할 때는 class="" 가 아닌 className=""으로 설정
  // 인라인 형태의 style에서만 이렇게 적용! .css로 분리해서 할 때는 위 법칙 상관 없음
  // const style = {
  //   backgroundColor: 'black',
  //   color: 'aqua',
  //   fontSize: 24,
  //   padding: '1rem'
  // };

  // const element = (
  //   <>
  //   <div style={style}>리액트 공부하기</div>
  //   <div style={{ color: 'aqua' }}>리액트 공부하기</div>
  //   <div className="gray-box"></div>
  //   </>
  // );


  // 5. JSX 주석
  // JSX 내부의 주석은 JS 여러줄 주석을 중괄호로 감싼 형태
  // {/* 이런 형태 */}
  // JS 주석은 우리가 아는 그대로 사용
  // const element = (
  //   <>
  //     {/* 주석은 화면에 보이지 않습니다. */}
  //     // 주석은 화면에 보이지 않습니다. <br />
  //     /* 주석은 화면에 보이지 않습니다. */
  //     <div
  //     // 열리는 태그 내부에서는 이렇게 주석 작성 (설명 필요할 때는 가끔 씀)
  //     >
  //       주석 테스트
  //     </div>
  //   </>
  // );










  return element;





}






export default JsxUse; // JsxUse 컴포넌트 내보내기
// export를 해줘야 다른 곳에서 import 가능
