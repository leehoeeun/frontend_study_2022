import { useState } from "react";

const styles = {
  button: {
    height: 40,
    width: 200
  },
  warning: {
    background: 'red',
    textAlign: 'center',
    width: '100%',
    padding: 10,
    fontSize: 20,
    color: 'white'
  },
};

function WarningBanner(props) {
  console.log(props);
  // props.warn이 false라면 null을 리턴하기 때문에 컴포넌트는 렌더링 되지 않음
  if (!props.warn) {
    return null;
  }
  return(
    <div style={styles.warning}>Warning!</div>
  );
}

function MainPage() {
  const [showWarning, setShowWarning] = useState(false);
  const handleToggleClick = () => {
    setShowWarning(showWarning => !showWarning);
  };

  return (  
    <div>
    <WarningBanner warn={showWarning}/>
    <button
      style={styles.button}
      onClick={handleToggleClick}
      // onClick={() => {setShowWarning(showWarning => !showWarning)}}
    >
      {showWarning ? '감추기': '보이기'}
    </button>

    </div>
  );
}

export default MainPage;