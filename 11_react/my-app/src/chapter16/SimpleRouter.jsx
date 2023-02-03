import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GamePage from './GamePage';
import HotGamePage from './HotGamePage';
import MainPage from './MainPage';
import NewGamePage from './NewGamePage';
import NoMatchPage from './NoMatchPage';
import PlacePage from './PlacePage';

function SimpleRouter(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/places' element={<PlacePage />} />

          {/* 서브 경로 설정 */} {/* 해당 경로에 가면 이 컴포넌트를 보여주겠다!!! */}
          {/* <Route path='/games' element={<GamePage />} />
          <Route path='/games/hot' element={<HotGamePage />} />    
          <Route path='/games/new' element={<NewGamePage />} /> */}

          {/* Nested route 방식 */}  {/* 네스티드방식으로 경로를 나타내면  */}
          {/* 위 서브 경로 방식과 차이점: 부모 엘리먼트 + 자식엘리먼트가 보임 */}
          {/* 부모 안에 자식들을 렌더링 해 보여주는 데(어디에 보여줄 지는 Outlet 컴포넌트로 지정함) */}
          {/* Nested 안에 또 Nested 가능함 */}
          <Route path='/games' element={<GamePage />} >
            <Route path='hot' element={<HotGamePage />} />    
            <Route path='new' element={<NewGamePage />} />
          </Route>
          
          {/* '*'의 의미는 match anything */}
          {/* 위에 설정한 라우팅 경로 이외에 경우 아래 화면 노출됨 */}
          <Route path='*' element={<NoMatchPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default SimpleRouter;

// 설치하기
//npm install react-router-dom

// react-router-dom이란?
// 리액트를 위한 라우팅 라이브러리
// 라우팅? 사용자가 원하는 경로로 보내는 과정

// 페이지를 나누는 법(리액트 미사용 시)
// MPA라서 각 페이지 별 html 만듦
// /list경로로 접속하면 해당 list.html 파일을 서버가 보내줌

// 페이지 나누는 법(리액트 사용시)
// SPA라서 index.html 파일 하나만 존재함
// List 컴포넌트를 만듦
//  /list 경로로 접속하면 기존 컴포넌트는 언마운트 되고 기존 자리에 List 컴포넌트를 보여줌

// 라우팅 구성을 위한 기본 컴포넌트
// 1) BrowserRouter 2) Routes 3) Route

// 1) 웹 브라우저에서 react-router를 사용하여 라우팅 할 수 있도록 해주는 컴포넌트
//    웹 브라우저의 history 객체를 이용해서 경로를 탐색할 수 있게 해줌 
// 2) Routes는 여러 개의 Route 컴포넌트를 자식으로 가질 수 있음
// 3) Route는 Routes의 하위 컴포넌트로써 path와 element라느 props를 가지고 있음
//    여기에는 path는 경로를 의미, element는 경로가 일치할 경우 렌더링을 할 리액트 엘리먼트를 의미

// 사용자가 주소창에 새로운 경로를 입력하거나 페이지 내에서 경로 이동이 일어나게 되면
// Route 컴포넌트 중에서 현재 경로와 일치하는 경로를 찾아 해당 엘리먼트를 반환
// 그러면 사용자에게 보이는 화면이 바뀌게 되는 것
