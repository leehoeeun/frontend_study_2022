import ReUserinfo from "./ReUserinfo";

function ReComment(props) {
  console.log(props);
  return (
    <div>
      <ReUserinfo 
        userInfo={props}
      />
      <div>{props.text}</div>
      <div>{props.date}</div>
    </div>
  );
}

export default ReComment;