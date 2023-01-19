// function Profile(props) {    
//   console.log(props);    
//   return (
//     <div>
//       <h1>사용자의 프로필(조회수: {props.viewCount})</h1>
//       <h2>이름: {props.name}</h2>
//       <h2>자기소개: {props.introduction}</h2>
//     </div>
//   );
// }

// export default Profile;


// 부모 PropsUse.jsx에서 넘겨주는 props 키값을 직접 적어주어 무엇이 props로 넘어오는지 명확하게 하는게 좋다
  function Profile({ viewCount, name, introduction }) {
    return (
      <div>
        <h1>사용자의 프로필(조회수: {viewCount})</h1>
        <h2>이름: {name}</h2>
        <h2>자기소개: {introduction}</h2>
      </div>
    );
  }
  
  export default Profile;