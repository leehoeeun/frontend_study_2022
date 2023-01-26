function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  const count = 0;
  
  return (
    <div>
      <h1>안녕하세요!</h1>
      {/* &&뒤의 엘리먼트는 &&앞에 조건이 true일 때 출력됨
      조건이 false라면 리액트는 무시하고 건너띔 */}
      {/* 조건에 따라 특정 엘리먼트를 나타내거나 숨기고 싶을 때 사용 */}
      {unreadMessages.length > 0 && (
        <>
          <h2>{unreadMessages.length}개의 읽지 않은 메일이 있습니다.</h2>
          {unreadMessages.map((unreadMessage, index) => {
            return <p key={index}>제목: {unreadMessage}</p>;
            // map() 함수 쓸 때 인덱스값을 넘기는 key값이 필수로 필요함 key={index}
          })}
        </>
      )}

      {/* falsy이면 여전히 && 뒤에 있는 표현식은 건너띄지만 falsy표현식이 반환된다는 것에 주의 */}
      {count && <h1>Message: {count}</h1>}
    </div>
  );
}

export default Mailbox;