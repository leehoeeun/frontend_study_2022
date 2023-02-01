// 하위 엘리먼트를 감싸서 카드 형태로 보여주는 컴포넌트
function Card(props) {
// function Card({ title, backgroundColor, children }) { // 구조분해 할당으로 
  console.log(props);
  const { title, backgroundColor, children } = props;
  console.log(props);
  console.log(props.title);
  console.log(props.backgroundColor);
  console.log(props.children);

  return (  
    <div
      style={{
        margin: 8,
        paddung: 8,
        borderRadius: 8,
        boxShadow: "0px 0px 4px gray",
        backgroundColor: backgroundColor || "lightgray" // Short-circuit
        // backgroundColor에 falsy값이 들어오면 기본값으로 "lightgray"를 사용
      }}
    >
      {title &&
        <h1 style={{ borderBottom: "1px solid gray" }}>{title}</h1>
      }
      {children}
    </div>
  );
}

export default Card;