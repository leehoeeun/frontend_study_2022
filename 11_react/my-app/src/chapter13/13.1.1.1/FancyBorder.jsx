import "./FancyBorder.css";

function FancyBoder(props) {
  return (  
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

export default FancyBoder;