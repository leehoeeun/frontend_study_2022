import logo from './logo.svg';
import './App.css';
import { useRef, useState } from "react";
import PostDetail from './components/PostDetail';

function App() {
// 서버에서 데이터를 가져왔다고 가정
const [posts, setPosts] = useState([
  {
    id: 'incheon1',  // chapter10 > AttendanceBook.jsx
    areaName: 'Yeonsu-gu',
    cityName: 'Incheon',
    countryName: 'Korea',
    viewPoint: '바다전망',
    possibleDate: '2월 12일~18일',
    roomOnedayPrice: '$100',
    likeCount: 100,
  },
  {
    id: 'seoul1',
    areaName: 'Yeonsu-gu',
    cityName: 'Seoul',
    countryName: 'Korea',
    viewPoint: '바다전망',
    possibleDate: '3월 12일~18일',
    roomOnedayPrice: '$99',
    likeCount: 10,
  },
  {
    id: 'jeju1',
    areaName: 'Gi-ja',
    cityName: 'Jeju',
    countryName: 'Korea',
    viewPoint: '바다전망',
    possibleDate: '4월 12일~18일',
    roomOnedayPrice: '$199',
    likeCount: 999,
  },
]);

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
      <h4>Airbnb</h4>
      <nav>
        <ul>
          <li>트렌드</li>
          <li>패션</li>
          <li>코드</li>
        </ul>
      </nav>
    </header>

    <div className='inner'>
        {posts.map((post, index) => {
          // console.log(post[0].areaName);
          return (
            <div key={post.id} className='list'>
              <div className='img_group'>
                <img src='https://placeimg.com/360/340/any'/>
                <button className="btn_like">❤</button>
              </div>
              <div className='text_group'>
                <h4 className='roomTitle'>
                  <span>{post.areaName}, </span>
                  <span>{post.cityName},</span>
                  <span>{post.countryName},</span>
                </h4>
                <p className='viewPoint'>{post.viewPoint}</p>
                <p className='possibleDate'>{post.possibleDate}</p>
                <p className='roomOnedayPrice'>{post.roomOnedayPrice}/박</p>
                <div 
                  className='like_count_group'
                  // onClick={}
                >
                  <span className="btn_like_count">❤</span>
                  <span>1000</span>
                </div>
              </div>
            </div>
          );
        })}

      </div>



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
      {/* {posts.map((post, index) => {
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

          }}>❤ {likeCount[index]}</span>    */}
          {/* window + . */}
        {/* </div> */}
      {/* );
      })} */}

      {/* {showPostDetail? <PostDetail posts={posts} setPosts={setPosts} currentIndex={currentIndex}/> : null} */}
      {/* {showPostDetail && <PostDetail />} */}
  
    {/* </div> */}
  </>
);
}

export default App;
