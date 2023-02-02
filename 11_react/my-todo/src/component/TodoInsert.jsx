import styled from "styled-components";
import { MdAdd as AddIcons } from "react-icons/md";   // MdAdd as 뒤에 내가 해당 아이콘의 별칭을 지어줌
import { useState } from "react";
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
function TodoInsert({ onInsert }) {
  const [value, setValue] = useState('');

  const hadleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    onInsert(value);
    setValue('');  // TODO : input에 입력한 값을 등록 후 초기화 해주는 역할(value값 초기화)

    // TODO: submit 이벤트가 발생시키는 새로고침을 방지
    e.preventDefault();
  };

  return (  
    // TODO : form 태그 사용 시 input에서 엔터키를 눌렀을 때도 자동으로 submit 이벤트 발생(enter키로도 입력이 됨)
    // form과 같이 enter하면 등록되게 하고 싶다! 하는 경우 keyup이벤트를 통해 엔터키를 감지하는 로직을 작성
    // key down, key press, key up가 keyboard 이벤트가 있었는데 key press는 key press는 없어짐
    // event.key === 'Enter' 을 통해 form 태그가 아니면 enter할 때 이벤트가 발생하도록 수동으로 넣어줘야함
    <TodoInsertWrapper onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={hadleChange}
        // onKeyUp={}
        // onKeyDown={}
      />
      <StyledButton type="submit">
      {/* 컴포넌트에 type을 안적어주면 default로 submit으로 인식함 */}
        <AddIcons />
      </StyledButton>
    </TodoInsertWrapper>
  );
}

export default TodoInsert;