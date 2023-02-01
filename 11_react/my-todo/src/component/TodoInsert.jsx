import styled from "styled-components";
import { MdAdd as AddIcons } from "react-icons/md";   // MdAdd as 뒤에 내가 해당 아이콘의 별칭을 지어줌
// as를 사용하여 별칭을 붙여 사용하면 추후 아이콘을 바꿀 때 한 곳만 바꾸면 되서 편함

const TodoInsertWrapper = styled.form`
  display: flex;
  background: #495057;
`;

const StyledInput = styled.input`
  /* 기본 input 스타일 초기화 */
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  line-height: 1.5;
  color: white;
  flex: 1; // 버튼을 제외한 영역을 모두 차지하기

  &::placeholder {
    color: #dee2e6;
  }
`;

const StyledButton = styled.button`
  border: none;
  background: #868e96;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
// state를 통해 input의 상태를 관리
function TodoInsert() {
  return (  
    <TodoInsertWrapper>
      <StyledInput type="text" placeholder="할 일을 입력하세요." />
      <StyledButton type="submit">   
      {/* 컴포넌트에 type을 안적어주면 default로 submit으로 인식함 */}
        <AddIcons />
      </StyledButton>
    </TodoInsertWrapper>
  );
}

export default TodoInsert;