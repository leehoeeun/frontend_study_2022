import "./FancyBorder.css";

function FancyBoder(props) {
  return (  
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {console.log(props)}
      {props.children}
      <p>여기가 최종 찍히는 곳이지!</p>
    </div>
  );
}

export default FancyBoder;