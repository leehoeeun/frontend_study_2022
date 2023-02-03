import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 1rem;
  border: 1px;
  border-radius: 8px;
  cursor: pointer;
`;

function Button(props) {
  const { title, onClick } = props;

  return (
    <div>
      <StyledButton onClick={onClick} >  {/* 클릭 했을 때 어떤 동작을 할 것인가는 상위 컴포넌트에서 받아옴 */}
        {title || '등록'}   {/* props에 title이 내려온결 보여주는데 안내려 오면 기본값으로 '등록'을 보여주겠다.  */}
      </StyledButton>
    </div>
  );
}

export default Button;