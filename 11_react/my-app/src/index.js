import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JsxUse from './chapter3/3.4/JsxUse';    // 14번 줄에 <JsxUse /> 자동 완성 하니까 해당 줄 자동 생성됨
import Library from './chapter3/Library';
import Clock from './chapter4/Clock';
import PropUse from './chapter5/5.3/PropUse';
import Comment from './chapter5/5.6/Comment';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />     // App.js 컴포넌트를 렌더링하는!
// );

// chapter3 예제
// root.render(
//   // <JsxUse />
//   <Library />
// );

// chapter4 예제
// 1초 마다 Clock 컴포넌트를 root div에 렌더링 하는 코드
// setInterval(() => {
//   root.render(
//     <Clock />
//   );
// }, 1000);
// 전체 UI를 다시 렌더링 하도록 만들었지만 React DOM은 내용이 변경된 텍스트 노드만 업데이트

  // 5.3장 예제
  // root.render(
  //   <PropUse />
  // );

  // 5.6장 예제
  root.render(
    <Comment 
    author = "고니"
    name = "goni"
    text ="안녕하세요. 고니입니다."
    date ="2023.01.18"
    avatarUrl = "http://via.placeholder.com/200x200"
    />
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
