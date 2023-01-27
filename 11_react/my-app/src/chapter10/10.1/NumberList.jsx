function NumberList(props) {
  const { numbers } = props;   // props는 객체로 넘어옴
  console.log(props);
  console.log(numbers);
  
  const listItem = numbers.map((number, index) => {  // array.map((요소, 인덱스) => {})
    return <li key={index}>{number}</li>;  // map()함수는 key값을 줘야됨. key값으로 index를 넣는 것은 지양! 동적인 액션(컴포넌트 추가 삭제)의 경우 각 배열에 id을 부여하고 id를 key값에 연결해 줘야 정상적인 추가 삭제(중간에 추가 삭제) 가 이뤄진다
  });

  console.log(listItem);

  // map() 함수 결과
  // [
  //   <li>1</li>,
  //   <li>2</li>,
  //   <li>3</li>,
  //   <li>4</li>,
  //   <li>5</li>,
  // ]


  return (  
    <ul>{listItem}</ul>
  );
}

export default NumberList;