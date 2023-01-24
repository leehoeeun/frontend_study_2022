import Avatar from "./Avatar";
import Userinfo from "./Userinfo";

// function Comment(props) {
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
//   console.log(props);

//   return (
//     <div className="comment">
//       <Userinfo 
//         user={props}
//       />
//       <div className="comment-text">
//         {props.text}
//       </div>
//       <div className="comment-date">
//         {props.date}
//       </div>
//     </div>
//   );
// }

// export default Comment;


// author = "고니"
// name = "goni"
// text ="안녕하세요. 고니입니다."
// date ="2023.01.18"
// avatarUrl = "http://via.placeholder.com/200x200"


// function Comment(props) {

//   console.log(props);

//   return (
//     <div className="comment">
//       <Userinfo 
//         userInfo = {props}
//       />
//       <div className="comment-text">
//         {props.text}
//       </div>
//       <div className="comment-date">
//         {props.date}
//       </div>
//     </div>
//   );
// }

// export default Comment;


function Comment(props) {
  console.log(props);
  return (
    <div className="comment">
      <Userinfo 
        userInfo={props}
      />
      <div className="comment-text">
        {props.text}
      </div>
      <div className="comment-date">
        {props.date}
      </div>
    </div>
  );
};

export default Comment;