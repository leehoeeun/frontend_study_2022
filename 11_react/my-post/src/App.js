import logo from './logo.svg';
import './App.css';
import { useRef, useState } from "react";
import PostDetail from './components/PostDetail';

function App() {
  // 서버에서 데이터를 가져왔다고 가정
  const [posts, setPosts] = useState(['리액트 잘쓰려면?', '자바스크립트 핵심문법', '스타일링 가이드']);

  const [showPostDetail, setShowPostDetail] = useState(false);


  // 내가 어떤 포스트를 눌러서 상세 내용을 보고 있는지!!
  const [currentIndex, setCurrentIndex] = useState(0);

  // 좋아요!
  const [likeCount, setLikeCount] = useState([0, 0, 0]);   // 서버에서 받는다고 할 때 객체에 책제목이랑 같이 좋아요 수가 같이 배열안에 객체로 있을 거다!! 지금은 3 게시물에 각각의 개수를 넣어줌
  // 단, 배열값에 직접 작업하는 것이아니라 해당 배열을 복사한 배열에 작업을 해줘야 함!



  return (
    <>
      {/* 상단 헤더 만들기 */}
      <header className='header--dark'>
        <h4>IWPAF</h4>
        <nav>
          <ul>
            <li>트렌드</li>
            <li>패션</li>
            <li>코드</li>
          </ul>
        </nav>
      </header>

      <div className='inner'>
        {/* 포스트 목록 */}
        {/* <div className='list'>
          <h4>{posts[0]}</h4>
          <p>2023년 1월 20일</p>
          <p>by Aicha</p>
        </div>
        <div className='list'>
          <h4>{posts[1]}</h4>
          <p>2023년 1월 20일</p>
          <p>by Aicha</p>
        </div>
        <div className='list'>
          <h4>{posts[2]}</h4>
          <p>2023년 1월 20일</p>
          <p>by Aicha</p>
        </div> */}

      {/* Quiz: map()을 이용하여 post 반복 출력하기 */}
        {posts.map((post, index) => {
          return (
            <div key={index} className='list'
              onClick={() => {
                setShowPostDetail(true);    
                // 클릭하면 setShowPostDetail의 상태 값이 true로 변한 후 보여지는 동작함수
                setCurrentIndex(index);
              }}
            >
            <h4>{post}</h4>
            <p>2023년 1월 20일</p>
            <p>by Aicha</p>

            <hr />

            <span onClick={() => {
              const copyLikeCount = [...likeCount];
              // 내가 좋아하는 포스트를 클릭할 때 copyLikeCount 올라간다              
              copyLikeCount[index]++;
              setLikeCount(copyLikeCount);
              console.log(likeCount);
              console.log(copyLikeCount);

            }}>❤ {likeCount[index]}</span>   
            {/* window + . */}
          </div>
        );
        })}

        {showPostDetail? <PostDetail posts={posts} setPosts={setPosts} currentIndex={currentIndex}/> : null}
        {/* {showPostDetail && <PostDetail />} */}
    
      </div>
    </>
  );
}

export default App;
