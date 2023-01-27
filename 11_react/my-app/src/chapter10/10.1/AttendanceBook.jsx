const students = [
  {
    name: '이회은',
    id: 'leehoeeun'  // id값은 고유하면 됨, 중복만 안되면 됨
  },
  {
    name: '제이홉',
    id: 'jhope'
  },
  {
    name: '박지민',
    id: 'parkjimin'
  },
  {
    name: '김석진',
    id: 'kimsukjin'
  },
];

// Quiz: 배열의 각 요소를 렌더링하고 배열 렌더링 시 key값 추가해보기, key값은 id속성 추가
function AttendanceBook() {
  return (  
    <ul>
      {students.map((student) => {
        console.log(student.id);
        console.log(student.name);
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
}

// li 위치에 여러 컴포넌트를 쓸 경우 아래와 같이! 쓰면 됨
// function AttendanceBook() {
//   return (  
//     <ul>
//       {students.map((student) => {
//         return (
//           <>
//             <컴포넌트1 />
//             <컴포넌트2 />
//             <컴포넌트3 />
//           </>
//         );
//       })}
//     </ul>
//   );
// }

export default AttendanceBook;