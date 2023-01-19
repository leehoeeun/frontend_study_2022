import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  {
    id: 1,
    message: "안녕하세요, 오늘 일정을 알려드립니다.",
  },
  {
    id: 2,
    message: "점심식사 시간입니다.",
  },
  {
    id: 3,
    message: "이제 곧 미팅이 시작됩니다.",
  },
];

let timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],    // state에 notifications라는 이름으로 빈 배열 생성
    };
  }

  // 컴포넌트가 생성될 때 호출 
  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {  // 3개보다 작을 때
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);   // 새로운 배열(notifications)에 push
        this.setState({    // setState를 통해 state를 변경하여 재렌더링 됨
          notifications: notifications,
        });
      } else {
        this.setState({
          notifications: []    // state에 notifications라는 이름으로 다시 배열이 비어짐 // element를 지우는 게 
        });
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              id={notification.id}
              message={notification.message}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;