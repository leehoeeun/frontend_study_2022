import Avatar from "./Avatar";
import Userinfo from "./Userinfo";

function Comment(props) {
  // return (
  //   //원본
  //   <div className="comment">
  //     <div className="user-info">
  //       <img className="avatar" 
  //         src={props.author.avatarUrl} 
  //         alt={props.author.name} 
  //       />
  //       <div className="user-info-name">
  //         {props.author.name}
  //       </div>
  //     </div>
  //     <div className="comment-text">
  //       {props.text}
  //     </div>
  //     <div className="comment-date">
  //       {props.date}
  //     </div>
  //   </div>
  // );

  return (
    <div className="comment">
      <Userinfo user={props.author}/>
      <div className="comment-text">
        {props.text}
      </div>
      <div className="comment-date">
        {props.date}
      </div>
    </div>
  );
}

export default Comment;