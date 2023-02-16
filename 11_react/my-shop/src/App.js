import { createGlobalStyle } from "styled-components";
// bootstrap: 레이아웃을 복사, 붙여넣기 식으로 편하게 개발 가능한 css, js 라이브러리
import 'bootstrap/dist/css/bootstrap.min.css';  // bootstrap CSS 추가
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Header from "./pages/Header";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from "react-toastify";

import Main from "./pages/Main";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";


const GlobalStyle = createGlobalStyle`
  /* 글로벌(공통) 스타일 */
  body {
    box-sizing: border-box;
  }
  #root {
    text-align: center;
  }
  * {
    box-sizing: inherit;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .text-ellipsis{
    white-space: nowrap;  // 감싸지 않겠다 -> 그래서 한줄로 나옴
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;



function App() {


  return (
    <>
      <GlobalStyle />
      {/* 부트스크랩 연습 */}
      {/* <Button variant="primary">Primary</Button> */}
      {/* <button type="button" className="btn btn-primary">Primary</button> */}

      {/* 헤더영역: 상단 내비게이션 바 */}
      {/* Quiz : Header 컴포넌트 추출 및 Outlet 활용하여 라우팅 구성해보기 */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            {/* index: index route(여기서는 default child route) */}
            <Route index element={<Main />} />
            {/* /detail/1 로 접속하면 productId에 1이 담김 */}
            <Route path="/detail/:productId" element={<ProductDetail />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="*" element={<div>페이지가 존재하지 않습니다.</div>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        pauseOnFocusLoss={false}
        theme="dark"
      />
    </>
  );
}

export default App;
