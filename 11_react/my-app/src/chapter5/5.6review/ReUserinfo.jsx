import ReAvatar from "./ReAvatar";

function ReUserinfo(props) {
  console.log(props);
  console.log(props.userInfo);
  return (
    <div>
      <ReAvatar 
        userInfo = {props.userInfo}
      />
      <div>
        {props.userInfo.user}
        <br />
        {props.userInfo.name}
      </div>
    </div>
  );
}

export default ReUserinfo;