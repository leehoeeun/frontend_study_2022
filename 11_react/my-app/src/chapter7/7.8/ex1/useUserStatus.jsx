import { useEffect, useState } from "react";

// 파일명도, Hook 이름도 모두 use로 시작해야 에러도, 이름만 봐도 커스텀 훅이란 걸 알 수 있다.
// 사용자의 온라인, 오프라인 상태를 구독하고 그 상태값을 리턴하는 함수!!
function useUserStatus(userId) {
  const [isOnline, setIsOnline] = useState(null);
  
  useEffect(() => {
    function handleStatusOnline(status) {
      setIsOnline(status.isOnline);
    }

    // ChatAPI.subscribeToUserStatus(props.user.id, handleStatusOnline);
    ChatAPI.subscribeToUserStatus(userId, handleStatusOnline);  // props로 변경해준다

    return () => {
      // ChatAPI.subscribeToUserStatus(props.user.id, handleStatusOnline);
      ChatAPI.subscribeToUserStatus(userId, handleStatusOnline);
    };
  }, []);

  return isOnline;  // 사용자가 isOnline인지 아닌지를 반환해준다
}

export default useUserStatus;