import { BrowserRouter, Routes ,Route } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./component/page/MainPage";
import PostViewPage from "./component/page/PostViewPage";
import PostWritePage from "./component/page/PostWritePage";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;



function App() {
  return (
    <BrowserRouter>
      <MainTitleText>미니 블로그</MainTitleText>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post-write" element={<PostWritePage />}/>
        {/* <Route path="/post/:poId" element={<PostViewPage />}/> */}  {/* PostViewPage를 :postId 경로로 이동시키겠다*/}
        {/* <Route path="/post/:poId" element={<PostViewPage />}/>
        <Route path="/post/:poId/:otherValue" element={<PostViewPage />}/> */}
        {/* <Route path="/post/:poId/:otherValue/:anotherValue" element={<PostViewPage />}/> */}
        {/* 필수가 아닌 옵션값 */}
        <Route path="/post/:poId?/:otherValue?/:anotherValue?" element={<PostViewPage />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
