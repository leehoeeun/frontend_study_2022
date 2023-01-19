import Avatar from "./Avatar";

function Userinfo(props) {
  console.log(props);
  return (
    <div className="user-info">
    <Avatar 
    userInfo={props.userInfo}
    />
    <div className="user-info-name">
      {props.userInfo.user}
    </div>
  </div>
  );
}

export default Userinfo