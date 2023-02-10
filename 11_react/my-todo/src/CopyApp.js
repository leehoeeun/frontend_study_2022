import React from 'react';

function CopyApp(props) {

  const handleInsert = useCallback((text) => {  //handleInsert로 호출될 때 
    const todo = {
      id: uuidv4(),
      month,
      week,
      title,
      text,
      content,
      buying,
      checked: false,
      important,
    };

    setTodos(todos.concat(todo));

    // TODO : 마지막에 주석 풀기
    // 로컬 스토리지에 저장  // ('이름', JSON 문자로 변경)
    // localStorage.setItem('todos', JSON.stringify(todos.concat(todo)))
    // 배열을 JSON으로 변경필요!
  }, [todos]);


  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    onInsert(value);
    setValue('');
    e.preventDefault();
  };


  return (
    <div>
      
    </div>
  );
}

export default CopyApp;