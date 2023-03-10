function Avatar(props) {
  console.log(props);
  return (
    // 컴포넌트로 추출했으므로 Comment에서만 쓰이는게 아니기에 author에서 user로 바꿔줌
    // props.author.avatarUrl -> props.user.avatarUrl 로 변경함
    <img className="avatar" 
    src={props.userInfo.avatarUrl} 
    alt={props.userInfo.name}
    />
  );
}

export default Avatar;