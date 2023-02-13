import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store } from "./chapter18/app/store";   // store.js에 변수 store를 export했기 때문에 가져올 수 있음

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
// import UserStatusEx from './chapter7/7.8/ex1/UserStatusEx';
import InputContainer from './chapter7/7.8/ex2/InputContainer';
import ReClock from './chapter4/ReClock';
import RePropUse from './chapter5/5.3review/RePropUse';
import ReComment from './chapter5/5.6review/ReComment';
import ReCommentList from './chapter5/5.7review/ReCommentList';
import Accommodate from './chapter7/7.8/Accommodate';
import Toggle from './chapter8/8.1/Toggle';
import MyButton from './chapter8/8.2/MyButton';
import ConfirmButton from './chapter8/ConfirmButton';
import Greeting from './chapter9/9.1/Greeting';
import LoginControl from './chapter9/9.2/LoginControl';
import Mailbox from './chapter9/9.3/Mailbox';
import LoginControlRefactory from './chapter9/9.3/LoginControlRefactory';
import MainPage from './chapter9/9.4/MainPage';
import LandingPage from './chapter9/LandingPage';
import ReToggle from './chapter8/8.1review/ReToggle';
import ReMyButton from './chapter8/8.2review/ReMyButton';
import ReConfirmButton from './chapter8/ReConfirmButton';
import ReGreeting from './chapter9/9.1review/ReGreeting';
import ReLoginControl from './chapter9/9.2review/ReLoginControl';
import ReMailbox from './chapter9/9.3review/ReMailbox';
import ReLoginControlRefactory from './chapter9/9.3review/ReLoginControlRefactory';
import NumberList from './chapter10/10.1/NumberList';
import AttendanceBook from './chapter10/10.1/AttendanceBook';
import NameForm from './chapter11/11.2/NameForm';
import EssayForm from './chapter11/11.3/EssayForm';
import FlavorForm from './chapter11/11.3/FlavorForm';
import FileInput from './chapter11/11.3/FileInput';
import Reservation from './chapter11/11.4/Reservation';
import ReservationRefactoring from './chapter11/11.4/ReservationRefactoring';
import SignUp from './chapter11/SignUp';
import Calculator from './chapter12/Calculator';
import WelcomeDialog from './chapter13/13.1.1.1/WelcomeDialog';
import SplitPaneSection from './chapter13/13.1.1.2/SplitePaneSection';
import DialogContainer from './chapter13/13.1.2/DialogContainer';
import SignUpDialog from './chapter13/13.1.3/SignUpDialog';
import ProfileCard from './chapter13/ProfileCard';
import ThemeContext from './chapter14/ThemeContext';
import DarkOrLight from './chapter14/DarkOrLight';
import MainContent from './chapter14/MainContent';
import StyledPage from './chapter15/StyledPage';
import SimpleRouter from './chapter16/SimpleRouter';
import Modal from './components/common/Modal';
import ApiRequest from './chapter17/ApiRequest';
import ApiRequestAsyncAwait from './chapter17/ApiRequestAsyncAwait';
import CounterApp from './chapter18/CounterApp';


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
    //   <TextInputWithFocusButton />
    //   // <ComponentVariable />
    // //   // <UserStatusEx />
    // //   // <InputContainer />
    // );

    // root.render(
    //   <Accommodate />
    // );

    // const messages = ['React', 'Re:React', 'Re:Re:React'];
    // const messages = [];
    const messages = ['답장해', 'Re: 답장하라고', 'Re: Re: 진짜 답장안할거야!!'];
    // root.render(
      // <Toggle />
      // <ReToggle />
      // <MyButton />
      // <ReMyButton />
      // <ConfirmButton />
      // <ReConfirmButton />
      // <Greeting 
      //   isLoggedIn = {true}
      // />
      // <ReGreeting 
      //   isLoggedIn = {false}
      // />
      // <LoginControl />
      // <ReLoginControl />
      // <Mailbox 
      //   unreadMessages={messages}
      // />
      // <ReMailbox
      //   unreadMessages={messages}
      // />
      // <LoginControlRefactory/>
      // <ReLoginControlRefactory />
      // <MainPage />
      // <LandingPage />
    // );
    

    // 10장
    const numbers = [1, 2, 3, 4, 5];
    // root.render(
    //   // <NumberList numbers = {numbers}/>
    //   // <AttendanceBook />
    //   // <NameForm />
    //   // <EssayForm />
    //   // <FlavorForm />
    //   // <FileInput />
    //   // <Reservation />
    //   // <ReservationRefactoring />
    //   <SignUp />
    // );

    // root.render(
    //   // <Calculator />
    //   // <WelcomeDialog />
    //   // <SplitPaneSection />
    //   // <DialogContainer />
    //   <SignUpDialog />
    // );

    // 2023-02-01 공부
    // root.render(
    //   // <ProfileCard />
    //   <DarkOrLight />
    // );
    
    //15장 예제 
    // root.render(
    //   <StyledPage />
    // );

    // 라우터 예제
    // root.render(
    //   // <SimpleRouter />
    // );

    // root.render(
    //   // <SimpleRouter />
    //   // <Modal />
    //   // <ApiRequest />
    //   <ApiRequestAsyncAwait />
    // );

  root.render(
    // 2. 리액트에 Redux Store 제공하기
    // CounterApp 컴포넌트와 그 하위 자식들은 Redux Store에 접근 가능
    <Provider store={store}>
      <CounterApp />
    </Provider>
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
