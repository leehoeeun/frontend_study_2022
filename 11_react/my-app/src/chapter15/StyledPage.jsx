import styled, { css } from "styled-components";    // export default 블라블라 는 import할 때 는 그냥 쓰고, 그냥 export로 내보내는 함수는 {}중괄호로 감싸서 내보낸다

// styled-components 사용하려면
// 0. styled-components 설치하기
// npm install styled-components

// 설치 확인
// package.json 파일에 "styled-components": "^5.3.6", 있는지 확인

// styled-components란?
// CSS문법을 그대로 사용하면서 결과물을 스타일링된 컴포넌트 형태로 만들어주는 라이브러리
// 컴포넌트 개념을 사용하기 때문에 리액트와 궁합이 잘 맞음
// 백틱을 사용하여 구성 요소와 스타일을 지정

// 1. 기본적인 사용법
// 스타일링된 컴포넌트 형태로 반환됨
const Wrapper = styled.div`     // Wrapper를 div로 만들거라면 styled뒤에 .div를 붙임
  padding: 1rem;
  background: gray;

  /* 6. 반응형 디자인:
  - 일반 CSS를 사용할 때와 똑가티 media 쿼리를 사용 가능
  - 리액트스럽게 react-responsive 라이브러리 사용 */
  /* 기본적으로 가로크기를 1024px에 가운데 정렬을 하고 가로 크기가 작아짐에 따라 크기를 줄이고 768px미만이 되면 꽉 채우기 */
  width: 1024px;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    width: 768px;
  }
  @media screen and (max-width: 768px){
    width: 100%;
  }
`;  

const Title = styled.h1`
  font-size: 1.5rem;
  color: white;
  text-align: center;
  @media screen and (max-width: 1024px) {
    color: pink;
  }
  @media screen and (max-width: 768px){
    color: black;
  }
`;

// 2. props 사용하기
// 컴포넌트 형태라 props사용이 가능
const Button = styled.button`
  width: ${props => props.width || '100px'};   // props는 사용자가 임의로 정함 // || '100px'은 width값을 안정했을 때 기본값 설정임
  height: ${props => props.height || '40px'};
  color: ${props => props.dark ? 'white': 'black'};
  background: ${props => props.dark ? 'black': 'white'};
  border: 2px solid black;
  cursor: pointer;

  // 3. & 문자를 사용하여 Sass처럼 자기 자신 선택가능
  &:hover {
    background: #b3b3b3;
  }

  // 4. 여러줄의 스타일링 구문을 조건부로 설정해야 하는 경우 css를 불러와 사용
  ${props =>
    props.inverted && 
    css`
      background: white;
      color: #1f1f1f;
      border: 2px solid white;
      &:hover {
        background: #1f1f1f;
        color: white;
      }
    `}
`;

// 5. 스타링 확장(커스텀) 하기
// 기존 Button에 스타일을 추가/ 확장 했다.
// button컴포넌트에 모서리를 둥글게 하는 style이 추가돤 RoundedButton컴포넌트
const RoundedButton =styled(Button)`
  border-radius: 16px;


  /* & + &{
    margin-left: 1rem;
  } */

  & + button {
    margin-left: 1rem;
  }

`;



function StyledPage() {
  return (  
    <>
      <Wrapper>
        <Title>
          안녕, 리액트!
        </Title>
      </Wrapper>

      <Button width="200px" height="60px">Normal</Button>
      
      {/* ={true}는 생략 가능 */}
      <Button dark={true}>Dark</Button>
      <Button inverted>inverted</Button>
      <RoundedButton>Rounded</RoundedButton>
      <button>button 태그</button>
    </>
  );
}

export default StyledPage;