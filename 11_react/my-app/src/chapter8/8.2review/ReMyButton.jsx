// 함수에 인자가 있을 때
function ReMyButton() {
  const handleDelete = (id, e) => {
    console.log(id, e.target);
  };

  return (  
    <div>
      <button onClick={(event) => {handleDelete(1, event)}}>
        삭제하기
      </button>
    </div>
  );
}


export default ReMyButton;