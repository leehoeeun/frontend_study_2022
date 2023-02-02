import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListWrapper = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

// todos 배열을 props로 받아와서 map() 함수를 사용래 여러 개의 TOdoListItem 컴포넌트로 변환해 보여줌
function TodoList({ todos, onRemove, onToggle }) {  // 구조분해 할당: 어떤 형식으로 쓰든 개발자 취향
  // console.log(todos);

  return (  
    <TodoListWrapper>
      {/* <TodoListItem />
      <TodoListItem />
      <TodoListItem /> */}
      {todos.map((todo) => {
        return <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />
      })}
    </TodoListWrapper>
  );
}

export default TodoList;
