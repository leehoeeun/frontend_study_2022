function ReAvatar(props) {
  console.log(props);
  return (
    <img 
      src={props.userInfo.avatarUrl} 
      alt={props.userInfo.name}
    />
  );
}

export default ReAvatar;