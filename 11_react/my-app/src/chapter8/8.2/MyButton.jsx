// 함수에 인자값이 필요한 경우는 필히 콜백함수로 담아서 보내줘야 함!!!
// 인자값이 없을 때는 함수 전체를 호출하여 동작하게 하지만
// 인자값이 있는 경우 엘레먼트에 '함수(인자값)'으로 적으면 바로 실행되서... 그리고 마운트 될 때만 한 번 동작하고 안되기 때문에 콜백함수 '(인자값) => 함수명{인자값}'

function MyButton() {

  const handleDelete = (id, e) => {
    // e: 이벤트 객체(발생한 이벤트에 관련한 여러 기능이 담겨 있음)
    // e.target: 현재 발생한 이벤트의 대상(여기서는 <button>)
    console.log(id, e.target);
  };

  const handleDeleteWrong = (id) => {
    console.log(id,'실행됨');
  };

  return (
    <div>
      {/* <button onClick={handleDelete(1)}>   */} {/* <--이렇게 적으면 함수가 바로 실행되어 버림 */}
      {/* 매개변수 event로 들어오는 값은 event 객체임 */}
      <button onClick={(event) => handleDelete(1, event)}>  
        삭제하기
      </button>

      <br />
      <br />

      {/* 잘못된 방법
      단순라게 마운트 시 함수가 실행됨
      버튼을 눌러도 함수 실행 안됨 */}
      <button onClick={handleDeleteWrong(1)}> {/* 함수전달이 안되고 실행되어 버림 */}
        삭제하기(잘못된 방법)
      </button>
    </div>
  );
}

export default MyButton;