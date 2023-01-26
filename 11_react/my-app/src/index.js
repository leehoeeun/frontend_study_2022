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
import CommentList from './chapter5/CommentList';
import NotificationList from './chapter6/NotificationList';
import Counter from './chapter7/7.2/Counter';
import CounTest from './chapter7/7.2/CounTest.jsx';
import CounterEffect from './chapter7/7.3/CounterEffect';
import SetStateMerge from './chapter7/7.2/SetStateMerge';
import EffectSummary from './chapter7/7.3/EffectSummary';
import EffectConteiner from './chapter7/7.3/EffectContainer';
import TimerConTainer from './chapter7/7.3/TimerContainer';
import HeavyCalculator from './chapter7/7.4/HeavyCalculator';
import ParentComponent from './chapter7/7.5/ParentComponent';
import TextInputWithFocusButton from './chapter7/7.6/TextInputWithFocusButton';
import ComponentVariable from './chapter7/7.6/ComponentVariable';
import UserStatusEx from './chapter7/7.8/ex1/UserStatusEx';
import InputContainer from './chapter7/7.8/ex2/InputContainer';
import ReClock from './chapter4/ReClock';
import RePropUse from './chapter5/5.3review/RePropUse';
import ReComment from './chapter5/5.6review/ReComment';
import ReCommentList from './chapter5/5.7review/ReCommentList';
import Accommodate from './chapter7/7.8/Accommodate';
import Toggle from './chapter8/8.1/Toggle';


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
//     // <Clock />
//     <ReClock />
//   );
// }, 1000);
// 전체 UI를 다시 렌더링 하도록 만들었지만 React DOM은 내용이 변경된 텍스트 노드만 업데이트

  // 5.3장 예제
  // root.render(
  //   // <PropUse />
  //   <RePropUse />  // 연습
  // );

  // 5.6장 예제
  // root.render(
  //   <Comment 
  //   user = "고니"
  //   name = "goni"
  //   text ="안녕하세요. 고니입니다."
  //   date ="2023.01.18"
  //   avatarUrl = "http://via.placeholder.com/200x200"
  //   />
  // );
  
  // 5.6장 연습
  //   root.render(
  //   <ReComment
  //     user = "이회은"
  //     name = "leehoeeun"
  //     text ="안녕하세요. 이회은입니다."
  //     date ="2023.01.18"
  //     avatarUrl = "http://via.placeholder.com/200x200"
  //   />
  // );


  // chapter5 예제
  // root.render(
  //   // <CommentList />
  //   <ReCommentList />
  // );

  // chapter6 예제
  // root.render(
  //   <NotificationList />
  // );

  // chapter7.2 예제
  // root.render(
  //   <Counter />
  // );
  
  // Counter 연습 
  // root.render(
  //   <CounTest />
  // );

  // chapter7.3 예제
  // root.render(
  //     <CounterEffect />
  // );

  // chapter7.2 예제2
  // root.render(
  //   <SetStateMerge />
  // );

  // 7.3 예제2
  // root.render(
    // <EffectSummary />
    // <EffectConteiner />
    // <TimerConTainer />
  // );

  // // 7.4 예제2
  // root.render(
  //   <HeavyCalculator />
  // );

    // 7.5 & 7.6 예제
    // root.render(
    //   // <ParentComponent />
    //   // <TextInputWithFocusButton />
    //   // <ComponentVariable />
    //   // <UserStatusEx />
    //   // <InputContainer />
    // );

    // root.render(
    //   <Accommodate />
    // );

    root.render(
      <Toggle />
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
