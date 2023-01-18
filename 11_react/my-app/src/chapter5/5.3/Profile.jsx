function Profile(props) {
  console.log(props);
  return (
    <div>
      <h1>사용자의 프로필(조회수: {props.viewCount})</h1>
      <h2>이름: {props.name}</h2>
      <h2>자기소개: {props.introduction}</h2>
    </div>
  );
}

export default Profile;