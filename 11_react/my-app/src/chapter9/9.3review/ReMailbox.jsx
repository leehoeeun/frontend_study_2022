function ReMailbox(props) {
  console.log(props);
  const unreadMessages = props.unreadMessages;

  return (  
    <div>
      <h1>LEEHOEUN님께 온 메일이 있습니다.</h1>
      {unreadMessages.length > 0 && 
        <>
          <h2>읽지 않은 메일이 있습니다.</h2>
          {unreadMessages.map((unreadMessage, index) => {
            return <h3 key = {index}>제목 : {unreadMessage}</h3>;
          })}
        </>
      }
    </div>
  );
}

export default ReMailbox;